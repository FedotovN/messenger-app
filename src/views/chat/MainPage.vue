<template>
    <div class="flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text">
        <contacts-list :class="{
            'hidden sm:block': chatOpened,
            'w-full sm:w-[300px]': !chatOpened
        }"></contacts-list>
        <router-view :class="{
            'hidden sm:block': !chatOpened,
            'sm:w-full': chatOpened
        }"></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactsList from '@/components/Chat/ContactsList.vue';
export default defineComponent({
    components: { ContactsList },
    computed: {
        chatOpened() {
            return !!this.$route.params.chatId
        }
    }
})
</script>

<style>

</style>