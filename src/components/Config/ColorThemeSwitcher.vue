<template>
  <div
  @click="toggleTheme"
  class="card h-10 w-10 bg-white overflow-hidden relative select-none">
    <transition
    mode="out-in"
    :leave-to-class="darkTheme ? 'appear_left' : 'appear_right'"
    :enter-from-class="darkTheme ? 'appear_right' : 'appear_left'">
        <i class="fa-solid fa-sun text-lg text-gray-700 " v-if="!darkTheme"></i>
        <i class="fa-solid fa-moon text-lg text-gray-300 " v-else></i>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'ColorThemeSwitcher',
    data: () => ({
        darkTheme: false
    }),
    async created() {
        const colorScheme = (await this.$store.dispatch('getConfig')).colorScheme
        if(colorScheme) { colorScheme === 'dark' ? this.darkTheme = true : this.darkTheme = false }
    },
    methods: {
        toggleTheme() {
            this.darkTheme = !this.darkTheme
            this.$store.dispatch('updateConfig', {
                colorScheme: this.darkTheme ? 'dark' : 'white'
            })
            this.$store.dispatch('applyConfig', {
                colorScheme: this.darkTheme ? 'dark' : 'white'
            })
        }
    }
}
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: .15s;
        position: absolute;
    }
    .appear_left {
        transform: scale(.98) translateX(30px);
    }
    .appear_right {
        transform: scale(.98) translateX(-30px);
    }
</style>