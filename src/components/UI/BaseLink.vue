<template>
  <div class="text-blue-600 hover:text-blue-900 transition-colors dark:text-blue-400 dark:hover:text-blue-500">
    <a v-if="isExternal" :href="$props.to" target="_blank"><slot></slot></a>
    <router-link v-bind="$props" v-else><slot></slot></router-link>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    props: {
        ...RouterLink.props
    },
    computed: {
        isExternal() {
            const path = this.$props.to
            return typeof path === 'string' && path.startsWith('http')
        }
    }
}
</script>

<style>

</style>