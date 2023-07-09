import { createStore } from 'vuex'
import auth from "./auth"
import contacts from "./contacts"
import room from './room'
import Message from '@/classes/chat/Message'
import Contact from '@/classes/chat/Contact'
import { DocumentData, QuerySnapshot } from 'firebase/firestore'
import { Unsubscribe } from 'firebase/auth'
export default createStore({
  state: {
    isMobileDevice: false
  },
  getters: {
    getIsMobileDevice: (s) => s.isMobileDevice
  },
  mutations: {
    changeIsMobileDevice: (s, p) => s.isMobileDevice = p
  },
  actions: {
    async addContactsListener({ dispatch, commit }, 
      callbacks :
      { newContactCallback?: (Contact) => void,
        newMessageCallback?: (Message) => void,
        lastMessageCallback?: (Message) => void } | undefined): Promise<{
     contactsListener: Unsubscribe,
     messagesListeners: Unsubscribe[]
    }> 
    {
      const messagesListeners: Unsubscribe[] = []
      const callbackFallback: (snapshot: QuerySnapshot<DocumentData>) => void = (snapshot: QuerySnapshot<DocumentData>) => {
        const newContacts = snapshot.docChanges().map(change => change.doc.data())
        newContacts.forEach(async (c: DocumentData) => {
            messagesListeners.push(await dispatch('addChatListener', { hash: c.room_hash }))  

            const fetched: Contact = await dispatch('contacts/fetchContactInfo', c)

            commit('contacts/appendContact', fetched)
      })}

      return {
        contactsListener: await dispatch('contacts/addContactListListenter', callbacks?.newContactCallback || callbackFallback) as Unsubscribe,
        messagesListeners
      }

    },
  async addChatListener({dispatch, commit}, {hash, newMessageCallback, lastMessageCallback} : 
    { hash: string,
      newMessageCallback?: (Message) => void,
      lastMessageCallback?: (Message) => void }): 
    Promise<Unsubscribe> {
      const defaultCallback: (snapshot: QuerySnapshot<DocumentData>) => void = (snapshot: QuerySnapshot<DocumentData>) => {
          const newMessages = snapshot.docChanges()
            .filter(change => change.type === 'added')
            .map(change => change.doc.data())
          newMessages.forEach((message) => {
                const m: Message = message as Message
                if(m.readStatus !== 2)
                  m.readStatus = 1
                commit('room/pushMessageByHash', 
                {
                    hash, 
                    message: m
                })
                if(newMessageCallback) newMessageCallback(m)
            })
          const modifiedMessages = snapshot.docChanges()
            .filter(change => change.type === 'modified')
            .map(change => change.doc.data())
          modifiedMessages.forEach((message) => {
                const m: Message = message as Message
                commit('room/updateMessage', 
                {
                    hash, 
                    id: m.id,
                    updateFields: {...m}
                })
            })
          const deletedMessages = snapshot.docChanges()
                .filter(change => change.type === 'removed')
                .map(change => change.doc.data())
          deletedMessages.forEach(message => {
            const m: Message = message as Message
            commit('room/deleteMessage', {
              hash,
              id: m.id
            })
          })
          
          if(lastMessageCallback) lastMessageCallback(newMessages[newMessages.length - 1])
      }
      return await dispatch('room/setChatListenerByRoomHash', {
        hash, 
        callback: defaultCallback
      }) 
    },
    updateConfig(_, payload) {
      let c = JSON.parse(localStorage.getItem('task-tracker-config')!)
      c = { ...c, ...payload }
      localStorage.setItem('task-tracker-config', JSON.stringify(c))
    },
    async getConfig() {
      const c = JSON.parse(localStorage.getItem('task-tracker-config')!)

      if(!c) return {
        colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : '',
        language: process.env.DEFAULT_LANG
      }
      else return c
    },
    applyConfig(_, payload) {
      if(payload.colorScheme) {
        const mainClasses: DOMTokenList = document.documentElement.classList
        mainClasses.value = ''
        mainClasses.add(payload.colorScheme)
      }
    }
  },
  modules: {
    auth, contacts, room
  }
})
