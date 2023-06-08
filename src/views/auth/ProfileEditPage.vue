<template>
    <div class="w-full h-full bg-white dark:bg-dark-200 sm:rounded sm:shadow sm:h-auto flex justify-center items-center">
        <profile-edit v-if="user" :user="user" @close="redirect"/>
    </div>
</template>

<script lang="ts">
import User from '@/classes/auth/User'
import ProfileEdit from '@/components/UI/Auth/ProfileEdit.vue'
import { defineComponent } from 'vue'
export default defineComponent({    
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
        this.user = await this.$store.dispatch('contacts/getUserInfoByUid', this.uid) as User
        console.log(this.user)
        if(!this.uid || !this.user) {
            this.$router.push({name: this.$route.query.fallback || 'login', query: {
                message: 'auth/user-not-found'
            }})
        }
    }
})
</script>

<style>

</style>