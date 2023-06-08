<template>
  <div class="bg-[rgba(0,0,0,.8)] rounded-full text-gray-300 font-semibold py-1 px-2 transtion-colors max-h-8 pointer-events-none">
    <small>{{ filteredDate }}</small>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
export default defineComponent({
    name: 'BaseDateBadge',
    props: {
        date: {
            type: Object as PropType<Date>,
            required: true,
            default: new Date()
        }
    },
    computed: {
      filteredDate() {
        const stringified = Intl.DateTimeFormat('Ru-ru', {day: 'numeric', weekday: 'long', month: 'long'}).format(this.date) + ''
        return stringified[0].toUpperCase() + stringified.slice(1, stringified.length)
      }
    }
})
</script>

<style>

</style>