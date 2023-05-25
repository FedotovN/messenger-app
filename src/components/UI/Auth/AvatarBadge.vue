<template>
  <div class="flex gap-5 items-center overflow-hidden cursor-pointer" v-if="user">
    <div class="rounded-full min-w-[2.5rem] w-10 h-10 bg-gray-300 overflow-hidden">
        <img :src="user.photoURL" :alt="user.name" class="object-cover h-full w-full" v-if="user.photoURL">
    </div>
    <base-tooltip :options="{trigger: 'click', arrow: false, theme: 'white'}">
        <div class="w-[150px] text-center flex flex-col text-white gap-4">
            <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="edit">Профиль</p>
            <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="settings">Настройки</p>
            <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="logout">Выход</p>
        </div>
    </base-tooltip>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import User from "@/classes/auth/User"
import { RouteLocationRaw } from "vue-router"
export default defineComponent({
    name: "AvatarBadge",
    props: {
        user: {
            type: Object as PropType<User>,
            required: true
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout')
            this.$router.push({
                name: 'login',
                query: {
                    message: 'auth/session-closed'
                }
            })
        },
        edit() {
            this.$router.push(
                {
                    name: 'profile-edit',
                    params: {
                        uid: this.user.uid
                    },
                    query: {
                        fallback: this.$route.name
                    }
                } as RouteLocationRaw
            )
        },
        settings() {
            this.$toast.error('Пока тут ничего нет')
        }
    },
    computed: {
        pageTitle() {
            return this.$route.meta.title
        },
        userInfo() {
            return this.$store.getters['auth/getUser']
        }
    }
})
</script>

<style>

</style>