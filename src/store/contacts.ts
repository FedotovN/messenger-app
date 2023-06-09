/*eslint-disable*/
import Contact from '@/classes/chat/Contact';
import Message from '@/classes/chat/Message';
import { firestore } from '@/firebase/config'
import { Unsubscribe } from 'firebase/auth';
import { getDocs, getDoc, collection,
    CollectionReference, DocumentReference, doc,
    DocumentData, setDoc, onSnapshot, QuerySnapshot, Timestamp } from 'firebase/firestore'

type contactKey = { uid: string; room_hash: string }
export default {
    namespaced: true,
    state: () => ({
        contacts: [] as Contact[]
    }),
    mutations: {
        setContacts: (s, p) => s.contacts = p,
        appendContact: (s, p) => { 
            if(s.contacts.find(c => c.uid === p.uid)) return
            s.contacts.push(p) 
        },
        setContact: (s, {uid, contact}) => s.map(c => { if(c.uid === uid){
            return contact
        } else return c})
    },
    getters: {
        getContacts: s => s.contacts,
        getContact: s => name => {
            return s.contacts.filter(c => {
                return c.name.toLowerCase().includes(name.toLowerCase())
            })
        },
        findContact: (s) => uid => { 
            return s.contacts.find(contact => contact.uid === uid)?.room_hash 
        }
    },
    actions: {
        getSortedContacts({state, rootGetters}): Contact[] {
            type temporaryKey = {contact: Contact, lastMessage: Message}
            const contacts = state.contacts as Contact[]
            let sortedArr: Contact[] = contacts
                  .map((contact: Contact) => {
                    const { room_hash } = contact,
                          lastMessage = rootGetters['room/getLastRoomMessage'](room_hash)
                    return {contact, lastMessage} as temporaryKey
                  })
                  .sort((a: temporaryKey, b: temporaryKey) => {
                    const getNativeDate = (timestamp: Timestamp | Date | null) => {
                        if(timestamp instanceof Timestamp) return timestamp.toDate()
                        else {
                            if(timestamp === null) return new Date()
                            else return timestamp
                        }
                    },
                          first_timestamp = +getNativeDate(a.lastMessage?.created_at),
                          second_timestamp = +getNativeDate(b.lastMessage?.created_at)
                    if(first_timestamp > second_timestamp) return -1
                    else return 1
                  })
                  .map(temporaryObj => {
                    return temporaryObj.contact
                  })
            return sortedArr
        },
        async fetchUsersByName({dispatch}: any, { name }: {name: string}): Promise<Object[]> {
            const usersCollectionRef: CollectionReference = collection(firestore, 'users/'),
                  res: Object[] = [],
                  uid = await dispatch('auth/getUid', null, {root: true});
            (await getDocs(usersCollectionRef)).docs.forEach(doc => {
                const user = doc.data()
                if(user.name.toLowerCase().includes(name.toLowerCase()) && user.uid != uid) res.push(user)
            });
            return res
        },
        async getUserInfoByUid(_, uid: string): Promise<Contact> {
            const userRef: DocumentReference = doc(firestore, `users/${uid}`),
            userInfo = (await getDoc(userRef)).data()
            return userInfo as Contact
        },
        async fetchContactInfo({dispatch}, contact): Promise<Contact | undefined>{
            const userInfo = (await dispatch('getUserInfoByUid', contact.uid))
            if(!userInfo) return
            const {email, name, photoURL, bio, uid} = userInfo as Contact
            return {email, name, photoURL, bio, room_hash: contact.room_hash, uid} as Contact
        },
        async fetchCurrentUserContacts({ dispatch, commit }): Promise<Contact[]> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  contactsRef: CollectionReference = collection(firestore, `users/${uid}/contacts`)
            let contactUIDs = ((await getDocs(contactsRef)).docs.map(c => ({...c.data()}) as contactKey))
            if(!contactUIDs) return []
            
            const result: Contact[] = [];
            for(let i = 0; i < contactUIDs.length; i++) {
                result.push(await dispatch('fetchContactInfo', contactUIDs[i]))
            }
            commit('setContacts', result)
            return result
        },
        async addNewUserContact({ dispatch, commit, rootGetters }, payload: {uid: string, cuid: string, chatRoomHash: string}): Promise<void> {

            const contactsRef: CollectionReference = collection(firestore, `users/${payload.uid}/contacts`),
            contact = { uid: payload.cuid, room_hash: payload.chatRoomHash },

            contacts: Array<contactKey> | undefined = (await getDocs(contactsRef)).docs.map(c => {
                const data = c.data()
                return {room_hash: data.room_hash, uid: data.uid}
            }),
            intersection: contactKey | undefined = contacts?.find(c => contact.uid === c.uid)
            if(intersection) return

            const newContactReference: DocumentReference = doc(firestore, `users/${payload.uid}/contacts/${contact.room_hash}`);

            (await setDoc(newContactReference, contact))
        },
        async addContactListListenter({ dispatch }, callback: (snapshot: QuerySnapshot<DocumentData>) => any): Promise<Unsubscribe> {
            const uid = await dispatch('auth/getUid', null, {root: true}),
                  contactsRef: CollectionReference =
                                collection(firestore, `users/${uid}/contacts`)
            const unlisten = onSnapshot(contactsRef, callback)
            return unlisten
        },
        async handshakeUsers({ dispatch }, payload: {cuid: string, chatRoomHash: string}) {
            const uid = await dispatch('auth/getUid', null, {root: true})

            await dispatch('addNewUserContact', { uid, ...payload })
            await dispatch('addNewUserContact', { ...payload, uid: payload.cuid, cuid: uid })
        }
    }
}