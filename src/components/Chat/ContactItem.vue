<template>
  <div
  class="cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors" @click="onClick"
  :class="{'bg-gray-300 dark:bg-gray-600':$route.params.chatId === contact.uid}">
        <div class="flex gap-3 items-center overflow-hidden w-full">
            <div class="min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden">
                <img :src="contact.photoURL" alt="" v-if="contact.photoURL" class="h-full w-full object-cover">
            </div>
            <div class="flex flex-col overflow-hidden w-full">
                <div class="w-full flex overflow-hidden justify-between items-center">
                    <p class="flex-1 text-sm font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700">{{contact.name}}</p> 
                    <!-- <div class="flex items-center justify-center text-xs h-[1rem] min-w-[1rem] p-1 rounded-full bg-green-300 text-gray-700 font-bold">1</div> -->
                </div>  
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import {defineComponent, PropType} from "vue"
import Contact from "@/classes/chat/Contact";
import { Unsubscribe } from "firebase/auth";
export default defineComponent({
    name: 'ContactItem',
    data: () => ({ roomListener: null as unknown as Unsubscribe }),
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
        }
    }
})
</script>

<style>

</style>