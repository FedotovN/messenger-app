<template>
    <div class="flex flex-col gap-3 h-full bg-gray-200 dark:bg-gray-700 min-w-[300px] py-6 overflow-hidden">
        <base-search-input v-model="search" placeholder="Поиск по контактам" :loading="loading" class="mx-2"/>
        <div class="flex flex-col flex-1 w-full overflow-x-hidden overflow-y-scroll scrollbar-hide border-y-2 dark:border-gray-600 shadow-inner-top">
            <contact-item v-for="user in users" :key="user.uid" :contact="user"></contact-item>
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
        search: "" as string,
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