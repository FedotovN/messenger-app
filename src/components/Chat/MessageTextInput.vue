<template>
    <div class="flex w-full gap-2">
        <div class="rounded-full min-w-[36px] h-[36px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" v-tooltip="'Эмодзи'">
           <span class="sm:text-lg">{{emoji}}</span>
           <base-tooltip :options="{trigger: 'click'}">
               <base-emoji @pushEmoji="onEmojiPick"></base-emoji>
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
            @paste = "onPaste"
        />
        <div class="min-w-[36px] min-h-[32px] flex items-center justify-center" v-if="loading || messageSending">
            <base-loader size="small" />
        </div>
        <div class="rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" @click="onEnter" v-tooltip="'Отправить'" v-else>
            <i class="block fa-solid fa-paper-plane text-gray-700 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-400 transition-colors"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { getRandomEmoji } from '@/utils/emoji'
import { onImagePaste } from '@/utils/imageUpload';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "MessageTextInput",
    data: () => ({
        emoji: '',
        textarea: null as unknown as HTMLTextAreaElement,
        height: '',
        focused: false,
        loading: false
    }),
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
        },
        messageSending: {
            type: Boolean,
            required: false,
            default: false
        },
        allowImagePaste: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    mounted() {
        this.textarea = this.$refs.textarea
        this.emoji = this.getRandomEmoji()
        this.calculateStyles()
    },
    methods: {
        getRandomEmoji,
        onImagePaste,
        calculateStyles(): void {
            const roundHeight = (h) => {return h > this.maxHeight ? this.maxHeight : h}
            this.textarea.style.height = this.minHeight + 'px' || 'auto'
            this.textarea.style.height = roundHeight(this.textarea.scrollHeight) + 'px'
        },
        onEmojiPick(e, model?) {
            const v = model ? this[model] : this.modelValue
            this.onInput({target:{value: v + e}}, model)
        },
        async onPaste(e) {
            if(!this.allowImagePaste) {
                this.$toast.show('Добавление изображений ограничено')
                return
            }
            const newImage = await this.onImagePaste(e)
            if(newImage) {
                this.loading = true
                const img = document.createElement('img') as HTMLImageElement
                img.src = newImage.dataUrl
                img.onload = (e) => {
                    this.$emit('addImage', newImage.dataUrl)
                    this.loading = false
                    img.onload = null
                }
            }
        },
        onInput(e, model?) {
            this.calculateStyles()
            if(model) this[model] += e.target.value
            else this.$emit('update:modelValue', e.target.value)
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
    computed: {
        placeholder(): string {
            return this.chatPartner 
                    ? `Написать ${this.chatPartner}`
                    : 'Введите сообщение...'
        }
    },
    watch: {
        placeholder() {
            this.emoji = this.getRandomEmoji()
        }
    }
})
</script>

<style>

</style>