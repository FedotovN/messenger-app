<template>
<div class="user-card" v-if="user">
     <div class="flex flex-col sm:gap-2 gap-4 items-center cursor-pointer sm:w-[100px] w-[120px] h-auto transition-all relative" ref="tippyWrapper">
        <base-tooltip :options="{arrow: false, trigger: 'click'}" @click="closeMenu">
            <div class="w-32 flex flex-col gap-2 py-2 px-1">
                <div class="flex justify-between items-center h-3 w-full">
                    <small class="whitespace-nowrap overflow-hidden text-ellipsis">{{ user.name }}</small>
                    <base-loader size="tiny" v-if="loading"></base-loader>
                </div>
                <small class="text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer" @click="enter">{{$t("form.buttons.signIn")}}</small>
                <small class="text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer" @click="remove">{{$t("form.buttons.remove")}}</small>
                <small class="text-xs text-blue-600 dark:text-blue-400 py-1 hover:text-blue-70 transition-colors cursor-pointer" @click="edit">{{$t("form.buttons.edit")}}</small>
            </div>
        </base-tooltip>
        <div class="sm:h-16 sm:w-16 w-24 h-24 rounded-full bg-gray-200 transition-all overflow-hidden">
            <img v-if="user.photoUrl" :src="user.photoUrl" class="h-full w-full object-cover">
        </div>
        <div class="flex flex-col items-center gap-1 w-26 text-center">
            <p class="sm:text-xs text-center font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-[90px] text-gray-700 dark:text-gray-300" v-show="user.name">{{ user.name }}</p>
            <small class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap overflow-hidden text-ellipsis w-[90px]">{{ user.email }}</small>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'UserCard',
    props: {
        user: {
            type: Object,
            required: true
        }   
    },
    data() {
        return {
            imageLoading: false,
            loading: false
        }
    },
    methods: {
        openMenu() {
            this.$refs.tippyWrapper._tippy.show()
        },
        closeMenu() {
            this.$refs.tippyWrapper._tippy.hide()
        },
        async edit() {
            this.loading = true
            try {
                await this.$store.dispatch('auth/signInWithEmail', {email: this.user.email, password: this.user.password})
                this.$router.push({
                    name:'profile-edit',
                    params: {uid: this.user.uid},
                    query: {fallback: this.$route.name}
                })
            }
            catch(e) { console.warn(e) }
            this.closeMenu()
        },
        remove() {
            this.closeMenu()
            this.$emit('remove')
        },
        async enter() {
            this.loading = true
            try {
                await this.$store.dispatch('auth/signInWithEmail', {email: this.user.email, password: this.user.password})
                this.$router.push({
                    name: 'main',
                    query: {message: 'auth/logged-in'}
                })
            }
            catch(e) { console.warn(e) }
        }
    }
}
</script>