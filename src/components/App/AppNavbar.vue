<template>
  <div class="h-14 dark:bg-dark-300 bg-primary-200 sm:hidden flex justify-between">
    <base-modal v-model="showModalSearch">
        <template #header>Поиск</template>
        <div class="py-3">
            <base-search-input v-model="search" placeholder="Найти, с кем поговорить" />
        </div>
    </base-modal>
    <base-modal v-model="showModalLogout">
        <template #header>Вы уверены, что хотите выйти?</template>
        <div class="flex gap-2">
            <base-button class="flex-4" theme="passive" @click="showModalLogout = false">Отмена</base-button>
            <base-button class="flex-2" @click="logout">Да</base-button>
        </div>
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

<script lang="ts">
import User from '@/classes/auth/User'
import BaseSearchInput from '../Chat/BaseSearchInput.vue'
export default {
    name: 'AppNavbar',
    components: { BaseSearchInput },
    data: () => ({
        links: [
            {   
                name: 'main',
                label: 'Контакты',
                icon: 'fa-solid fa-book',
                exact: true
            },
            {   
                name: 'search',
                label: 'Поиск',
                icon: 'fa-solid fa-search',
                callback: 'onSearchTap'
            },
            {   
                name: 'settings',
                label: 'Пользователь',
                icon: 'fa-solid fa-user',
                callback: 'profileEdit'
            },
            {   
                name: 'settings',
                label: 'Настройки',
                icon: 'fa-solid fa-gear',
                callback: 'configure'
            },
            {   
                name: 'logout',
                label: 'Выход',
                icon: 'fa-solid fa-right-from-bracket',
                callback: 'logout'
            }
        ],
        showModalSearch: false,
        showModalLogout: false,
        search: ''
    }),
    methods: {
        logout(): void {
            this.$store.dispatch('auth/logout')
            this.$router.push({name: 'login', query: {
                message: "auth/session-closed"
            }})
        },
        onSearchTap(): void {
            this.showModalSearch = true
        },
        onLogoutTap(): void {
            this.showModalLogout = true
        },
        profileEdit(): void {
            this.$router.push({name: 'profile-edit', params: {uid: this.user.uid}})
        },
        configure(): void {
            this.$toast.show('Пока тут ничего нет')
        },
        onClick(link): void {
            if(!link.callback) {
                this.$router.push({ name: link.name, })
            }
            else if( this[link.callback] ) this[link.callback]()
        }
    },
    computed: {
        user(): User {
            return this.$store.getters['auth/getUser']
        }
    }
}
</script>

<style>

</style>