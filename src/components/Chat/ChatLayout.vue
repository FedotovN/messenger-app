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
    <header class="flex gap-5 items-center min-h-[4rem] dark:bg-dark-200 bg-gray-700 shadow px-2 ">
      <div class="flex items-center h-full px-3 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100 transition-colors" @click="close">
        <i class="fa-solid fa-angle-left text-3xl"></i>
      </div>
      <div class="flex gap-2 items-center h-full cursor-pointer " @click="openProfile" v-if="!loading">
        <div class="flex items-center justify-center min-h-[3rem] min-w-[3rem] max-h-[3rem] max-w-[3rem] bg-gray-300 rounded-full overflow-hidden">
          <img :src="contactInfo.photoURL" v-if="contactInfo.photoURL" alt="" class="h-full w-full object-cover">
        </div>
        <div class="flex-1 overflow-hidden" v-if="contactInfo.name">
          <p class="font-semibold text-ellipsis overflow-hidden w-full dark:text-gray-300 text-gray-300">
            {{ contactInfo.name }}
          </p>
        </div>
      </div>
      <div class="flex items-center h-full pl-4" v-else>
        <base-loader size="small" />
      </div>
    </header>
    <main class="h-[calc(100vh_-_8rem)] relative">
      <div class="flex flex-col gap-2 px-2 py-1 overflow-scroll scrollbar-hide h-full relative" ref="messages_container">
        <base-message :isCounterMessage="message.sended_by_uid != getUser.uid" v-for="message in messages" :message="message" :key="+message.sended_at"></base-message>
      </div>
      <div class="top-0 left-0 absolute flex flex-col items-center h-full justify-center gap-4 z-50 w-full bg-[rgba(0,0,0,.25)] transition-all pointer-events-none" :class="!loading ? 'opacity-0' : ''">
        <base-loader size="big" />
      </div>
    </main>
    <footer class="min-h-[4rem] absolute bottom-0 w-full">
      <div class="w-full h-full" v-if="contactInfo">
        <base-chat-input v-model="newMessageText" :chatPartner="contactInfo.name" @enter="print" class="" />
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex"
import BaseMessage from "./BaseMessage.vue"
import readStatus from "@/enums/ReadStatus"
import Message from "@/classes/chat/Message"
import Contact from "@/classes/chat/Contact"
import BaseChatInput from "./BaseChatInput.vue"
import { defineComponent } from "vue"
export default defineComponent({
    name: "ChatLayout",
    components: {BaseChatInput, BaseMessage},
      data: () => ({
      contactInfo: null as unknown as Contact,
      loading: true as boolean,
      showProfile: false as boolean,
      newMessageText: '',
      messages: [] as Message[]
    }),
    mounted() {
      const container = this.$refs.messages_container as HTMLDivElement
      container.scrollTop = container.scrollHeight
    },
    async created() {
      console.log(await this.$store.dispatch('chat/getMessagesListByRoomHash', this.getRoomHash))
    },
    methods: {
      close() {
        this.$router.push({name: 'main'})
      },
      openProfile() {
        this.showProfile = true
      },
      print(text) {
        const container = this.$refs.messages_container as HTMLDivElement
        this.sendMessage(text)
        this.$nextTick(() => {
          container.scrollTo({top: container.scrollHeight, behavior: 'smooth'})
        })
      },
      async sendMessage(text): Promise<void> {
        const message = new Message(null, new Date(), this.getUser.uid, this.getUser.displayName, this.getUser.photoURL, text, readStatus.SENDED, false)
        this.messages.push(message)
        await this.$store.dispatch('chat/sendMessageToUser', {message, counterId: this.contactInfo.uid})
        this.messages = await this.$store.dispatch('chat/getMessagesListByRoomHash', this.getRoomHash)
      }
    },
    watch: {
      "$route.params.chatId": {
        async handler() {
          if(!this.$route.params.chatId) return
          this.loading = true
          this.contactInfo = await this.$store.dispatch('contacts/getUserInfoByUid', this.$route.params.chatId)
          this.messages = await this.$store.dispatch('chat/getMessagesListByRoomHash', this.getRoomHash)
          if(!this.contactInfo && this.$route.name === 'chat') this.$toast.error('Пользователь не найден')

          this.loading = false
        },
        immediate: true
      }
    },
    computed: {
      ...mapGetters('auth', ['getUser']),
      ...mapGetters('contacts', ['getContacts']),
      getRoomHash() {
          return this.getContacts?.find(c => c.uid === this.$route.params.chatId)?.room_hash
      }
    }
})
</script>

<style>

</style>