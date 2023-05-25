/*eslint-disable*/
import { firestore } from '@/firebase/config'
import { getDocs, collection, CollectionReference } from 'firebase/firestore'
export default {
    namespaced: true,
    state: () => ({
        
    }),
    mutations: {
        
    },
    getters: {
        
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
        }
    }
}