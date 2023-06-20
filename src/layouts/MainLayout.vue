<template>
    <div class="flex flex-col bg-white dark:bg-dark-200 h-full transition-colors relative">
        <div class="flex bg-white dark:bg-dark-200 h-full relative">
            <app-sidebar />
            <div class="w-full relative overflow-hidden" v-if="!contactsLoading">
                <slot></slot>
            </div>
            <div class="flex justify-center items-center flex-col gap-4 h-full w-full" v-else>
                <base-loader size="medium"></base-loader>
                <p class="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Добро пожаловать, {{ username }}! 👋
                </p>
            </div>
        </div>
        <app-navbar />
    </div>
</template>

<script lang="ts">
import { mapActions, mapMutations } from 'vuex';
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppNavbar from '@/components/App/AppNavbar.vue';
import Message from '@/classes/chat/Message';
import { QuerySnapshot, DocumentData } from '@firebase/firestore';
import { defineComponent } from 'vue';
import { Unsubscribe } from 'firebase/auth';
export default defineComponent({
    name: 'MainLayout',
    data: () => ({
        contactsLoading: false,
        listener: null as unknown as {
            contactsListener: Unsubscribe,
            messagesListeners: Unsubscribe[]
        }
    }),
    components: {
        AppSidebar, AppNavbar
    },
    computed: {
        username() {
           return this.$store.getters['auth/getUser'].displayName
        },
        userContacts() {
            return this.$store.getters['contacts/getContacts'].length
        }
    },
    async created() {
        this.contactsLoading = true
        await this.$store.dispatch('auth/prefetchUserData')
        this.listener = await this.$store.dispatch('addContactsListener')

        this.contactsLoading = false
    },
    unmounted() {
        const l = this.listener
        l?.contactsListener?.()
        l?.messagesListeners.forEach(listener => {
            listener()
        });
    }
})
</script>

<style>
</style>