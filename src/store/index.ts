import { createStore } from 'vuex'
import auth from "./auth"
import contacts from "./contacts"
import room from './room'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
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
