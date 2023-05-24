<template>
  <transition
  mode="out-in"
  :leave-to-class="'dissolve'"
  :enter-from-class="'dissolve'"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
    name: 'AuthTransition'
}
</script>

<style>
    .v-enter-active, .v-leave-active {
        transition: all .3s;
        position: absolute;
    }
    .dissolve {
        opacity: 0;
        transform: scale(.98);
    }
</style>