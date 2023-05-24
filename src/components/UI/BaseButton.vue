<template>
  <div class="w-full">
    <button
    :type="type"
    class="w-full text-md rounded h-10 transition-colors"
    :class="themes[theme]"
    >
        <slot>Продолжить</slot>
        <slot name="icon" v-if="$slots.icon"></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    theme: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  data: () => ({
    themes: {
      'primary': 'bg-primary-100 text-white hover:bg-primary-200 border-2 border-primary-100 hover:border-primary-200',
      'alert': 'bg-rose-600 text-white hover:bg-rose-700 border-2 border-rose-600 hover:border-rose-700',
      'passive': 'bg-white border border-blue-600 text-black hover:bg-gray-200 dark:bg-dark-200 dark:text-gray-300'
    }
  })
}
</script>