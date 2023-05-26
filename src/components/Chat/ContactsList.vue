<template>
    <div class="flex flex-col gap-3 h-full bg-gray-200 dark:bg-gray-700 py-6 overflow-hidden sm:max-w-[400px] w-full">
        <header class="flex justify-between items-center">
            <base-search-input v-model="search" placeholder="Поиск по контактам" :loading="loading" class="mx-2 w-full"/>
        </header>
        <div class="flex flex-col flex-1 w-full overflow-x-hidden overflow-y-scroll scrollbar-hide" v-if="users.length">
            <contact-item v-for="user in users" :key="user.uid" :contact="user"></contact-item>
        </div>
        <div class="flex flex-col flex-1 w-full justify-center items-center gap-2 px-3 text-center" v-else>
            <p class="font-semibold text-gray-700 dark:text-gray-300">Чатов пока нет!</p>
            <small class="text-xs font-semibold text-gray-500 dark:text-gray-400">Чтобы начать, используйте функцию поиска внизу</small>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import _ from 'lodash';
import BaseSearchInput from './BaseSearchInput.vue';
import ContactItem from './ContactItem.vue';
import User from '@/classes/auth/User';
import Contact from '@/classes/chat/Contact';
export default defineComponent({
    name: "ContactsList",
    components: { BaseSearchInput, ContactItem },
    data: () => ({
        search: "",
        debouncedQuery: null as any,
        loading: false,
        users: [] as User[]
    }),
    watch: {
        search(newVal: string) {
           if(this.debouncedQuery) {
            this.debouncedQuery.cancel()
            this.loading = false
           }
           if(!newVal.length) {
            this.users = []
            return
           }
           this.debouncedQuery =  _.debounce(this.searchUser, 400)
           this.debouncedQuery(newVal)
           this.loading = true
        }
    },
    methods: {
        ...mapActions('contacts', {
            getUser: 'fetchUsersByName'
        }),
        async searchUser(q: string): Promise<void> {
           this.users = await this.getUser({name: q}) as Contact[]
           this.loading = false
        }
    }
})
</script>

<style>

</style>