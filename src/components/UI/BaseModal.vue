<template>
  <Teleport to="body">
    <transition leave-to-class="appear" enter-from-class="appear">
        <div class="top-0 min-h-screen w-full bg-[rgba(0,0,0,0.5)] fixed z-40" v-if="modelValue" @click="close"></div>
    </transition>
    <auth-transition>
        <div
        v-if="modelValue" 
        @click.stop
        class="
        flex flex-col gap-2 bg-white
        dark:bg-dark-200
        rounded shadow-2xl px-4 py-2
        fixed top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        z-50
        w-[calc(100%_-_20px)]
        sm:min-w-[450px]
        sm:w-auto
        sm:max-w-[500px]
        max-h-[calc(100vh_-_20px)]">
            <header class="flex justify-between items-center pb-2 border-b-2 border-gray-200" v-if="$slots.header">
                <p class="whitespace-nowrap overflow-hidden text-ellipsis text-gray-700 flex-1 dark:text-gray-300">
                    <slot name="header" class="font-semibold"></slot>
                </p>
                <i class="fa-solid fa-xmark pl-3 text-gray-400 hover:text-rose-600 cursor-pointer text-xl transition-colors" @click="close"></i>
            </header>
            <main class="flex-1 max-h-full overflow-y-scroll scrollbar-hide dark:text-gray-300 text-gray-700">
                <slot></slot>
            </main>
            <footer v-if="$slots.footer" class="pt-2 border-t-2 border-gray-200 dark:text-gray-300 text-gray-700">
                <slot name="footer"></slot>
            </footer>
        </div>
    </auth-transition>
  </Teleport>
</template>

<script>
import AuthTransition from '@/transitions/AuthTransition.vue';
export default {
    props: {
        modelValue: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    name: 'BaseModal',
    methods: {
        close() { this.$emit('update:modelValue', false)}
    },
    components: {AuthTransition}
}
</script>

<style scoped>
    .v-enter-active, .v-leave-active {
        transition: all .3s;
        position: absolute;
    }
    .dissolve {
        opacity: 0;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: scale(0.98) translateX(-50%) translateY(-50%);
    }
    .appear {
        opacity: 0;
    }
    .scrollbar-hide::-webkit-scrollbar {
        width: 0;
    }
</style>