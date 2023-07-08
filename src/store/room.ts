import IRoomInfo from "@/interfaces/RoomInfo";
import Message from "@/classes/chat/Message";
import ReadStatus from "@/enums/ReadStatus";
import cyrb53 from "@/utils/hashGenerator";
import { firestore } from "@/firebase/config";

import { QuerySnapshot, DocumentData, CollectionReference,
         collection, query, orderBy, onSnapshot,
         setDoc, getDocs, DocumentReference, doc, deleteDoc, updateDoc } from "firebase/firestore";

import { Unsubscribe } from "firebase/auth";
export default {
    namespaced: true,
    state: () => ({
        rooms: {}
    }),
    getters: {
        getRoomInfo: (s) => (hash: string): IRoomInfo => s.rooms[hash],
        getRoomMessages: (s) => (hash: string): Message[] => s.rooms[hash]?.messages,
        getRoomMessage: (s) => (hash: string, id: string): Message => s.rooms[hash]?.messages?.find(m => m.id === id),
        getLastRoomMessage: (s) => (hash: string): Message => s.rooms[hash]?.messages.slice(-1)[0],
        getUnreadMessagesAmount: (s) => (hash: string, uid?: string): number | undefined => {
            return s.rooms[hash]?.messages.filter(m => m.readStatus !== 2 && m.sended_by_uid !== uid).length
        },
        getAllMessages: (s) => {
            return Object.keys(s.rooms).map(room_hash => {
                const room: IRoomInfo = s.rooms[room_hash]
                return room.messages
            })
        },
        getAllRooms
        : (s): IRoomInfo[] => s.rooms ,
        getAllRoomHashes: (s) => {
            return Object.keys(s.rooms) 
        }
    },
    mutations: {
        pushMessageByHash: (state, payload: {hash: string, message: Message}) => {
            if(!payload.hash) {
                console.warn('Didn\'t get room hash at pushMessageByHash commit of room.ts')
                return
            }
            const room: IRoomInfo = state.rooms[ payload.hash ]
            if(!room) {
                state.rooms[payload.hash] = { hash: payload.hash, messages: [payload.message] }
            }
            else {
                state.rooms[payload.hash].messages.push(payload.message)  
            }
        },
        updateMessage: (state, payload: {hash: string, id: string, updateFields: object}) => {
            const chosenMessageId = state.rooms[payload.hash].messages.findIndex(m => {
                return m.id === payload.id
            }),
            message = state.rooms[payload.hash].messages[chosenMessageId]
            state.rooms[payload.hash].messages[chosenMessageId] = {...message, ...payload.updateFields}
        },
        deleteMessage: (state, payload: {hash: string, id: string}) => {
            state.rooms[payload.hash].messages = state.rooms[payload.hash].messages.filter(m => m.id !== payload.id)
        },
        setRoomInfo: (state, info: IRoomInfo) => state.rooms[info.hash] = info,
        setAllRooms: (state, infos: IRoomInfo[]) => { 
            if(Object.keys(infos).length) infos.forEach(i => state.rooms[i.hash] = i) 
            else state.rooms = {}
        }
    },
    actions: {
        setChatListenerByRoomHash(_, 
            payload: {hash, callback: (snapshot: QuerySnapshot<DocumentData>) => void}): 
            Unsubscribe {
            const chatRef: CollectionReference =
                                collection(firestore, `chats/${payload.hash}/messages`),
                  q = query(chatRef, orderBy('created_at'))
            const unlisten = onSnapshot(q, payload.callback)
            return unlisten
        },
        async openNewRoom({ dispatch }, payload: {uid: string, cuid: string}): Promise<string> {
            const chatRoomHash: string = cyrb53(payload.uid + payload.cuid)
            await dispatch('contacts/handshakeUsers', {cuid: payload.cuid, chatRoomHash}, {root: true})
            
            return chatRoomHash
        },
        async sendMessageToUser({ dispatch, rootGetters, commit }, payload: {message: Message, counterId: string}): Promise<void> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  cuid = payload.counterId

            let room_id: string | undefined = rootGetters['contacts/findContact'](payload.counterId)
            if(!room_id) room_id = await dispatch('openNewRoom', {uid, cuid})
            const chatRoomRef: DocumentReference = doc(firestore, `chats/${room_id}/messages/${payload.message.id}`)

            await setDoc(chatRoomRef, {...payload.message})
        },
        async getRoomInfoByRoomHash({ commit }, room_hash): Promise<Message[]> {
            if(!room_hash) return []
            const chatRoomRef: CollectionReference = collection(firestore, `chats/${room_hash}/messages`),
                q = query(chatRoomRef, orderBy('created_at'))
            const messages = (await getDocs(q)).docs.map(d => d.data()) as Message[]
            const room_info: IRoomInfo = { hash: room_hash, messages }
            commit('setRoomInfo', room_info)
            return messages
        },
        async getAllMRoomInfosByRoomHashes({ commit, dispatch }, room_hashes: string[]) {
            const resulted: IRoomInfo[] = [];
            for(let i = 0; i < room_hashes.length; i++) {
                const hash = room_hashes[i],
                    info: IRoomInfo = {
                    hash,
                    messages: await dispatch('getRoomInfoByRoomHash', hash)
                }
                resulted.push(info)
            }
            commit('setAllRooms', resulted)
        },
        async deleteMessage({ commit, rootGetters }, payload: {id: string, counterId: string}) {
            const room_id: string | undefined = rootGetters['contacts/findContact'](payload.counterId)
            const chatRoomRef: DocumentReference = doc(firestore, `chats/${room_id}/messages/${payload.id}`)
            commit('deleteMessage', {hash: room_id, id: payload.id})
            await deleteDoc(chatRoomRef)
        },
        async updateMessage({commit, getters }, payload: {hash: string, id: string, updateFields: object}): Promise<void> {
            const messageRef: DocumentReference = doc(firestore, `chats/${payload.hash}/messages/${payload.id}`),
                  message = getters['getRoomMessage'](payload.hash, payload.id)
            await updateDoc(messageRef, {...message, ...payload.updateFields})
            commit('updateMessage', {hash: payload.hash, id: payload.id, updateFields: payload.updateFields})
        }
    }
}