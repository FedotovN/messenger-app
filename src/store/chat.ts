import { firestore } from "@/firebase/config"
import { CollectionReference, collection, addDoc, getDocs, query, orderBy, Query } from "firebase/firestore"
import Message from "@/classes/chat/Message"
import IChatInfo from "@/interfaces/ChatInfo"
import cyrb53 from "@/utils/hashGenerator"
export default {
    namespaced: true,
    state: () => ({
        chats: {}
    }),
    mutations: {
        setRoomInfo: (s, info: IChatInfo) => {
            s.chats[info.hash] = info
        },
        setAllMessages: (s, infos: IChatInfo[]) => {
            infos.forEach(c => {
                s.chats[c.hash] = {
                    messages: c.messages,
                    last_message: c.last_message
                }
            })
        }
    },
    getters: {
        getRoomInfoByHash: (state) => (hash) => {
            return state.chats[hash]
        },
        getLastMessageByRoomHash: (state) => (hash) => {
            return state.chats[hash]?.last_message
        },
        isPreloaded: (s): boolean => !!Object.keys(s.chats).length
    },
    actions: {
        async openChatRoom({ dispatch }, payload: {uid: string, cuid: string}): Promise<string> {
            const chatRoomHash: string = cyrb53(payload.uid + payload.cuid)
            await dispatch('contacts/handshakeUsers', {cuid: payload.cuid, chatRoomHash}, {root: true})
            
            return chatRoomHash
        },
        async sendMessageToUser({ dispatch, rootGetters }, payload: {message: Message, counterId: string}): Promise<void> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  cuid = payload.counterId
            let room_id: string | undefined = rootGetters['contacts/getContacts']?.find(contact => contact.uid === cuid)?.room_hash
            if(!room_id) room_id = await dispatch('openChatRoom', {uid, cuid})
            const chatRoomRef: CollectionReference = collection(firestore, `chats/${room_id}/messages`)   
            await addDoc(chatRoomRef, {...payload.message})
        },
        async getMessagesListByRoomHash({ commit }, room_hash): Promise<Message[]> {
            if(!room_hash) return []
            const chatRoomRef: CollectionReference = collection(firestore, `chats/${room_hash}/messages`),
                q = query(chatRoomRef, orderBy('created_at'))
            const messages = (await getDocs(q)).docs.map(d => d.data()) as Message[]
            const room_info: IChatInfo = {hash: room_hash, messages}
            commit('setRoomInfo', room_info)
            return messages
        },
        async getRoomInfoByHash({ commit, dispatch }, hash) {
            const info: IChatInfo = {
                hash,
                messages: await dispatch('getMessagesListByRoomHash', hash)
            }
            commit('setRoomInfo', info)
        },
        async getAllMessagesByRoomHashes({ commit, dispatch }, room_hashes: string[]) {
            console.time('messages prefetch')
            const resulted: IChatInfo[] = [];
            for(let i = 0; i < room_hashes.length; i++) {
                const hash = room_hashes[i],
                    info: IChatInfo = {
                    hash,
                    messages: await dispatch('getMessagesListByRoomHash', hash)
                }
                info.messages ? info.last_message = info.messages[0] : null

                resulted.push(info)
            }
            console.log('Get all user messages: ',resulted)
            console.timeEnd('messages prefetch')
            commit('setAllMessages', resulted)
        }
    }
}