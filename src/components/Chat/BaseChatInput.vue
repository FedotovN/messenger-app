<template>
  <div class="flex flex-col max-w-full">
    <div class="sm:flex hidden px-2 gap-10 justify-end text-xs text-gray-500 dark:text-gray-500 transition-all" :class="{'opacity-0': focused}">
        <p>Shift + enter - Перенос строки</p>
    </div>
    <textarea
    :placeholder="placeholder"
    class="flex sm:max-w-[calc(100vw_-_22.75rem)] m-0 p-2 dark:text-gray-300 text-gray-600 whitespace-wrap overflow-auto bg-transparent outline-none scrollbar-hide resize-none m-0 focus:bg-gray-200 dark:focus:bg-gray-700 transition-colors"
    ref="textarea"
    :value="modelValue"
    @focusin="focused = true"
    @focusout="focused = false"
    @input="onInput"
    @keydown.shift.enter="pushEnter"
    @keydown.enter.prevent.exact="onEnter"
    ></textarea>
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
            default: 64
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
            this.$emit('enter', e.target.value)
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