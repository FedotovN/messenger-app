<template>
  <form @submit.prevent="onSubmit" class="flex justify-center items0-center w-full sm:h-auto h-full lg:max-w-[620px]">
    <div class="bg-white dark:bg-dark-200 sm:shadow sm:rounded items-center flex flex-col w-full h-full sm:h-auto px-4 overflow-hidden">
        <header class="flex justify-center items-center py-2 gap-2 w-full flex-col border-b-2 border-gray-300 dark:border-gray-500">
            <p class="font-semibold tracking-wide text-lg text-gray-700 dark:text-gray-300">{{ $t('titles.passwordRecovery') }} <small class="text-lg">🔨</small></p>
        </header>
        <main class="flex flex-col gap-2 w-full my-2">
            <base-input :label="$t('form.placeholders.email')" v-model="email" :errorMessage="v$.email.$errors.length ? $t('form.errors.email.required') : ''"></base-input>
        </main>
        <footer class="flex flex-col gap-2 w-full my-2">
            <base-button @click="onSubmit">{{ $t('phrases.sendLink') }}</base-button>
            <base-link :to="{name: 'login'}" class="w-full text-end py-2 text-xs">{{ $t('links.internal.back') }}</base-link>
        </footer>
        <transition name="appear">
            <p
            v-if="message || loading"
            class="flex justify-between items-center w-full transition-all pb-2 text-gray-700 dark:text-gray-300">
                {{ $t(message) }}
                <base-loader v-if="loading" />
            </p>
        </transition>
    </div>
   </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators';
export default {
    name: 'PasswordReset',
    data(){
        return {
            v$: useVuelidate(),
            email: '',
            message: '',
            loading: false
        }
    },
    validations() {
        return {
            email: { email, required }
        }
    },
    methods: {
        async onSubmit() {
            if(!(await this.v$.$validate())) return 
            try {
                this.loading = true
                this.message = 'form.operations.titles.wait'
                await this.$store.dispatch('auth/resetPassword', this.email)
                this.message = 'form.operations.messages.auth/verifying-link'
                this.loading = false
            }
            catch(e) {
                this.loading = false
                this.message = "form.operations.messages."+e.code
            }
        }
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