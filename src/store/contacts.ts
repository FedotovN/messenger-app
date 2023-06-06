/*eslint-disable*/
import Contact from '@/classes/chat/Contact';
import User from '@/classes/auth/User';
import { firestore } from '@/firebase/config'
import { getDocs, getDoc, collection, CollectionReference, DocumentReference, doc, updateDoc } from 'firebase/firestore'
export default {
    namespaced: true,
    state: () => ({
        contacts: [] as Contact[]
    }),
    mutations: {
        setContacts: (s, p) => s.contacts = p
    },
    getters: {
        getContacts: s => s.contacts
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
        async fetchCurrentUserContacts({ dispatch, commit}): Promise<void> {
            const uid: string = await dispatch('auth/getUid', null, {root: true}),
                  userRef: DocumentReference = doc(firestore, `users/${uid}`)
            const contacts = ((await getDoc(userRef)).data() as User).contacts as Contact[]
            commit('setContacts', contacts)
        },
        async addNewUserContact({ dispatch, commit, rootGetters }, payload: {uid: string, cuid: string, chatRoomHash: string}): Promise<void> {
                  const userRef: DocumentReference = doc(firestore, `users/${payload.uid}`),
                  contact: Contact = {...(await dispatch('getUserInfoByUid', payload.cuid)), room_hash: payload.chatRoomHash, contacts: null},
                  // Получение списка контактов и проверка на наличие этого контакта
                  contacts: Contact[] | undefined = ((await getDoc(userRef)).data() as User).contacts,
                  intersection: Contact | undefined = contacts?.find(c => contact.uid === c.uid)
            if(intersection) return
            const newContactsList = [...(contacts ? contacts : []), contact];

            (await updateDoc(userRef, {contacts: newContactsList}))
            if(rootGetters['auth/getUser'].uid === payload.uid) commit('setContacts', newContactsList)
        },
        async handshakeUsers({ dispatch }, payload: {cuid: string, chatRoomHash: string}) {
            const uid = await dispatch('auth/getUid', null, {root: true})

            await dispatch('addNewUserContact', {uid, ...payload})
            await dispatch('addNewUserContact', {...payload, uid: payload.cuid, cuid: uid})
        }
    }
}