<template>
    <div class="flex flex-col bg-white dark:bg-dark-200 h-full transition-colors relative">
        <div class="flex bg-white dark:bg-dark-200 h-full relative">
            <app-sidebar />
            <div class="w-full relative overflow-hidden" v-if="!contactsLoading">
                <slot></slot>
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
    }
}
</script>

<style>
</style>