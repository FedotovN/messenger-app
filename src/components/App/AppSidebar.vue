<template>
  <div class="flex-col justify-between bg-gray-700 dark:bg-dark-300 left-0 h-full sm:shadow-none shadow-xl sm:relative sm:flex hidden px-2 py-2">
    <header class="flex w-full justify-center py-4">
        <avatar-badge :user="user" fallback-name="main" />
    </header>
    <ul class="flex flex-col h-full w-full -mt-3 text-white ">
        <li v-for="l in links" :key="l.name" class="flex justify-center w-full">
            <div
                @click="onClick(l)"
                class="flex items-center text-center w-full py-2 text-xl hover:text-primary-200 transition-colors cursor-pointer"
                v-tooltip="{content: l.label, offset: [0, -17]}"
                >
                <i class="w-12 mt-4" :class="l.icon"></i>
        </div>
        </li>    
    </ul>
    <footer>
        <ul class="flex flex-col h-full w-full -mt-3 text-white ">
            <li v-for="l in footerBtns" :key="l.name" class="flex justify-center w-full">
                <div
                    @click="onClick(l)"
                    class="flex items-center text-center w-full py-2 text-xl hover:text-primary-200 transition-colors cursor-pointer"
                    :to="{name: l.name}"
                    v-tooltip="{content: l.label, offset: [0, -17]}"
                    >
                    <i class="w-12 mt-4" :class="l.icon"></i>
            </div>
            </li>    
        </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import AvatarBadge from '../UI/Auth/AvatarBadge.vue'
import {defineComponent} from "vue"
export default defineComponent({
    name: 'AppSidebar',
    components: { AvatarBadge },
    data: () => ({
        links: [
            {   
                name: 'main',
                label: 'Контакты',
                icon: 'fa-solid fa-book',
                exact: true
            },
            {   
                name: 'saved',
                label: 'Сохранённые сообщения',
                icon: 'fa-solid fa-save',
                callback: 'onSaveTap'
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
            }
        ],
        footerBtns: [
            {   
                name: 'logout',
                label: 'Выход',
                icon: 'fa-solid fa-arrow-right-from-bracket',
                callback: 'logout',
                exact: false
            }
        ]
    }),
    methods: {
        onSaveTap(): void {
            this.$toast.show('Пока тут ничего нет')
        },
        async logout(): Promise<void> {
            await this.$store.dispatch('auth/logout')
            this.$router.push({name: "login", query: {
                message: "auth/session-closed"
            }})
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
        user() {
            return this.$store.getters['auth/getUser']
        }
    }
})
</script>

<style>

</style>