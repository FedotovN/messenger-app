<template>
  <div class="flex-col justify-between bg-gray-700 dark:bg-dark-300 left-0 h-full sm:shadow-none shadow-xl sm:relative sm:flex hidden px-2 pb-2">
    <header class="flex w-full justify-center py-4">
        <avatar-badge v-if="user" :user="user" fallback-name="main" :show-configuration="false"/>
    </header>
    <ul class="flex flex-col h-full w-full -mt-3 text-white ">
        <li v-for="l in links" :key="l.icon" class="flex justify-center w-full">
            <div
                @click="onClick(l)"
                class="flex items-center text-center w-full py-2 text-xl hover:text-primary-200 transition-colors cursor-pointer"
                v-tooltip="{content: l.label, offset: [0, -17], arrow: false}"
                >
                <i class="w-12 mt-4" :class="l.icon"></i>
        </div>
        </li>    
    </ul>
    <footer>
        <ul class="flex flex-col h-full w-full -mt-3 text-white ">
            <li v-for="l in footerBtns" :key="l.icon" class="flex justify-center w-full">
                <div
                    @click="onClick(l)"
                    class="flex items-center text-center w-full py-2 text-xl hover:text-primary-200 transition-colors cursor-pointer"
                    v-tooltip="{content: l.label, offset: [0, -17], arrow: false}"
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
                label: 'Сохранённые сообщения',
                icon: 'fa-solid fa-save',
                callback: 'onSaveTap'
            },
            {   
                label: 'Пользователь',
                icon: 'fa-solid fa-user',
                callback: 'profileEdit'
            },
            {   
                label: 'Друзья',
                icon: 'fa-solid fa-handshake',
            },
            {   
                label: 'Настройки',
                icon: 'fa-solid fa-gear',
                callback: 'configure'
            }
        ],
        footerBtns: [
            {   
                label: 'Что это такое?',
                icon: 'fa-solid fa-circle-question',
                callback: ''
            },
            {   
                label: 'Пригласить друзей',
                icon: 'fa-solid fa-bullhorn',
                callback: ''
            },
            {   
                label: 'Выход',
                icon: 'fa-solid fa-arrow-right-from-bracket',
                callback: 'logout',
                exact: false
            }
        ]
    }),
    methods: {
        async logout(): Promise<void> {
            this.$router.push({name: "login", query: {
                message: "auth/session-closed"
            }}).then(async ()=>{
                await this.$store.dispatch('auth/logout')
            })
        },
        profileEdit(): void {
            this.$router.push({name: 'profile-edit', params: {uid: this.user.uid}})
        },
        onClick(link): void {
            if(link.name) {
                this.$router.push({ name: link.name, })
            }
            else if( this[link.callback] ) this[link.callback]()
            else {
                this.$toast.show(link.label)
            }
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