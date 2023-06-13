/*eslint-disable*/
import Contact from '@/classes/chat/Contact';
import { firestore } from '@/firebase/config'
import { Unsubscribe } from 'firebase/auth';
import { getDocs, getDoc, collection,
    CollectionReference, DocumentReference, doc,
    DocumentData, setDoc, onSnapshot, QuerySnapshot } from 'firebase/firestore'

type contactKey = { uid: string; room_hash: string }
export default {
    namespaced: true,
    state: () => ({
        contacts: [] as Contact[]
    }),
    mutations: {
        setContacts: (s, p) => s.contacts = p,
        appendContact: (s, p) => s.contacts.push(p),
        setContact: (s, {uid, contact}) => s.map(c => { if(c.uid === uid){
            return contact
        } else return c})
    },
    getters: {
        getContacts: s => s.contacts,

    },
    actions: {
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
        async fetchContactByUid({dispatch}, contact): Promise<Contact | undefined>{
            const userInfo = (await dispatch('getUserInfoByUid', contact.uid))
            if(!userInfo) return
            const {email, name, photoURL, bio, uid} = userInfo as Contact
            return {email, name, photoURL, bio, room_hash: contact.room_hash, uid} as Contact
        },
        async fetchCurrentUserContacts({ dispatch, commit }): Promise<void> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  contactsRef: CollectionReference = collection(firestore, `users/${uid}/contacts`)
            let contactUIDs = ((await getDocs(contactsRef)).docs.map(c => ({...c.data()}) as contactKey))
            if(!contactUIDs) return
            
            const result: Contact[] = [];
            for(let i = 0; i < contactUIDs.length; i++) {
                result.push(await dispatch('fetchContactByUid', contactUIDs[i]))
            }
            commit('setContacts', result)
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