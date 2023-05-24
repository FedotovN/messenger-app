<template>
    <div class="flex flex-col bg-white dark:bg-dark-200 h-full transition-colors relative">
        <app-header />
        <div class="flex bg-white dark:bg-dark-200 h-full relative">
            <app-sidebar />
            <div class="w-full relative overflow-hidden">
                <slot></slot>
            </div>
        </div>
        <app-navbar />
    </div>
</template>

<script>
import AppHeader from '@/components/App/AppHeader.vue';
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppNavbar from '@/components/App/AppNavbar.vue';
export default {
    name: 'MainLayout',
    components: {
        AppSidebar, AppHeader, AppNavbar
    }
}
</script>

<style>
</style>