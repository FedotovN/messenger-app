<template>
    <div class="flex gap-6 w-full h-full items-center">
        <form @submit.prevent="signIn" class="flex flex-col justify-center items-center w-full h-full sm:h-auto lg:max-w-[450px] transition-colors">
            <div class="bg-white dark:bg-dark-200 sm:shadow sm:rounded sm:justify-start items-center justify-center flex flex-col h-full px-4 overflow-hidden w-full">
                <div class="w-full sm:hidden flex justify-between mb-2 gap-2 items-center">
                    <color-theme-switcher />
                    <language-switcher />
                </div>
                <header class="flex justify-center items-center pt-2 gap-2 w-full flex-col ">
                    <div class="flex gap-1">
                        <p class="text-gray-600 dark:text-gray-300 font-semibold text-lg">{{$t('titles.welcome')}}</p> 
                        <small class="text-lg">👋</small>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">{{$t('titles.taskTracker')}}</p>
                </header>
                <div class="flex flex-col gap-5 items-center w-full border-b-2 dark:border-gray-500 border-gray-300 relative py-6">
                    <base-button @click="signInWithGoogle">
                        {{$t('phrases.loginWithGoogle')}}
                        <template v-slot:icon><i class="fa-brands fa-google pl-2"></i></template>
                    </base-button>
                    <small class="bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 px-4 absolute z-10 -bottom-2">{{$t('phrases.or')}}</small>
                    </div>
                <main class="flex flex-col w-full sm:flex-1 mb-6">
                <base-input
                    autocomplete="new-password"
                    :errorMessage="v$.email.$errors.length ? $t('form.errors.email.incorrect') : ''"
                    :label="$t('form.placeholders.email')"
                    v-model="email" />
                <base-input
                    autocomplete="new-password"
                    :errorMessage="v$.password.$errors.length ? $t('form.errors.password.required') : ''"
                    :label="$t('form.placeholders.password')"
                    :type="'password'"
                    v-model="password" />
                    <base-link :to="{name: 'password-reset'}" class="text-xs pt-2"> {{ $t('links.internal.passwordRecovery') }}</base-link>
                </main>
                <footer class="flex flex-col w-full mb-2 gap-4">
                    <div class="flex justify-between text-xs items-center">
                        <base-checkbox v-model="checkbox">{{$t('form.checkbox.rememberMe')}}</base-checkbox>
                        <base-link to="/users" class="lg:hidden block">{{$t('links.internal.users')}}</base-link>
                    </div>
                    <base-button type="submit">{{ $t('form.buttons.continue') }}</base-button>
                    <p class="flex gap-2 w-full text-xs dark:text-gray-300 text-gray-700">{{$t('phrases.noAccount')}} <base-link :to="{name: 'register'}"> {{$t('links.internal.joinUs')}}</base-link></p>
                    
                    <div class="flex gap-3 items-center text-xs">
                        <base-link to="https://github.com/FedotovN"> <i class="fa-brands fa-github"></i> Github</base-link>
                        <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                        <base-link to="https://t.me/FedotovN1"> <i class="fa-brands fa-telegram"></i> Telegram</base-link>
                        <div class="h-1 w-1 bg-gray-400 rounded-full"></div>
                        <base-link to="https://vk.com/fedotovn1"> <i class="fa-brands fa-vk"></i> VK</base-link>
                    </div>
                    <div class="flex w-full justify-between">
                        <transition name="appear">
                            <p
                            v-if="message"
                            class="flex justify-between w-full transition-all pb-2 text-gray-700 dark:text-gray-300">
                                {{ $t(message) }}
                                <base-loader v-if="loading" />
                            </p>
                        </transition>
                    </div>
                </footer>
            </div>
        </form>
        <div class="lg:flex hidden flex-col bg-white dark:bg-dark-200 rounded shadow w-full h-[500px] px-4 overflow-hidden">
            <header class="flex justify-center py-4 gap-2 w-full flex-col border-b-2 dark:border-gray-500 border-gray-200">
                <p class="font-semibold text-lg text-gray-700 dark:text-gray-300">{{$t('titles.users')}}<small class="text-lg pl-2">📜</small></p>
            </header>
            <main class="flex-1 w-full h-full overflow-y-scroll scrollbar-hide">
                <user-list forceListView></user-list>
            </main>
        </div>
    </div>  
</template>

<script>
import ColorThemeSwitcher from '@/components/Config/ColorThemeSwitcher.vue'
import LanguageSwitcher from '@/components/Config/LanguageSwitcher.vue'
import messages from '@/utils/messages.js'
import useVuelidate from '@vuelidate/core'
import UserList from "@/components/UI/Auth/UserList.vue"
import { email, required } from '@vuelidate/validators'
import { mapActions } from 'vuex'
export default {
    name: 'LoginPage',
    components: { UserList, ColorThemeSwitcher, LanguageSwitcher },
    data() {
        return {
            v$: useVuelidate(),
            email: '',
            password: '',
            checkbox: false,
            message: '',
            loading: false
        }
    },
    validations() {
        return {
            email: {required, email},
            password: {required }
        }
    },
    methods: {
        async signIn() {
            if((!await this.v$.$validate())) return
            this.loading = true
            this.message = 'form.operations.titles.login'
            try {
                await this.emailSignIn({
                    email: this.email,
                    password: this.password,
                    toSaveUser: this.checkbox
                })

                this.$route.query.redirect
                ? this.$router.push({name: this.$route.query.redirect})
                : this.$router.push({name: 'main', query: {
                    message: 'auth/logged-in' }})
            }
            catch(e) {
                this.loading = false
                this.message = 'form.operations.messages.'+e.code || messages[e.code]
                console.warn(e)
            }
            this.loading = false
        },
        async signInWithGoogle() {
            this.loading = true
            this.message = 'form.operations.titles.login'
            try {
                await this.googleSignIn()
                this.$route.query.redirect
                ? this.$router.push({name: this.$route.query.redirect})
                : this.$router.push({name: 'main', query: {
                    message: 'auth/logged-in' }})
            }
            catch(e) {
                this.message = 'form.operations.messages.'+e.code || messages[e.code]
                console.warn(e)
            } 
            this.loading = false
        },
        ...mapActions('auth', {
            googleSignIn: 'signInWithGoogle',
            emailSignIn: 'signInWithEmail'
        })
    },
    mounted() {
        if(this.$route.query.message)
            this.$toast.show(this.$t('form.operations.messages.'+this.$route.query.message) || messages[this.$route.query.message] || this.$route.query.message)
    }
}
</script>

<style>
    .appear-enter-active, .appear-leave-active {
        transition: .15s;        
    }
    .appear-enter-from, .appear-leave-to {
        padding: 0;
        margin: 0;
        opacity: 0;
    }
</style>