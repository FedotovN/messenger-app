<template>
    <div class="w-full h-auto flex" :class="{'justify-end': !isCounterMessage}">
        <div
            class="cursor-pointer rounded-3xl max-w-[calc(100%_-_2rem)] min-h-[1.5rem] h-auto min-w-[4rem] shadow-md inline-flex transition-all p-3"
            :class="getStyles">
            <div class="flex gap-2 items-center h-full self-end">
                <div class="flex flex-col gap-1">
                    <p
                        class="text-sm text-ellipsis px-2 -mt-1"
                        :class="{'text-gray-300': isCounterMessage, 
                                 'text-gray-700': !isCounterMessage}">{{message.content}}</p>
                    <div class="flex justify-between items-center px-2">
                        <div class="flex gap-2 pr-2 items-center">
                            <small class="text-gray-500 text-xs">Отправлено</small>
                            <div class="h-1 w-1 bg-gray-500 rounded-full"></div>
                            <small class="text-gray-500 text-xs">{{filterDate(message.sended_at)}}</small>
                        </div>
                        <div class="h-1 w-1 bg-gray-500 rounded-full mr-2"></div>
                        <div class="text-gray-600 text-xs">Изменено</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Message from '@/classes/chat/Message';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name: 'BaseMessage',
    props: {
        message: {
            type: Object as PropType<Message>,
            required: true
        },
        isCounterMessage: {
            type: Boolean,
            required: true,
            default: true
        },
        placementOrder: {
            type: String as PropType<'first' | 'last' | 'middle'>,
            required: false,
            default: 'middle'
        }
    },
    methods: {
        filterDate(stringified) {
            const date = (new Date(JSON.parse(stringified)))
            return Intl.DateTimeFormat('Ru-ru', {hour:'2-digit', minute: '2-digit'}).format(date)
        }
    },
    computed: {
        getBorderStyles(): string {
            if(this.placementOrder === 'middle') return ''
            if(this.isCounterMessage) {
                if(this.placementOrder === 'first') return 'message-first-counter'
                else return 'message-last-counter'
            }
            else if(!this.isCounterMessage) {
                if(this.placementOrder === 'first') return 'message-first'
                else return 'message-last'
            }
            return ''
        },
        getStyles(): string {
            const c = this.isCounterMessage
            return this.getBorderStyles + ' ' + `${c ? 'bg-gray-900' : 'bg-blue-300'}`
        }
    },
    data: () => ({})
})
</script>

<style>

</style>