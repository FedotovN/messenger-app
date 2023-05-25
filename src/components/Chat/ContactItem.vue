<template>
  <div class="cursor-pointer min-h-[3.25rem] flex items-center justify-between overflow-hidden hover:bg-gray-300 dark:hover:bg-gray-600 px-2 transition-colors" @click="onClick">
        <div class="flex gap-2 items-center overflow-hidden">
            <div class="h-[2.5rem] w-[2.5rem] rounded-full bg-gray-300 overflow-hidden">
                <img :src="contact.photoURL" alt="" v-if="contact.photoURL" class="h-full w-full object-cover">
            </div>
            <p class="flex-1 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap dark:text-gray-300 text-gray-700">{{contact.name}}</p> 
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