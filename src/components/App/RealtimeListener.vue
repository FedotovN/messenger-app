<template><div></div></template>
<script lang="ts">
import Message from '@/classes/chat/Message';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
export default defineComponent({
    name: "RealtimeListener",
    data: () => ({
        listener: null,
        notificationListeners: [],
        firstUpload: true
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
        },
        removeNotificationListener() {
            this.notificationListeners.forEach(l => {
                l()
            })
        }
    },
    watch: {
        user: {
            async handler(user) {
                if(user) {
                    this.firstUpload = true
                    await this.setListeners()
                }
                if(!user) this.removeListeners()
            },
            immediate: true
        },
        hashes: {
            handler(value) {
                this.removeNotificationListener()
                value.forEach((hash: string)=> {
                    let lastMessage = () => this.getLastMessage(hash)
                    const listener = this.$watch(
                        lastMessage,
                        (newValue: Message) => {
                            console.log(this.firstUpload)
                            if(this.firstUpload) return
                            const counter_message: boolean = newValue.sended_by_uid !== this.uid,
                            other_chat: boolean = this.chatId !== newValue.sended_by_uid

                            if(counter_message && other_chat) {
                                this.$toast.show(`${newValue.sended_by_name}: ${newValue.content}`)
                            }
                        }, {deep: true}
                    )
                    this.notificationListeners.push(listener)
                }) 
                this.firstUpload = false
            }
        }
    },
    unmounted() {
        this.removeListeners()
    },
    computed: {
        chatId() {
            return this.$route.params.chatId
        },
        uid() {
            return this.user.uid
        },
        ...mapGetters('auth', {
            user: 'getUser'
        }),
        ...mapGetters('room', {
            hashes: 'getAllRoomHashes',
            getLastMessage: 'getLastRoomMessage'
        }),
    }
})
</script>   