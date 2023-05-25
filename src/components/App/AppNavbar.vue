<template>
  <div class="h-14 dark:bg-dark-300 bg-primary-200 sm:hidden flex justify-between">
    <base-modal v-model="showModal">
        meow meow meow meow =^.,.^=
    </base-modal>
    <ul class="flex h-full w-full">
        <li v-for="l in links" :key="l.name" class="flex flex-1 cursor-pointer items-center justify-center ">
            <div
                class="w-full h-full flex items-center dark:hover:text-primary-100 hover:text-white hover:opacity-100"
                @click="onClick(l)">
                <div class="flex items-center justify-center w-full dark:hover:text-primary-100 hover:text-white hover:opacity-100">
                    <i
                    class=" transition-colors text-lg"
                    :class="{
                        [l.icon]: true,
                        'dark:text-white text-gray-100 opacity-80 dark:opacity-100 ': l.name != $route.name,  
                        'dark:text-primary-100 opacity-100 text-white': l.name == $route.name
                    }"></i>
                </div>
            </div>
        </li>    
    </ul>
  </div>
</template>

<script>
export default {
    name: 'AppNavbar',
    data: () => ({
        links: [
            {   
                name: 'main',
                label: 'Главная',
                icon: 'fa-solid fa-envelope',
                exact: true
            },
            {   
                name: 'search',
                label: 'Поиск',
                icon: 'fa-solid fa-search',
                callback: 'search'
            },
            {   
                name: 'logout',
                label: 'Выход',
                icon: 'fa-solid fa-arrow-right-from-bracket',
                callback: 'logout'
            },
        ],
        showModal: false
    }),
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.push({name: 'login', query: {
                message: "auth/session-closed"
            }})
        },
        search() {
            this.showModal = true
        },
        onClick(link) {
            if(!link.callback) {
                this.$router.push({name: link.name})
            }
            else if( this[link.callback] ) this[link.callback]()
        }
    }
}
</script>

<style>

</style>