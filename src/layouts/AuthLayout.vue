<template>
  <div class="flex justify-center items-center bg-primary-100 dark:bg-dark-300 transition-colors h-full relative overflow-hidden">
    <div class="absolute z-50 w-full top-0 sm:flex hidden justify-end gap-2 items-center h-16 mr-12">
      <color-theme-switcher />
      <language-switcher />
    </div>
    <div class="flex justify-center items-center overflow-hidden relative sm:w-[450px] lg:w-[900px] w-full h-full transition-all">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ColorThemeSwitcher from '@/components/Config/ColorThemeSwitcher.vue';
import LanguageSwitcher from '@/components/Config/LanguageSwitcher.vue';
export default {
    name: 'AuthLayout',
    components: { ColorThemeSwitcher, LanguageSwitcher }
}
</script>

<style>

</style>