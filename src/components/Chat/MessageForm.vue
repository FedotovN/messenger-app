<template>
 <div class="flex w-full max-w-full flex-col">
    <div class="h-36 flex flex-col gap-2 px-[42px]" v-if="pinnedImages.length">
        <div class="flex justify-between items-center w-full h-6">
            <small class="text-xs text-gray-500 flex items-center gap-2" v-if="loading">Отправка... <base-loader size="tiny"></base-loader></small>
            <small class="text-xs text-gray-500" v-else>{{ pinnedImages.length }} прикреплённ{{ pinnedImages.length > 1 ? 'ых' : 'ая' }} картин{{ pinnedImages.length > 1 ? 'ки' : 'ка' }}</small>
            <div class="h-full w-6 cursor-pointer group" @click="removePinnedImages" v-if="!loading">
                <i class="fa-solid fa-xmark group-hover:opacity-75 text-gray-500 text-lg"></i>
            </div>
        </div>
        <div class="flex items-center gap-2 h-24 max-w-full">
            <img
            class="object-cover rounded max-h-full flex-1 border-2 sm:max-w-[300px] sm:overflow-hidden max-w-[100px] overflow-x-scroll scrollbar-hide"
            :src="image"
            v-for="(image, ind) in pinnedImages"
            :key="ind">
        </div>
    </div>
     <div class="flex items-center w-full gap-2 max-w-full">
       <div class="flex w-full flex-col max-w-full h-full">
            <message-text-input 
                :chatPartner="chatPartner"
                :placeholder="placeholder"
                :allow-image-paste="pinnedImages.length < 8"
                v-model="messageText"
                @enter="pushNewMessage"
                @addImage="addImage"
                :messageSending="loading"
            />
        </div>
       </div>
 </div>
</template>

<script lang=ts>
import MessageTextInput from './MessageTextInput.vue'
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { onImagePaste } from '@/utils/imageUpload'
import { sendImageToRoom } from '@/utils/imageUpload'
import Message from '@/classes/chat/Message'
import readStatus from '@/enums/ReadStatus'
export default defineComponent({
    name: "MessageForm",
    components: { MessageTextInput },
    props: {
        chatPartner: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    },
    data: () => ({
        pinnedImages: [] as string [],
        messageText: '',
        loading: false
    }),
    methods: {
        onImagePaste,
        async addImage(dataUrl) {
            if(dataUrl) {
                this.pinnedImages.push(dataUrl)
            }
        },
        async pushNewMessage(text) {
            if(!text && !this.pinnedImages.length) return
            this.loading = true
            const newMessageId = '' + Math.random(),
                  imageUrls: string[] | null = []
            if(this.pinnedImages.length !== 0) {
                for(let i = 0; i < this.pinnedImages.length; i++) {
                    const uploadImageUrl = await sendImageToRoom(this.pinnedImages[i], newMessageId, this.getRoomHash)
                    if(uploadImageUrl)
                        imageUrls.push(uploadImageUrl)

                }
            }
            this.$emit('newMessage', new Message(
                newMessageId, new Date(), JSON.stringify(new Date()), this.getUser.uid, 
                this.getUser.displayName, this.getUser.photoURL, text, imageUrls,
                readStatus.SENDED
            ))
            this.loading = false
            this.pinnedImages = []
        },
        removePinnedImages() {
            this.pinnedImages = []
        }
    },
    mounted() {
        this.imageElement = this.$refs.image
    },
    computed: {
      ...mapGetters('auth', ['getUser']),
      ...mapGetters('contacts', ['getContacts']),
      ...mapGetters('room', ['getRoomInfo']),
      getRoomHash() {
          return this.getContacts?.find(c => c.uid === this.$route.params.chatId)?.room_hash
      },
      getMessages() {
        return this.getRoomInfo(this.getRoomHash)?.messages || []
      },
      chatId() {
        return this.$route.params.chatId
      }
    }
})
</script>

<style>

</style>