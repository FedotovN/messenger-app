<template>
    <div class="flex flex-col bg-white dark:bg-dark-200 h-full transition-colors relative">
        <div class="flex bg-white dark:bg-dark-200 h-full relative">
            <app-sidebar />
            <div class="w-full relative overflow-hidden" v-if="!loadingState">
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
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppNavbar from '@/components/App/AppNavbar.vue';
import { defineComponent } from 'vue';
import { Unsubscribe } from 'firebase/auth';
export default defineComponent({
    name: 'MainLayout',
    props: {
        loadingState: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    data: () => ({
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
    }
})
</script>

<style>
</style>