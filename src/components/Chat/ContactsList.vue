<template>
    <div class="h-full bg-gray-200 dark:bg-gray-700 md:w-[300px] sm:w-[250px] pt-6 px-2">
        <base-search-input v-model="search" placeholder="Поиск по контактам"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseSearchInput from './BaseSearchInput.vue';
export default defineComponent({
    name: "ContactsList",
    components: { BaseSearchInput },
    data: () => ({
        search: ""
    })
})
</script>

<style>

</style>