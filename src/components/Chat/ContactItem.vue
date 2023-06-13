<template>
  <div
  class="cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors" @click="onClick"
  :class="{'bg-gray-300 dark:bg-gray-600':$route.params.chatId === contact.uid}">
        <div class="flex gap-3 items-center overflow-hidden w-full">
            <div class="min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden">
                <img :src="contact.photoURL" alt="" v-if="contact.photoURL" class="h-full w-full object-cover">
            </div>
            <div class="flex flex-col overflow-hidden w-full border-b border-b-gray-600 pb-2">
                <div class="w-full flex overflow-hidden justify-between items-center">
                    <p class="flex-1 text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700">{{contact.name}}</p> 
                    <!-- <div class="flex items-center justify-center text-xs h-[1rem] min-w-[1rem] p-1 rounded-full bg-green-300 text-gray-700 font-bold">1</div> -->
                </div>  
                <div class="w-full flex overflow-hidden justify-between" v-if="lastMessage">
                    <small class="flex-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-500 text-gray-500">
                        <span class="text-gray-400">{{lastMessage.sended_by_name}}</span>: {{ lastMessage.content }}</small>
                    <small class="pl-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-400 text-gray-600">{{ filteredDate }}</small>
                </div>
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import { filterDateFromJSONString } from "@/utils/dateFilter";
import Contact from "@/classes/chat/Contact";
import Message from "@/classes/chat/Message";
import { QuerySnapshot, DocumentChange, DocumentData } from "firebase/firestore";
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
        onClick() {
            this.$router.push({name: 'chat', params: {chatId: this.contact.uid}})
        }
    },
    created() {
        this.$store.dispatch('chat/setChatListenerByRoomHash', {
            hash: this.contact.room_hash,
            callback: (snapshot: QuerySnapshot) => {
                if(this.firstUpload) {
                    this.firstUpload = false
                    return
                }
                console.log('here!')
                let newMessages: Message[];
                snapshot.docChanges().forEach((d: DocumentChange<DocumentData>) => {
                    if(d.type === 'added') {
                        const message: Message = d.doc.data() as Message
                        if(message.sended_by_uid !== this.uid) {
                            this.$toast.show(`${message.sended_by_name}: ${message.content}`)
                        }
                        this.$store.commit('chat/appendMessageToHash', {
                            hash: this.contact.room_hash,
                            message
                        })
                   }
                })
            }
        })
    },
    computed: {
        lastMessage() {
            return this.$store.getters['chat/getLastMessageByRoomHash'](this.contact.room_hash) as Message
        },
        filteredDate() {
            return filterDateFromJSONString(this.lastMessage?.sended_at)
        },
        uid() {
            return this.$store.getters['auth/getUser']?.uid
        }
    }
})
</script>

<style>

</style>