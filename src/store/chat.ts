import { firestore } from "@/firebase/config"
import { CollectionReference, collection, addDoc, getDocs, query, orderBy, Query } from "firebase/firestore"
import Message from "@/classes/chat/Message"
import cyrb53 from "@/utils/hashGenerator"
export default {
    namespaced: true,
    state: () => ({
        chats: {}
    }),
    mutations: {
        setMessages: (s, payload: {hash, messages: Message[]}) => {
            s.chats[payload.hash] = payload.messages
        }
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
        async getMessagesListByRoomHash({ commit }, room_hash) {
            if(!room_hash) return []
            const chatRoomRef: CollectionReference = collection(firestore, `chats/${room_hash}/messages`),
                q = query(chatRoomRef, orderBy('created_at'))
            const messages = (await getDocs(q)).docs.map(d => d.data()) as Message[]
            console.log({hash: room_hash, messages})
            commit('setMessages', {hash: room_hash, messages})
            return messages
        }
    }
}