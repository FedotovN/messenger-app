<template>
  <div class="sm:h-[calc(100vh_-_8rem)] h-[calc(100vh_-_10.5rem)] relative">
    <div class="absolute top-2 left-1/2 -translate-x-1/2 z-50">
        <transition name="fade">
            <base-date-badge :date="new Date()" v-if="this.showBadge" />
        </transition>
    </div>
    <div class="flex flex-col gap-2 px-2 py-1 overflow-scroll scrollbar-hide h-full relative" ref="messages_container" v-on-scroll="{callback: showDateBadge}">
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
        this.scrollToBottom()
    },
    data: () => ({
        containter: null as unknown as HTMLDivElement,
        loading: false,
        showBadgeTimeout: null,
        showBadge: false
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

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter-from {
        opacity: 0;
    }
</style>