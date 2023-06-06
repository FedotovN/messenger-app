import { firestore } from "@/firebase/config"
import { CollectionReference, collection, addDoc } from "firebase/firestore"
import Message from "@/classes/chat/Message"
import cyrb53 from "@/utils/hashGenerator"
export default {
    namespaced: true,
    state: () => ({

    }),
    actions: {
        async openChatRoom({ dispatch }, payload: {uid: string, cuid: string}): Promise<string> {
            const chatRoomHash: string = cyrb53(payload.uid + payload.cuid)
            await dispatch('contacts/createNewCurrentUserContact', {cuid: payload.cuid, chatRoomHash}, {root: true})

            return chatRoomHash
        },
        async sendMessageToUser({ dispatch, rootGetters }, payload: {message: Message, counterId: string}): Promise<void> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  cuid = payload.counterId
            let room_id: string | undefined = rootGetters['contacts/getContacts']?.find(contact => contact.uid === cuid)?.room_id
            if(!room_id) room_id = await dispatch('openChatRoom', {uid, cuid})

            const chatRoomRef: CollectionReference = collection(firestore, `chats/${room_id}/messages`)

            await addDoc(chatRoomRef, {...payload.message})
        }
    }
}