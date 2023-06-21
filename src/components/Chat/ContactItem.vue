<template>
  <div
  class="cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors group" @click="onClick"
  :class="{'bg-gray-300 dark:bg-gray-600':$route.params.chatId === contact.uid}">
        <div class="flex gap-3 items-center overflow-hidden w-full">
            <div class="min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden">
                <img :src="contact.photoURL" alt="" v-if="contact.photoURL" class="h-full w-full object-cover">
            </div>
            <div class="flex flex-col overflow-hidden w-full">
                <div class="w-full flex overflow-hidden justify-between items-center">
                    <div class="flex flex-col overflow-hidden">
                        <p class="flex-1 text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700">{{contact.name}}</p> 
                        <div class="flex w-full gap-1 overflow-hidden text-sm whitespace-nowrap" v-if="lastMessage">
                            <small class="overflow-hidden whitespace-nowrap text-ellipsis dark:text-gray-400 text-gray-600 font-semibold">
                                <span class="dark:text-gray-300 text-gray-700">{{ lastMessage.sended_by_name }}</span>: {{ lastMessage.content }}
                            </small>
                        </div>         
                    </div>
                    <div class="relative h-[2rem] bg-red-400">
                        <div class="flex items-center justify-center text-xs h-[1rem] min-w-[1rem] p-1 rounded-full bg-green-300 text-gray-700 font-bold absolute right-0 top-0 group-hover:opacity-0 transition-opacity" v-if="unreadMessages">{{ unreadMessages }}</div>
                        <div
                        v-tooltip="'Настройки чата'"
                        @click.stop class="flex items-center justify-center sm:text-sm text-xl h-[1rem] min-w-[1rem] p-1  text-gray-700 dark:text-gray-300 font-bold absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-gray-800 hover:dark:text-gray-200">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>  
            </div>
        </div> 
    </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import {defineComponent, PropType} from "vue"
import Contact from "@/classes/chat/Contact";
import Message from "@/classes/chat/Message";
export default defineComponent({
    name: 'ContactItem',
    data: () => ({ firstUpload: true }),
    props: {
        contact: {
            type: Object as PropType<Contact>,
            required: true
        }
    },
    methods: {
        ...mapActions('room', ['setChatListenerByRoomHash']),
        onClick() {
            this.$router.push({name: 'chat', params: {chatId: this.contact.uid}})
        }
    },
    computed: {
        uid() {
            return this.$store.getters['auth/getUser']?.uid
        },
        chatId() {
            return this.$route.params.chatId
        },
        lastMessage(): Message {
            /*eslint-disable*/
            const message: Message = this.$store.getters['room/getLastRoomMessage'](this.contact.room_hash)
            return message
        },
        unreadMessages() {
            return this.$store.getters['room/getUnreadMessagesAmount'](this.contact.room_hash)
        }
    },
    watch: {
        lastMessage(v) {
            const counter_message: boolean = v.sended_by_uid !== this.uid,
                  other_chat: boolean = this.chatId !== v.sended_by_uid

            if(counter_message && other_chat && !this.firstUpload) {
                this.$toast.show(`${v.sended_by_name}: ${v.content}`)
            } else this.firstUpload = false
        }
    }
})
</script>

<style>

</style>