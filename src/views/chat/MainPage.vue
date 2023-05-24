<template>
    <div class="flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text">
        <contacts-list></contacts-list>
        <chat-layout></chat-layout>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactsList from '@/components/Chat/ContactsList.vue';
import ChatLayout from '@/components/Chat/ChatLayout.vue';
export default defineComponent({
    components: { ContactsList, ChatLayout },
    computed: {
        showContacts() {
            return !this.$route.params.chatId
        }
    }
})
</script>

<style>

</style>