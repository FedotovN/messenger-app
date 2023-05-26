<template>
  <div class="flex flex-col h-full w-full bg-gray-100 dark:bg-gray-600">
    <header class="flex gap-5 items-center h-16 dark:bg-dark-200 bg-gray-700 shadow px-2">
      <div class="flex items-center h-full px-3 cursor-pointer text-gray-600 dark:text-gray-300 hover:text-gray-100 dark:hover:text-gray-100 transition-colors" @click="close">
        <i class="fa-solid fa-angle-left text-3xl"></i>
      </div>
      <div class="flex gap-2 items-center h-full" v-if="!loading">
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
    <main class="flex-1"></main>
  </div>
</template>
<script lang="ts">

import Contact from "@/classes/chat/Contact"
import { defineComponent } from "vue"
export default defineComponent({
    name: "ChatLayout",
      data: () => ({
      contactInfo: null as unknown as Contact,
      loading: true as boolean
    }),
    methods: {
      close() {
        this.$router.push({name: 'main'})
      }
    },
    watch: {
      "$route.params.chatId": {
        async handler() {
          this.loading = true
          this.contactInfo = await this.$store.dispatch('contacts/getUserInfoByUid', this.$route.params.chatId)
          if(!this.contactInfo && this.$route.name === 'chat') this.$toast.error('Пользователь не найден')

          this.loading = false
        },
        immediate: true
      }
    }
})
</script>

<style>

</style>