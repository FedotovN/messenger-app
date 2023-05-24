<template>
    <transition
    mode="out-in"
    :leave-to-class="'dissolveLeft'"
    :enter-from-class="'dissolveRight'"
    >
      <slot></slot>
    </transition>
  </template>
  
  <script>
  export default {
      name: 'ChatTransition'
  }
  </script>
  
  <style scoped>
      .v-enter-active, .v-leave-active {
          transition: all .3s;
          position: absolute;
      }
      .dissolveRight {
          opacity: 0;
          transform: translateY(30px);
      }
      .dissolveLeft {
          opacity: 0;
          transform: translateY(-30px);
      }
  </style>