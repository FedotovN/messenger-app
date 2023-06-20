<template>
  <form class="relative flex flex-col sm:gap-4 gap-2 min-w-[220px] sm:h-auto w-full h-full rounded px-4 py-2 bg-white dark:bg-dark-200" @submit.prevent="onSubmit">
    <header class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
            <p class="font-semibold text-lg text-gray-700 dark:text-gray-300">{{ $t('titles.profile') }}</p>
            <small class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-300" v-if="loading">{{$t('form.operations.titles.update')}}<base-loader size="small" /></small>
            <small class="flex items-center gap-4 text-xs text-gray-700 dark:text-gray-300" v-else-if="imageLoading">{{ $t('form.operations.titles.wait') }}<base-loader size="small" /></small>
        </div>
    </header>
    <main class="sm:overflow-visible flex flex-col flex-1 sm:gap-4 gap-2">
        <div class="flex sm:flex-row flex-col gap-6 items-center flex-wrap w-full">
            <div class="sm:w-[6rem] w-[12rem] flex flex-col gap-2 text-center items-center mt-6">
                <div
                ref="imageWrapper"
                @click="$refs.fileInput.click()"
                class="flex justify-center items-center w-44 h-44 sm:w-[6rem] sm:h-[6rem] rounded-full bg-gray-200 cursor-pointer transition-all hover:opacity-75 overflow-hidden" title="Загрузка фото">
                    <img :src="form.photoURL" :alt="form.name" :class="imageLoading || !form.photoURL ? 'hidden appearance-none' : 'h-full w-full object-cover'">
                </div>
                <input
                @change="imageUpload"
                type="file"
                name="avatar"
                ref="fileInput"
                accept="image/*"
                class="hidden" >
                <small class="text-xs text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer whitespace-nowrap" @click="imageGenerate">{{ $t('phrases.randomAvatar') }}</small> 
            </div>
            <div class="flex min-w-[2rem] flex-col flex-1 justify-center w-full gap-2">
                <div class="flex-4">
                    <base-input v-model="form.name" :label="$t('form.placeholders.username')" class="pb-2"></base-input>
                    <base-checkbox v-model="checked" class="pb-4">{{$t('phrases.namedAvatar')}}</base-checkbox>
                </div>
                <base-input :value="user.email" :label="$t('form.placeholders.email')" disabled class="flex-6"></base-input>
            </div>
        </div>
        <base-textarea
        class='max-h-full'
        :maxLength="256"
        v-model="form.bio"
        :label="$t('form.placeholders.bio')" />
        <div class="grid grid-cols-5 gap-2">
            <base-button class="col-span-3" type="submit" @click="onSubmit">{{ $t('form.buttons.save') }}</base-button>
            <base-button class="col-span-2" theme="passive" @click="close"> {{ $t('form.buttons.cancel') }} </base-button>
        </div>
    </main>
    <footer class="flex flex-col gap-3">
        <small class="text-gray-400 text-xs w-full text-end">Avatars by Multiavatar.com</small>
    </footer>
</form>
</template>

<script>
import _ from "lodash"
import { getDataURL, URLtoFile, getGeneratedAvatar } from '@/utils/imageUpload'
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: {
                name: '',
                bio: '',
                photoURL: '',
                email: ''
            },
            loading: false,
            checked: false,
            width: 96,
            compressModifier: 100,
            imageLoading: false,
            debouncedAvatarQuery: null
        }
    },
    created() {
        this.form.email = this.user.email
    },
    mounted() {
        if(!this.user) {
            this.$toast.show('Пользователь не найден')
        }
        Object.keys(this.form).forEach((key) => {
            this.form[key] = this.user[key]
        })
    },
    methods: {
        close() {
            this.$emit('close')
        },
        async imageUpload(e) {
            try {
                const inputImage = e.target.files[0]
                this.imageLoading = true
                this.form.photoURL = (await getDataURL(inputImage, 90, this.width)).dataUrl 
                console.log(inputImage, this.form.photoURL)
                this.imageLoading = false
            }
            catch {
                this.$toast.show('Что то пошло не так :(')
                this.imageLoading = false
            }
        },
        async imageGenerate() {
            try {
                this.imageLoading = true
                this.form.photoURL = (await getGeneratedAvatar())
            }
            catch(e) {
                console.warn(e)
            } 
            this.imageLoading = false
        },
        async onSubmit() {
            this.loading = true
            let profile_body = {...this.form}
            try {
                const file = await URLtoFile(this.form.photoURL)
                profile_body = {
                    ...this.form,
                    profile_photo_file: file
                }
            }
            catch(e) {
                console.warn(e)
            }
            await this.$store.dispatch('auth/updateUserProfile', { ...profile_body })
            await this.$store.dispatch('auth/cacheUser', {
                email: this.user.email,
                uid: this.user.uid,
                name: this.form.name,
                photoURL: this.form.photoURL,
                password: this.user.password,
                bio: this.form.bio
            })
            this.loading = false
            this.$emit('close')
        }
    },
    watch: {
        async "form.name"(newVal) {
            if(this.debouncedAvatarQuery) this.debouncedAvatarQuery.cancel() 
            if(this.checked) {
                this.imageLoading = true
                this.debouncedAvatarQuery = _.debounce(async function(q){
                    this.form.photoURL = await getGeneratedAvatar(q)
                    this.imageLoading = false
                }, 850).bind(this)(newVal)
            }
        },
        async checked(newVal, oldVal){
            if(!oldVal && newVal && this.form.name) {
                this.imageLoading = true
                this.form.photoURL = await getGeneratedAvatar(this.form.name)
                this.imageLoading = false
            }
        }
    }
}
</script>

<style>

</style>