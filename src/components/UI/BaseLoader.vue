<template>
  <div
  class="animate-spin border-gray-500 dark:border-gray-300 dark:border-t-blue-400 border-t-blue-600 rounded-full"
  :class="{
    'h-3 w-3 border': size === 'tiny',
    'h-6 w-6 border-2': size === 'small',
    'h-12 w-12 border-2': size === 'medium',
    'h-16 w-16 border-4': size === 'big',
  }"
  >

  </div>
</template>

<script>
export default {
    name: 'BaseLoader',
    props: {
        size: {
            type: String,
            required: false,
            default: 'small'
        }
    }
}
</script>

<style lang="scss">
    
</style>