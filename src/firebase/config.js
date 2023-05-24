import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBLHwl9eIM_akgf8ztRR2R4qfnZp0bdkhM",
    authDomain: "task-tracker-vue.firebaseapp.com",
    projectId: "task-tracker-vue",
    storageBucket: "task-tracker-vue.appspot.com",
    messagingSenderId: "156613623132",
    appId: "1:156613623132:web:1d16afe9d5d5272082d599"
};
const app = initializeApp(firebaseConfig),
      auth = getAuth(app),
      firestore = getFirestore(app),
      database = getDatabase(app),
      storage = getStorage(app)

export { auth, firestore, database, storage }