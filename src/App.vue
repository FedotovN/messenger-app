<template>
  <div class="h-screen">
    <realtime-listener 
      @ready="loading = false"
      @start="loading = true"
    />
    <component :is="layout" :loadingState="loading">
      <router-view v-slot="{Component}">
        <component :is="transition">
          <component :is="Component">
          </component>
        </component>
      </router-view>
    </component>
  </div>
</template>
<script>
  import mobileDetect from './utils/mobileDetect'
  import layouts from '@/layouts/index'
  import transitions from '@/transitions/index'
  import RealtimeListener from './components/App/RealtimeListener.vue'
  export default {
    name: 'App',
    data: () => ({
      loading: true
    }),
    components: {
      ...layouts,
      ...transitions,
      RealtimeListener
    },
    computed: {
      layout() {
        return this.$route.meta.layout + '-layout'
      },
      transition() {
        if(!this.$route.meta.transition) return 'default-transition'
        return this.$route.meta.transition + '-transition'
      }
    },
    async created() {
      this.$store.commit('changeIsMobileDevice', mobileDetect())
      this.$store.dispatch('auth/checkAuth')

      const config = await this.$store.dispatch('getConfig')
      this.$store.dispatch('applyConfig', config)
    }
  }
</script>
<style>
  .appear-enter-active, .appear-leave-active {
    transition: 5s;
  }
  .appear-enter-from, .appear-leave-to {
    opacity: 0
  }
</style>
