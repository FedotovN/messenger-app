<template>
  <div class="flex flex-col max-h-[100vh] w-full bg-gray-100 dark:bg-gray-600 relative">
    <base-modal v-model="showProfile" v-if="contactInfo">
      <template #header>
        Пользователь {{ contactInfo.name }}
      </template> 
      <p v-if="contactInfo.bio" class="overflow-x-hidden">О себе: {{ contactInfo.bio }}</p>
      <p v-else>Решил не рассказывать о себе ничего!</p>
      <p v-if="contactInfo.email">Почта: {{ contactInfo.email }}</p>
    </base-modal>
    <header class="flex gap-5 items-center h-14 dark:bg-dark-200 bg-gray-700 shadow pr-2 ">
      <div class="flex items-center justify-center h-full w-16 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100 transition-colors" @click="close">
        <i class="fa-solid fa-angle-left text-xl"></i>
      </div>
      <div class="flex gap-2 items-center h-full cursor-pointer " @click="openProfile" v-if="!loading">
        <div class="flex items-center justify-center min-h-[2.5rem] min-w-[2.5rem] max-h-[2.5rem] max-w-[2.5rem] bg-gray-300 rounded-full overflow-hidden">
          <img :src="contactInfo?.photoURL" v-if="contactInfo?.photoURL" alt="" class="h-[2.5rem] w-[2.5rem] object-cover">
        </div>
        <div class="flex-1 overflow-hidden" v-if="contactInfo?.name">
          <p class="font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-300 text-gray-300 text-sm">
            {{ contactInfo.name }}
          </p>
          <p class="font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-500 text-gray-500 text-xs">
            {{ contactInfo.uid }}
          </p>
        </div>
      </div>
      <div class="flex items-center h-full pl-4" v-else>
        <base-loader size="small" />
      </div>
    </header>
    <main class="flex-1">
      <messages-list :messages="messages" :uid="getUser.uid" v-if="messages?.length"/>
      <div class="top-0 left-0 absolute flex flex-col items-center sm:h-full h-[calc(100%)] justify-center gap-4 z-50 w-full bg-[rgba(0,0,0,.4)] transition-all pointer-events-none" :class="!loading ? 'opacity-0' : ''">
          <base-loader size="big" />
      </div>
    </main>
    <footer class="absolute bottom-0 w-full">
      <div class="w-full h-full" v-if="contactInfo">
        <base-chat-input v-model="newMessageText" :chatPartner="contactInfo.name" @enter="print" class="" />
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import _ from "lodash"
import { mapGetters } from "vuex"
import readStatus from "@/enums/ReadStatus"
import Message from "@/classes/chat/Message"
import Contact from "@/classes/chat/Contact"
import BaseChatInput from "./BaseChatInput.vue"
import MessagesList from "./MessagesList.vue"
import { defineComponent } from "vue"
export default defineComponent({
    name: "ChatLayout",
    components: { BaseChatInput, MessagesList },
      data: () => ({
      contactInfo: null as unknown as Contact,
      messagesContainer: null as unknown as HTMLDivElement,
      messages: [] as Message[],
      loading: false as boolean,
      showProfile: false as boolean,
      newMessageText: '',
    }),
    methods: {
      close() {
        this.$router.push({name: 'main'})
      },
      openProfile() {
        this.showProfile = true
      },
      print(text) {
        this.messagesContainer = this.$refs.messages_container as HTMLDivElement
        this.sendMessage(text)
      },
      async sendMessage(text): Promise<void> {
        if(!text) return
        const id = Math.random() + ""
        const message = new Message(id, new Date(), JSON.stringify(new Date()), this.getUser.uid, this.getUser.displayName, this.getUser.photoURL, text, readStatus.SENDING)
        this.messages.push(message)

        await this.$store.dispatch('room/sendMessageToUser', {message, counterId: this.contactInfo.uid})
      },
      async getContactInfo(): Promise<Contact> {
        const counterUid = this.$route.params.chatId

        let contact = this.getContacts.find(c => {
          return c.uid === counterUid
        })
        if(!contact) {
          contact = await this.$store.dispatch('contacts/getUserInfoByUid', this.$route.params.chatId)
        }
        return contact
      }
    },
    watch: {
      "$route.params.chatId": {
        async handler(v) {
          this.messages = []
          if(!v) return
          this.loading = true

          this.contactInfo = await this.getContactInfo()  
          this.messages = _.cloneDeep(this.getMessages)

          this.loading = false
          if(!this.contactInfo && this.$route.name === 'chat'){
            this.$router.push({name: 'main'}).then(()=>{
              this.$toast.error('Пользователь не найден')
            })
          }
        },
        immediate: true
      },
      getMessages: {
        handler(v) {
          this.messages = _.cloneDeep(v)
        },  
        deep: true
      }
    },
    computed: {
      ...mapGetters('auth', ['getUser']),
      ...mapGetters('contacts', ['getContacts']),
      ...mapGetters('room', ['getRoomInfo']),
      getRoomHash() {
          return this.getContacts?.find(c => c.uid === this.$route.params.chatId)?.room_hash
      },
      getMessages() {
        return this.getRoomInfo(this.getRoomHash)?.messages || []
      }
    }
})
</script>

<style>

</style>