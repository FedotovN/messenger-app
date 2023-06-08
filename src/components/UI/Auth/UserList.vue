<template>
  <div class="flex flex-1 h-full w-full">
    <base-modal v-model="showModal" >
        <template v-slot:header> {{ $t('operations.users.delete', {msg: chosenUser?.name}) }}</template>
        <div class="flex flex-col gap-4">
            <small class="text-gray-600 dark:text-gray-400">{{ $t('phrases.sure') }}</small>
            <div class="grid grid-cols-6 gap-2">
                <base-button class="col-span-4" @click="showModal = false">{{ $t('phrases.no') }}</base-button>
                <base-button class="col-span-2" theme="alert" @click="onRemove">{{ $t('phrases.yes') }}</base-button>
            </div>
        </div>
    </base-modal>
    <div
        v-if="users"
        :class="forceListView ? 'grid' : 'sm:hidden grid'"
        class="py-4 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fit,180px)] w-full max-h-full gap-x-4 scrollbar-hide">
        <user-card
            :user="user"
            class="transition-all col-span-1 justify-self-center"
            @remove="removeUser(user)"
            v-for="user in users"
            :key="user?.uid"
            />
    </div>
    <div
        v-if="users"
        :class="forceListView ? 'hidden' : 'sm:flex hidden'"
        class="items-center relative overflow-hidden w-full">
        <div
        v-if="page > 1"
        @click.stop ="page--"
        class="
        bg-[rgba(255,255,255,0.7)]
            rounded-x-xl
            z-10
            absolute left-0 opacity-0 transition-all
            hover:opacity-100 h-full w-[42px] cursor-pointer
            flex justify-center items-center
        ">
            <i class="fa-solid fa-angle-left"></i>
        </div>
    <div
        v-if="users"
        class="flex py-6 items-center relative w-full transition-all"
        :style="`transform: translateX(-${(page-1) * 400}px)`"
        >
            <user-card
                :user="user"
                class="transition-all py-2"
                @remove="removeUser(user)"
                v-for="user in users"
                :key="user?.uid"
                />
        </div>
        <div
        v-if="page < pagesCount"
        @click.stop ="page++"
        class="
            bg-[rgba(255,255,255,0.7)]
            rounded-x-xl z-10
            absolute right-0 opacity-0 transition-all
            hover:opacity-100 h-full w-[42px] cursor-pointer
            flex justify-center items-center
        ">
            <i class="fa-solid fa-angle-right"></i>
        </div>
    </div>
    <div class="flex h-full w-full items-center justify-center flex-col gap-2 text-center py-8" v-else>
        <p class="font-semibold text-gray-700 dark:text-gray-300">{{$t('fallbacks.noUsers')}}</p>
        <small class="text-gray-400">{{$t('fallbacks.createUser')}}</small>
    </div>
    </div>
</template>

<script>
import UserCard from '@/components/UI/Auth/UserCard.vue'
export default {
    props: {
        forceListView: {
            type: Boolean,
            required: false
        }
    },
    name: 'UserList',
    components: { UserCard },
    data() {
        return {
            users: [],
            maxElementsPerPage: 4,
            page: 1,
            showModal: false,
            chosenUser: null
        }
    },
    computed: {
        pagesCount() {
            return Math.ceil(this.users?.length / this.maxElementsPerPage)
        }
    },
    async mounted() {
        this.users = await this.$store.dispatch('auth/getCachedUsers')
    },
    methods: {
        removeUser(e) {
            this.chosenUser = e
            this.showModal = true
        },
        async onRemove() {
            await this.$store.dispatch('auth/removeCachedUser', this.chosenUser.uid)
            this.users = await this.$store.dispatch('auth/getCachedUsers')
            this.showModal = false
        }
    }
}
</script>

<style>

</style>