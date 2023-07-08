<template>
  <div class="sm:h-[calc(100vh_-_6.5rem)] h-[calc(100vh_-_11.5rem)] relative">
    <base-modal v-model="showConfirmDialog">
        <template #header > Подтверждение операции</template>
        <p class="text-sm text-gray-600 dark:text-gray-400">Вы уверены, что хотите {{ operationName }} ?</p>
        <div class="flex gap-2 pt-2">
            <base-button theme="alert" @click="deleteMessage">Удалить</base-button>
            <base-button theme="neutral" @click="showConfirmDialog = false">Отмена</base-button>
        </div>
    </base-modal>
    <div class="absolute top-2 left-1/2 -translate-x-1/2 z-50">
        <transition name="fade">
            <base-date-badge :date="new Date()" v-if="this.showBadge" />
        </transition>
    </div>
    <div class="flex flex-col gap-2 px-2 py-1 overflow-scroll scrollbar-hide h-full relative" ref="messages_container" v-on-scroll="{callback: showDateBadge}">
        <base-message
        :parentElement="containter"
        :isCounterMessage="isCounterMessage(message.sended_by_uid)"
        v-for="(message, ind) in messages"
        :message="message"
        :key="getMessageKey(message.sended_at)"
        :placementOrder="getMessagePlacementOrder(ind)" 
        @view="onMessageView(message)"
        @delete="onDeleteMessageClick"
        />
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Message from '@/classes/chat/Message';
import ReadStatus from '@/enums/ReadStatus';
import BaseMessage from './BaseMessage.vue';
import BaseDateBadge from "./BaseDateBadge.vue"

export default defineComponent({
    name: "MessagesList",
    components: {BaseMessage, BaseDateBadge},
    mounted() {
        this.scrollToBottom()
    },
    data: () => ({
        containter: null as unknown as HTMLDivElement,
        loading: false,
        showBadgeTimeout: null,
        showBadge: false,
        showConfirmDialog: false,
        operationName: '',
        chosenMessageId: ''
    }),
    props: {
        uid: {
            type: String,
            required: true,
            default: ''
        },
        messages: {
            type: Array as PropType<Message[]>,
            required: true,
            default: () => []
        },
        roomHash: {
            type: Number,
            required: true
        }
    },
    methods: {
        async onMessageView(message: Message): Promise<void> {
            console.log('message with id ', message.id, ' is in view')
            console.log('this message is in room with hash ', this.roomHash)
            await this.$store.dispatch('room/updateMessage', {
                hash: this.roomHash,
                id: message.id,
                updateFields: {
                    readStatus: ReadStatus.READ
                }
            })
            console.log('message was successfuly updated! :)')
        },
        showDateBadge() {
            clearTimeout(this.showBadgeTimeout)

            this.showBadge = true
            this.showBadgeTimeout = setTimeout(() => {
                this.showBadge = false
                clearTimeout(this.showBadgeTimeout)
            }, 2000);
        },
        scrollToBottom(speed: 'smooth' | 'default') {
            function scroll() {
                if(speed === 'smooth')
                    this.container.scrollTo({top: this.container.scrollHeight, behavior: 'smooth'})
                else this.container.scrollTop = this.container.scrollHeight
            }
            this.container = this.$refs.messages_container as HTMLDivElement
            this.$nextTick(scroll)
        },
        getMessageKey(createdAt) {
            return +(new Date(JSON.parse(createdAt)))
        },
        getMessagePlacementOrder(ind): 'first' | 'last' | 'middle' {
            return ind === this.messages.length - 1 ? 'last' : ind === 0 ? 'first' : 'middle'
        },
        isCounterMessage(sended_by_uid: string): boolean {
            return sended_by_uid != this.uid
        },
        async deleteMessage() {
            this.showConfirmDialog = true
            this.$store.dispatch('room/deleteMessage', {id: this.chosenMessageId , counterId: this.$route.params.chatId})
            this.$toast.show('Сообщение было удалено')
            this.showConfirmDialog = false
        },
        async onDeleteMessageClick(id) {
            this.showConfirmDialog = true
            this.operationName = 'удалить сообщение'
            this.chosenMessageId = id
        }
    },
    watch: {
        messages: {
            handler(v) {
                if(v[v.length - 1]?.sended_by_uid === this.uid) {
                    this.scrollToBottom('smooth')
                }
            },
            deep: true
        },
        '$route.params.chatId'() {
            this.showDateBadge()
        }
    }
})
</script>