<template>
  <div class="flex flex-col max-h-[100vh] w-full dark:bg-gray-600 relative overflow-hidden">
    <base-modal v-model="showProfile" v-if="contactInfo">
      <template #header>
        <p>Пользователь {{ contactInfo.name }}</p>
      </template> 
      <div class="flex flex-col gap-3 items-center space-y-2">
        <div class="w-[calc(32*.25rem)] overflow-hidden bg-gray-100 rounded-full">
          <img :src="contactInfo.photoURL" :alt="contactInfo.name" v-if="contactInfo.photoURL" class="object-fit h-full">
        </div>
        <p v-if="contactInfo.bio" class="overflow-x-hidden">О себе: {{ contactInfo.bio }}</p>
      </div>
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
      <messages-list
        @editMessage="onEditMessage"
        :messages="messages"
        :uid="getUser.uid"
        :roomHash="getRoomHash"
      v-if="messages?.length"/>
      <div class="top-0 left-0 absolute flex flex-col items-center sm:h-full h-[calc(100%)] justify-center gap-4 z-50 w-full bg-[rgba(0,0,0,.4)] transition-all pointer-events-none" :class="!loading ? 'opacity-0' : ''">
          <base-loader size="big" />
      </div>
    </main>
    <footer class="absolute bottom-0 w-full bg-gray-100 dark:bg-gray-700">
      <div class="flex gap-2 w-full p-2" v-if="contactInfo">
        <message-form
          class="self-center" 
          :chatPartner="contactInfo.name"
          @newMessage="sendMessage"
        />
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import _ from "lodash"
import { mapGetters } from "vuex"
import Message from "@/classes/chat/Message"
import Contact from "@/classes/chat/Contact"
import MessageForm from "./MessageForm.vue"
import MessagesList from "./MessagesList.vue"
import { defineComponent } from "vue"
export default defineComponent({
    name: "ChatLayout",
    components: { MessageForm, MessagesList },
      data: () => ({
      contactInfo: null as unknown as Contact,
      messagesContainer: null as unknown as HTMLDivElement,
      messages: [] as Message[],
      loading: false as boolean,
      showProfile: false as boolean,
      newMessageText: ''
    }),
    methods: {
      close() {
        this.$router.push({name: 'main'})
      },
      openProfile() {
        this.showProfile = true
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
      },
      async sendMessage(message: Message): Promise<void> {
        if(!message) return
        try {
            this.messages.push(message)
            await this.$store.dispatch('room/sendMessageToUser', {message, counterId: this.contactInfo.uid})
          }
          catch(e) {
              console.warn(e)
          } 
        },
      onEditMessage(message) {
        this.editableMessage = message
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
      },
      chatId() {
        return this.$route.params.chatId
      }
    }
})
</script>

<style>

</style>