<template>
  <form @submit.prevent="onSubmit" class="flex justify-center items-center w-full h-full lg:max-w-[600px]">
    <div class="bg-white dark:bg-dark-200 sm:shadow sm:rounded items-center justify-center sm:justify-start flex flex-col sm:h-auto h-full w-full px-4 overflow-hidden">
        <header class="flex justify-center items-center py-2 border-b-2 border-gray-200 dark:border-gray-500 gap-2 w-full flex-col">
            <p class="font-semibold text-lg dark:text-gray-300">{{$t('titles.register')}} <small class="text-lg">📜</small></p>
            <p class="text-gray-600 dark:text-gray-400">{{$t('phrases.weListen')}}</p>
        </header>
        <main class="flex flex-col w-full sm:flex-1 mb-6">
           <base-input
            :errorMessage="v$.email.$errors.length ? $t('form.errors.email.incorrect') : ''"
            type="email"
            autocomplete="new-password"
            :label="$t('form.placeholders.email')"
            v-model="email" />
           <base-input
            :errorMessage="v$.password.$errors.length ? $t('form.errors.password.minLength', {msg: password.length}) : ''"
            autocomplete="new-password"
            :label="$t('form.placeholders.password')"
            type="password"
            v-model="password" />
            <base-input
            :errorMessage="v$.repeatPassword.$errors.length ? $t('form.errors.repeatPassword.incorrect') : ''"
            autocomplete="new-password"
            :label="$t('form.placeholders.repeatPassword')"
            type="password"
            v-model="repeatPassword" />
            <base-input
            :errorMessage="v$.username.$errors.length ? $t('form.errors.password.required') : ''"
            type="name"
            autocomplete="off"
            :label="$t('form.placeholders.username')"
            v-model="username" />
        </main>
        <footer class="flex flex-col gap-4 w-full my-4">
          <base-checkbox v-model="checkbox" :error="!!v$.checkbox.$errors.length">{{$t('form.checkbox.noRules')}}</base-checkbox>
          <base-button type="submit">{{$t('form.buttons.continue')}}</base-button>
          <p class="flex w-full text-xs gap-1 text-gray-700 dark:text-gray-300">{{$t('phrases.haveAccount')}} <base-link :to="{name: 'login'}"> {{$t('links.internal.signIn')}}</base-link></p>
          <p class="flex w-full text-xs gap-1 text-gray-700 dark:text-gray-300">{{$t('phrases.cantCreatePassword')}} <base-link to="https://fedotovn.github.io/passwordGenerator"> {{$t('links.external.passwordGenerator')}}</base-link></p>
        </footer>
        <transition name="appear">
            <p
            v-if="message"
            class="flex justify-between w-full transition-all pb-4 text-gray-700 dark:text-gray-300">
                {{ $t(message) }}
                <base-loader v-if="loading" />
            </p>
        </transition>
    </div>
   </form>
</template>

<script>
import { mapActions } from 'vuex';
import useVuelidate from '@vuelidate/core';
import {required, email, minLength, sameAs} from '@vuelidate/validators'
export default {
  data() {
    return {
      v$: useVuelidate(),
      email: '',
      password: '',
      repeatPassword: '',
      username: '',
      checkbox: false,
      message: '',
      loading: false
    }
  },
  validations() {
    return {
      email: {required, email},
      password: {required, minLength: minLength(6)},
      repeatPassword: {required, sameAs: sameAs(this.password)},
      username: {required},
      checkbox: {required, sameAs: sameAs(true)}
    }
  },
  methods: {
    async onSubmit() {
      if (!(await this.v$.$validate())) return
      this.loading = true
      this.message = 'form.operations.titles.register'
      try {
        await this.register({
          name: this.username,
          email: this.email,
          password: this.password
        })
        this.$router.push({name: 'login', query: {
          message: 'auth/verifying-link'
        }})
      }
      catch(e) {
        this.message = 'form.operations.messages.' + e.code
        console.warn('Something went wrong at onSubmit method of RegisterPage component')
      }
      this.loading = false
    },
    ...mapActions('auth', {
      register: 'registerWithEmail'
    })
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