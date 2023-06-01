<template>
    <div class="w-full h-full bg-white dark:bg-dark-200 sm:rounded sm:shadow sm:h-auto flex justify-center items-center">
        <profile-edit v-if="user" :user="user" @close="redirect"/>
    </div>
</template>

<script>
import ProfileEdit from '@/components/UI/Auth/ProfileEdit.vue'
export default {    
    props: {
        uid: {
            type: String,
            required: true
        }
    },
    name: 'ProfileEditPage',
    components: { ProfileEdit },
    data: () => ({ user: null }),
    methods: {
        redirect() {
            if(this.$route.query.fallback)
                this.$router.push({name: this.$route.query.fallback})
            else this.$router.push('/')
        }
    },
    async created() {
        this.user = await this.$store.dispatch('auth/getCachedUser', this.uid)
        if(!this.uid || !this.user) {
            this.$router.push({name: this.$route.query.fallback || 'login', query: {
                message: 'auth/user-not-found'
            }})
        }
    }
}
</script>

<style>

</style>