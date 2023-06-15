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
export default defineComponent({
    name: 'MainLayout',
    data: () => ({
        contactsLoading: false
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
            await this.$store.dispatch('auth/prefetchUserData', (m: Message) => {
                this.$toast.show(`${m.sended_by_name}: ${m.content}`)
            })
        this.contactsLoading = false
    }
})
</script>

<style>
</style>