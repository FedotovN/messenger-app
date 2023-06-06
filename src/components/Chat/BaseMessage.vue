<template>
    <div class="w-full min-h-[4.5rem] overflow-hidden flex" :class="{'justify-end': !isCounterMessage}">
        <div
            class="rounded-md w-full min-h-[4.5rem] h-auto sm:w-auto sm:max-w-full min-w-[16rem] shadow-md py-2 inline-flex overflow-hidden"
            :class="{'bg-gray-900': isCounterMessage,
                     'bg-gray-300': !isCounterMessage}">
            <div class="flex gap-2 items-center h-full px-2 self-end">
                <div class="h-[1.8rem] w-[1.8rem] min-h-[1.8rem] min-w-[1.8rem] rounded-full bg-gray-300 self-start overflow-hidden">
                    <img :src="message.sended_by_photo_url" class="overflow-hidden h-full w-full object-cover">
                </div>
                <div class="flex flex-col gap-1 -mt-1">
                    <small class="text-xs text-gray-500">{{message.sended_by_name}}</small>
                    <p
                        class="text-sm overflow-hidden text-ellipsis"
                        :class="{'text-gray-300': isCounterMessage, 
                                 'text-gray-700': !isCounterMessage}">{{message.content}}</p>
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
        }
    },
    methods: {},
    data: () => ({})
})
</script>

<style>

</style>