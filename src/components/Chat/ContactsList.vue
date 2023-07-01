<template>
    <div class="flex flex-col gap-[calc(3*0.25rem_-_2px)] h-full bg-gray-200 dark:bg-gray-700 py-3 overflow-hidden w-[300px] ">
        <header class="flex justify-between items-center">
            <base-search-input v-model="search" placeholder="Поиск по контактам" :loading="loading" class="mx-2 w-full"/>
        </header>
        <div class="flex flex-col flex-1 w-full overflow-x-hidden overflow-y-scroll scrollbar-hide" v-if="users.length && !loading && !contactsFetching">
            <contact-item v-for="user in users" :key="user.uid" :contact="user"></contact-item>
        </div>
        <div class="flex-1 items-center px-3 text-center" v-else-if="!contactsFetching">
            <div class="h-full flex flex-col w-full justify-center gap-2" v-if="!search && !loading">
                <p class="font-semibold text-gray-700 dark:text-gray-300">Чатов пока нет!</p>
                <small class="text-xs font-semibold text-gray-500 dark:text-gray-400">Чтобы начать, используйте функцию поиска внизу</small>
            </div>
            <div class="h-full flex flex-col w-full justify-center items-center gap-4" v-else-if="loading">
                <base-loader size="medium" />
                <small class="text-xs font-semibold text-gray-500 dark:text-gray-400">Ищем пользователя с именем "{{ search }}"</small>
            </div>
            <div class="h-full flex flex-col w-full justify-center gap-2" v-else-if="search && !loading">
                <p class="font-semibold text-gray-700 dark:text-gray-300">Тут никого :(</p>
                <small class="text-xs font-semibold text-gray-500 dark:text-gray-400">Пользователя с поможим именем не найдено</small>
            </div>
        </div>
        <div class="h-full flex flex-col w-full justify-center items-center gap-4" v-else>
            <base-loader size="medium" />
            <p class="text-xs text-center font-semibold text-gray-700 dark:text-gray-300">Очень старательно загружаемся, <br> чтобы потом <strong>быстрее ⚡</strong> работать!</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import _ from 'lodash';
import BaseSearchInput from './BaseSearchInput.vue';
import ContactItem from './ContactItem.vue';
import Contact from '@/classes/chat/Contact';
import { Unsubscribe } from 'firebase/auth';
export default defineComponent({
    name: "ContactsList",
    components: { BaseSearchInput, ContactItem },
    data: () => ({
        search: "",
        debouncedQuery: null as any,
        loading: false,
        contactsFetching: false,
        contactsListener: null as unknown as Unsubscribe,
        users: [] as Contact[]
    }),
    async created() {
        this.users = await this.getSortedContacts() || []
    },
    watch: {
        async search(newVal: string) {
           if(this.debouncedQuery) {
            this.debouncedQuery.cancel()
            this.loading = false
           }
           if(!newVal.length) {
            this.users = await this.getSortedContacts() || []
            return
           }

           this.searchContact(newVal)
           if(this.users.length) return

           this.debouncedQuery =  _.debounce(this.searchUser, 400)
           this.debouncedQuery(newVal)
           this.loading = true
        },
        getAllMessages: {
            async handler() {
                if(!this.search.length) {
                    this.users = await this.getSortedContacts() 
                }
            },
            deep: true
        }
    },
    methods: {
        ...mapActions('contacts', {
            getUser: 'fetchUsersByName',
            getSortedContacts: 'getSortedContacts'
        }),
        searchContact(q: string): void {
            this.users = this.getContact(q) as Contact []
        },
        async searchUser(q: string): Promise<void> {
           this.users = await this.getUser({name: q}) as Contact[]
           this.loading = false
        }
    },
    computed: {
        ...mapGetters('auth', {currUser: 'getUser'}),
        ...mapGetters('contacts', {
            getContact: 'getContact'
        }),
        contactsNames() {
            return this.getContacts.map(c => c.name)
        },
        ...mapGetters('room', {
            getAllMessages: 'getAllMessages'
        })
    }
})
</script>

<style>

</style>