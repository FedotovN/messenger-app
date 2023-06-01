<template>
  <div class="cursor-pointer min-h-[3.5rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors" @click="onClick">
        <div class="flex gap-3 items-center overflow-hidden w-full">
            <div class="min-h-[2.5rem] min-w-[2.5rem] w-[2.5rem] h-[2.5rem] rounded-full bg-gray-300 overflow-hidden">
                <img :src="contact.photoURL" alt="" v-if="contact.photoURL" class="h-full w-full object-cover">
            </div>
            <div class="flex flex-col overflow-hidden w-full">
                <div class="w-full flex overflow-hidden justify-between items-center">
                    <p class="flex-1 text-md font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700">{{contact.name}}</p> 
                    <div class="h-2 w-2 bg-green-300 rounded-full"></div>
                    <div class="h-2 w-2 bg-red-300 rounded-full"></div>
                    <div class="h-2 w-2 dark:bg-gray-500 bg-gray-400  rounded-full"></div>
                </div>  
                <div class="w-full flex overflow-hidden justify-between">
                    <small class="flex-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-500 text-gray-500">{{contact.name}} 111111111111111111111111111111111111111111</small>
                    <small class="pl-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-400 text-gray-600">12:30</small>
                </div>
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import Contact from "@/classes/chat/Contact";
export default defineComponent({
    name: 'ContactItem',
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
    }
})
</script>

<style>

</style>