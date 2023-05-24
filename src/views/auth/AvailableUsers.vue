<template>
  <div
    class="flex flex-col bg-white dark:bg-dark-200 sm:shadow sm:rounded h-full sm:h-auto w-full px-3 sm:max-w-[450px]">
    <header class="flex items-center py-2 border-gray-200 dark:border-gray-500 border-b-2 w-full">
        <p class="font-semibold py-2 flex-1 flex justify-between text-gray-700 dark:text-gray-300">
            {{ $t(message) }}
            <base-loader v-if="loading" />
        </p>
    </header>   
    <main class="flex relative overflow-y-scroll flex-1 scrollbar-hide">
        <user-list @login="login"></user-list>
    </main>
    <footer>
        <div class="flex justify-between w-full pb-4 items-center">
            <base-link to="/login" class="sm:text-xs">{{$t('links.internal.back')}}</base-link> 
        </div>
    </footer>
  </div>
</template>

<script>
import messages from '@/utils/messages'
import UserList from '@/components/UI/Auth/UserList.vue'
export default {
    components: { UserList },
    data() {
        return {
            loading: false,
            message: 'titles.users'
        }
    },
    methods: {
        async login() {
            this.loading = true
            this.message = 'auth.phrases.login'
            try {
                await this.$store.dispatch('auth/signInWithEmail', {
                    email: this.chosenUser.email,
                    password: this.chosenUser.password
                })
                this.$router.push('/')
            }   
            catch(e) {
                this.message = messages[e.code] || e
            }
            finally { 
                this.loading = false
            }
        }
    }
}
</script>

<style>
    .appear-enter-active, .appear-leave-active {
        transition: .3s;
    }
    .appear-enter-from, .appear-leave-to {
        opacity: 0;
        position: absolute;
    }
</style>