<template>
  <div class="sm:h-[calc(100vh_-_8rem)] h-[calc(100vh_-_10.25rem)] relative">
    <div class="absolute top-2 left-1/2 -translate-x-1/2 z-50">
        <base-date-badge :date="new Date()"/>
    </div>
    <div class="flex flex-col gap-2 px-2 py-1 overflow-scroll scrollbar-hide h-full relative" ref="messages_container">
        <base-message
        :isCounterMessage="isCounterMessage(message.sended_by_uid)"
        v-for="(message, ind) in messages"
        :message="message"
        :key="getMessageKey(message.sended_at)"
        :placementOrder="getMessagePlacementOrder(ind)"></base-message>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Message from '@/classes/chat/Message';
import BaseMessage from './BaseMessage.vue';
import BaseDateBadge from "./BaseDateBadge.vue"

export default defineComponent({
    name: "MessagesList",
    components: {BaseMessage, BaseDateBadge},
    mounted() {
        this.container = this.$refs.messages_container as HTMLDivElement
            this.$nextTick(() => {
                this.container.scrollTop = this.container.scrollHeight
        })
    },
    data: () => ({
        containter: null as unknown as HTMLDivElement,
        loading: false
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
        }
    },
    methods: {
        getMessageKey(createdAt) {
            return +(new Date(JSON.parse(createdAt)))
        },
        getMessagePlacementOrder(ind): 'first' | 'last' | 'middle' {
            return ind === this.messages.length - 1 ? 'last' : ind === 0 ? 'first' : 'middle'
        },
        isCounterMessage(sended_by_uid: string): boolean {
            return sended_by_uid != this.uid
        }
    }
})
</script>

<style>

</style>