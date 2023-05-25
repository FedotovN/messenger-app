<template>
  <div class="flex-col justify-between bg-gray-700 dark:bg-dark-300 left-0 h-full sm:shadow-none shadow-xl sm:relative sm:flex hidden px-2 py-2">
    <header class="flex w-full justify-center py-4">
        <avatar-badge :user="user" />
    </header>
    <ul class="flex flex-col h-full w-full -mt-3 text-white ">
        <li v-for="l in links" :key="l.name" class="flex justify-center w-full">
            <router-link
                class="flex items-center text-center w-full py-2 text-xl hover:text-primary-200 transition-colors"
                active-class="text-primary-200"
                exact-active-class="text-primary-200"
                :exact="l.exact"
                :to="{name: l.name}"
                v-tooltip="{content: l.label, offset: [0, -17]}"
                >
                <i class="w-12 mt-4" :class="l.icon"></i>
            </router-link>
        </li>    
    </ul>
  </div>
</template>

<script>
import AvatarBadge from '../UI/Auth/AvatarBadge.vue'
export default {
    name: 'AppSidebar',
    components: { AvatarBadge },
    data: () => ({
        links: [
            {
                name: 'main',
                label: 'Главная',
                icon: 'fa-solid fa-envelope',
                exact: true
            }
        ]
    }),
    computed: {
        user() {
            return this.$store.getters['auth/getUser']
        }
    }
}
</script>

<style>

</style>