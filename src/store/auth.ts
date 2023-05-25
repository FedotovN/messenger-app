/*eslint-disable*/
import { auth, storage, firestore } from '@/firebase/config'
import { signInWithEmailAndPassword,
         signInWithPopup,
         createUserWithEmailAndPassword,
         sendEmailVerification,
         sendPasswordResetEmail,
         updateProfile, GoogleAuthProvider
       } from 'firebase/auth'
import { uploadBytes, ref, getDownloadURL, StorageReference } from "firebase/storage"
import { doc, getDoc, setDoc } from 'firebase/firestore'
export default {
    namespaced: true,
    state: () => ({
        user: null
    }),
    mutations: {
        setUser: (s, p) => s.user = p
    },
    getters: {
        getUser(s) { return s.user}
    },
    actions: {
        async linkWithDb(_, newProfile) {
            let res = {}
            try {
                const ref = await doc(firestore, `users/${newProfile.uid}`),
                  data = (await getDoc(ref)).data()
                  console.log(data)
                if(data) res = { ...data, ...newProfile }
                else res = { ...newProfile }
                res = Object.entries(res).filter( i => i[1] ).reduce((acc, item) => {
                    return acc = {...acc, [item[0]]: item[1]}
                }, {})
                console.log(res)
                await setDoc(ref, res)
            }
            catch(e) {
                console.warn('Error in linkWithDb method of auth store module')
                throw(e)
            }
        },
        checkAuth({ commit }) {
            commit('setUser', auth.currentUser ? auth.currentUser : null)
        },
        async signInWithGoogle({ commit }){
            try {
                const provider = new GoogleAuthProvider()
                const user = (await signInWithPopup(auth, provider)).user
                commit('setUser', user)
            }
            catch(e) {
                console.warn('Error in signInWithGoogle method of auth store module')
                throw(e)
            }
            
        },
        async signInWithEmail({ commit, dispatch }, {email, password, toSaveUser = false}) {
            try {
                const user = (await signInWithEmailAndPassword(auth, email, password)).user
                // if(!user.emailVerified){
                //     const e: NodeJS.ErrnoException = new Error()
                //     e.code = "auth/email-not-verified"
                //     throw(e)
                // }

                commit('setUser', user)
                if(toSaveUser) {
                    const info = {
                        email: user.email,
                        password,
                        uid: user.uid,
                        name: user.displayName,
                        photoUrl: user.photoURL
                    }
                    dispatch('cacheUser', info)
                }
            }
            catch(e) {
                console.warn('Error in signInWithEmail method of auth store module')
                throw(e)
            }
        },
        async registerWithEmail({dispatch}, { name, email, password }) {
            try {
                const user = (await createUserWithEmailAndPassword(auth, email, password)).user
                await dispatch('updateUserProfile', { name, email, password })
                await sendEmailVerification(user)
            }
            catch(e) {
                console.warn('Error in registerInWithEmail method of auth store module')
                throw(e)
            }
        },
        async logout({commit}) {
            try  {
                await auth.signOut()
                commit('setUser', null)
            }
            catch(e){
                console.warn('Error in logout method of auth store module')
                throw(e)
            }
        },
        async resetPassword(_, email) {
            try {
                await sendPasswordResetEmail(auth, email)
            }
            catch(e){
                console.warn('Error in resetPassword method of auth store module')
                throw(e)
            }
        },
        cacheUser(_,{email, password, uid, name, bio, photoUrl}) {
            try {
                const userInfo = {email, password, uid, name, photoUrl}

                let users = JSON.parse(""+localStorage.getItem('task-tracker-users')),
                    updated = false
                users = users?.map(user => {
                    if(user.uid === uid) {
                        updated = true
                        return {email, password, uid, bio, name, photoUrl}
                    }
                    else return user
                })
                const newList = updated ? users :  [userInfo, ...(users ? users : []) ] 
                localStorage.setItem('task-tracker-users', JSON.stringify(newList))
            }
            catch(e) {
                console.warn('Error in saveUser method in auth store module')
                throw(e)
            }
        },
        getCachedUsers() {
            try{
                const users = JSON.parse(""+localStorage.getItem('task-tracker-users'))
                return users?.length ? users : null
            }
            catch(e){
                console.warn('Error in getUser method in auth store module')
                throw(e)
            }
        },
        getCachedUser(_, uid) {
            try{
                const users = JSON.parse(""+localStorage.getItem('task-tracker-users'))
                const res = users?.find(item => {
                    if(item.uid == uid) return item
                })
                return res ? res : null
            }
            catch(e){
                console.warn('Error in getCachedUser method in auth store module')
                throw(e)
            }
        },
        removeCachedUser(_, uid) {
            try{
                let users = JSON.parse(""+localStorage.getItem('task-tracker-users'))
                if(users) {
                    users = users.filter(item => item?.uid != uid)
                }
                localStorage.setItem('task-tracker-users', JSON.stringify(users))
            }
            catch(e){
                console.warn('Error in removeCachedUser method in auth store module')
                throw(e)
            }
        },
        async updateUserProfile({ dispatch }, { name, email, password, bio, profile_photo_file }) {
            try {
                const uid = await dispatch('getUid')
                let storageReference: StorageReference
                if(profile_photo_file) {
                    storageReference = ref(storage, `users/${uid}/avatar.jpeg`)
                    await uploadBytes(storageReference, profile_photo_file)
                }      
                const photoURL = storageReference! ? await getDownloadURL(storageReference) : null 
                await updateProfile(auth.currentUser!, {
                    displayName: name,
                    photoURL
                })
                await dispatch('linkWithDb', {uid, name, email, password, bio, photoURL})
            }
            catch(e) {
                console.warn('Error in updateProfile method in auth store module')
                console.warn(e)
                throw(e)
            }
        },
        getUid() {
            const user = auth.currentUser
            return user ? user.uid : null
        }
    }
}