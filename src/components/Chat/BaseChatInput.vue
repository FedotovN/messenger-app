<template>
 <div class="flex w-full max-w-full flex-col">
    <base-modal v-model="showImagePopup">
        <template #header>Прикрепить картинку</template>
        <div class="flex flex-col gap-2">
            <div class="w-full flex justify-center items-center h-64">
                <img :src="imageDataUrl.dataUrl" alt="" ref="image" class="object-contain max-h-full h-full"/>
            </div>
            <div class="flex gap-2 items-center justify-center">
                <base-input label="Добавить подпись..." autofocus v-model="imageMessage" class="w-full"></base-input>
            </div>
        </div>
        <template #footer>
            <div class="flex gap-2 py-2">
                <base-button @click="showImagePopup = false" theme="passive">Отмена</base-button>
                <base-button @click="sendImage">Отправить</base-button>
            </div>
        </template>
    </base-modal>
     <div class="flex w-full gap-2 max-w-full">
       <div class="rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" v-tooltip="'Эмодзи'">
           <span class="sm:text-lg">{{emoji}}</span>
           <base-tooltip :options="{trigger: 'click'}">
               <base-emoji @pushEmoji="onEmojiPick"></base-emoji>
           </base-tooltip>
       </div>
       <div class="flex w-full flex-col max-w-full">
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
           ></textarea>
       </div>
       <div class="rounded-full min-w-[36px] min-h-[32px] border dark:border-gray-600 flex items-center justify-center cursor-pointer group" @click="onEnter" v-tooltip="'Отправить'">
           <i class="block fa-solid fa-paper-plane text-gray-700 group-hover:text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-400 transition-colors"></i>
       </div>
       </div>
 </div>
</template>

<script lang=ts>

import { defineComponent } from 'vue'
import { getRandomEmoji } from '@/utils/emoji'
import { dataURL, onImagePaste,  } from '@/utils/imageUpload'
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
        focused: false,
        emoji: '',
        showImagePopup: false,
        imageDataUrl: {} as dataURL,
        imageElement: null as unknown as HTMLImageElement,
        imageMessage: ''
    }),
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
            this.$refs.textarea.focus()
        },
        async sendImage() {
            this.$emit('sendImage', {url: this.imageDataUrl.dataUrl, desc: this.imageMessage})
            this.showImagePopup = false
        },
        async onPaste(e){
            this.imageDataUrl = await this.onImagePaste(e)
            if(this.imageDataUrl) {
                const img = document.createElement('img') as HTMLImageElement
                img.src = this.imageDataUrl.dataUrl
                img.onload = (e) => {
                    this.textarea.blur()
                    this.showImagePopup = true
                    img.onload = null
                }
            }
        },
        onInput(e, model?) {
            this.calculateStyles()
            console.log(e.target.value)
            if(model) this[model] += e.target.value
            else this.$emit('update:modelValue', e.target.value)
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
        this.imageElement = this.$refs.image
        this.calculateStyles()
        this.emoji = this.getRandomEmoji()
    },
    watch: {
        placeholder() {
            this.emoji = this.getRandomEmoji()
        }
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