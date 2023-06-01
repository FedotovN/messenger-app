<template>
    <div class="flex h-full w-full bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text">
        <contacts-list class="h-full md:min-w-[300px] sm:min-w-[210px] md:max-w-[300px]" :class="{
            'hidden sm:flex': chatOpened,
            'w-full': !chatOpened
        }"></contacts-list>
        <router-view class="h-full" :class="{
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