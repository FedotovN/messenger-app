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
                    C возвращением, {{ username }}!
                </p>
            </div>
        </div>
        <app-navbar />
    </div>
</template>

<script>
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppNavbar from '@/components/App/AppNavbar.vue';
export default {
    name: 'MainLayout',
    data: () => ({
        contactsLoading: false
    }),
    components: {
        AppSidebar, AppNavbar
    },
    async created() {
        this.contactsLoading = true
        await this.$store.dispatch('contacts/fetchCurrentUserContacts')
        this.contactsLoading = false
    },
    computed: {
        username() {
            return this.$store.getters['auth/getUser'].displayName
        }
    }
}
</script>

<style>
</style>