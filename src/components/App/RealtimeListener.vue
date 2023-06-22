<template><div></div></template>
<script lang="ts">
import { defineComponent } from 'vue';
import Message from '@/classes/chat/Message';
export default defineComponent({
    name: "RealtimeListener",
    data: () => ({
        listener: null
    }),
    methods: {
        async setListeners() {
            console.log('setting listeners')
            this.$emit('start')

            await this.$store.dispatch('auth/prefetchUserData')
            this.listener = await this.$store.dispatch('addContactsListener')

            this.$emit('ready')
        },
        removeListeners() {
            const l = this.listener
            l?.contactsListener?.()
            l?.messagesListeners.forEach(listener => {
                listener()
            });
        }
    },
    watch: {
        user: {
            async handler(user) {
                if(user) {
                    this.firstUpload = true
                    console.log(this.listener)
                    await this.setListeners()
                }
                if(!user) this.removeListeners()
            },
            immediate: true
        }
    },
    unmounted() {
        this.removeListeners()
    },
    computed: {
        user() {
            return this.$store.getters['auth/getUser']
        },
        chatId() {
            return this.$route.params.chatId
        }
    }
})
</script>