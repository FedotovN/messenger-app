<template>
  <div class="min-h-[calc(0.25rem_*_16)] bg-primary-200 shadow w-full sm:flex hidden">
    <div class="w-full h-full flex justify-between items-center pr-3 pl-3">
        <div class="w-full flex gap-8 items-center overflow-hidden">
            <div class="flex gap-5 items-center overflow-hidden cursor-pointer" v-if="userInfo">
                <div class="rounded-full min-w-[2.5rem] w-10 h-10 bg-gray-300 overflow-hidden">
                    <img :src="userInfo.photoURL" :alt="userInfo.name" class="object-cover h-full w-full">
                </div>
                <p class="font-semibold text-gray-100 nowrap">{{ userInfo.displayName }}</p>
                <base-tooltip :options="{trigger: 'click', arrow: false, offset: [-35, 20], theme: 'white'}">
                    <div class="w-[150px] text-center flex flex-col text-white gap-4">
                        <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="edit">Профиль</p>
                        <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="settings">Настройки</p>
                        <p class="cursor-pointer hover:text-gray-400 transition-colors" @click="logout">Выход</p>
                    </div>
                </base-tooltip>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppHeader',
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
                    params: {uid: this.userInfo.uid},
                    query: {fallback: this.$route.name}
                }
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
}
</script>

<style>

</style>