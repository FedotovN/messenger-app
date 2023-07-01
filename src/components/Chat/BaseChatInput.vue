<template>
  <div class="flex w-full gap-2 max-w-full">
    <div class="rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" v-tooltip="'emoji'">
        <span class="sm:text-lg">😋</span>
        <base-tooltip :options="{trigger: 'click'}">
        😋😋😋😋😋
        </base-tooltip>
    </div>
    <textarea
    :placeholder="placeholder"
    class="text-sm sm:text-md rounded-2xl bg-gray-200 dark:bg-gray-800 flex w-full p-2 dark:text-gray-300 text-gray-600 whitespace-wrap overflow-auto outline-none scrollbar-hide resize-none m-0 focus:bg-gray-200 dark:focus:bg-gray-900 transition-colors"
    ref="textarea"
    :value="modelValue"
    @focusin="focused = true"
    @focusout="focused = false"
    @input="onInput"
    @keydown.shift.enter="pushEnter"
    @keydown.enter.prevent.exact="onEnter"
    ></textarea>
    <div class="rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" @click="onEnter" v-tooltip="'Отправить'">
        <i class="block fa-solid fa-paper-plane text-gray-700 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-400 transition-colors"></i>
    </div>
    </div>
</template>

<script lang=ts>

import { defineComponent } from 'vue'
export default defineComponent({
    name: "BaseChatInput",
    props: {
        modelValue: {
            type: String,
            required: false,
            default: ''
        },
        maxHeight: {
            type: Number,
            required: false,
            default: 180
        },
        minHeight: {
            type: Number,
            required: false,
            default: 32
        },
        chatPartner: {
            type: String,
            required: false,
            default: ''
        }
    },
    data: () => ({
        textarea: null as unknown as HTMLTextAreaElement,
        height: '',
        focused: false
    }),
    methods: {
        calculateStyles(): void {
            const roundHeight = (h) => {return h > this.maxHeight ? this.maxHeight : h}
            this.textarea.style.height = this.minHeight + 'px' || 'auto'
            this.textarea.style.height = roundHeight(this.textarea.scrollHeight) + 'px'
        },
        onInput(e) {
            this.calculateStyles()
            this.$emit('update:modelValue', e.target.value)
        },
        onEnter(e) {
            this.$emit('enter')
            this.$emit('update:modelValue', '')
            this.$nextTick(() => {
                this.calculateStyles()
            })  
        },
        onFocus() {
            this.focused = true
        },
        pushEnter() {
            if(!this.modelValue) return 
            this.$emit('update:modelValue', this.modelValue + '\n')
            this.$nextTick(() => {
                this.textarea.scrollTop = this.textarea.scrollHeight
                this.calculateStyles()
            })
            
        }
    },
    mounted() {
        this.textarea = this.$refs.textarea
        this.calculateStyles()
    },
    computed: {
        placeholder(): string {
            return this.chatPartner 
                    ? `Написать ${this.chatPartner}`
                    : 'Введите сообщение...'
        }
    }
})
</script>

<style>

</style>