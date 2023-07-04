<template>
    <div class="w-full h-auto gap-2 items-center flex group" :class="{'justify-end flex-row': !isCounterMessage}">
        <small class="text-gray-500 dark:text-gray-300 text-xs will-dissapear group-hover:opacity-100 opacity-0 transition-all" v-show="!isCounterMessage">{{filterDate(message.sended_at)}}</small>
        <div
            @click="showTooltip = true"
            class="cursor-pointer rounded-3xl max-w-[calc(100%_-_2rem)] min-h-[1.5rem] h-auto min-w-[4rem] shadow-md inline-flex transition-all px-3 py-2 overflow-hidden"
            :class="getStyles">
            <base-tooltip :options="{ allowHTML: true, trigger: 'click', followCursor: 'initial'}" v-if="showTooltip">
                <div class="flex flex-col w-36 gap-2">
                    <p class="text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors" @click="openPicture" v-if="!isTextMessage(message.content)">Открыть картинку</p>
                    <p class="text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors" @click="onClick('onDelete', message)">Удалить</p>
                    <p class="text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors">Редактировать</p>
                    <p class="text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors">Переслать</p>
                    <p class="text-xs text-blue-300 cursor-pointer hover:text-blue-400 transition-colors">Сохранить</p>
                </div>
            </base-tooltip>
            <div class="flex gap-2 items-center h-full self-end overflow-hidden">
                <div class="flex gap-2 overflow-hidden items-center">
                    <p
                        v-if="isTextMessage(message.content)"
                        class="text-sm text-ellipsis px-2 overflow-hidden"
                        :class="{'text-gray-300': isCounterMessage, 
                                 'text-gray-700': !isCounterMessage}">{{message.content}}</p>
                    <div class="flex flex-col gap-2" v-else>
                        <div class="flex justify-center items-center p-1 flex-col gap-2 max-w-xl min-w-[100px]">
                            <img :src="message.content.uploadImageURL" alt="" class="object-cover rounded-2xl max-h-[320px]">
                        </div>
                            <small class="text-sm text-ellipsis px-2 overflow-hidden"
                            :class="{'text-gray-300': isCounterMessage, 
                                    'text-gray-700': !isCounterMessage}">{{ message.content.description }}</small>
                    </div>                                 
                     <div v-show="!isCounterMessage" class="flex items-center">
                        <i class="fa-solid fa-check-double text-gray-700 text-xs" v-if="messageStatus === 'READ'"></i>   
                        <i class="fa-solid fa-check text-gray-700 text-xs" v-else-if="messageStatus === 'SENDED'"></i>   
                        <i class="fa-solid fa-hourglass-half text-gray-700 text-xs" v-else-if="messageStatus === 'SENDING'"></i>   
                     </div>            
                </div>
            </div>
        </div>
        <small class="text-gray-500 dark:text-gray-300 text-xs will-dissapear group-hover:opacity-100 opacity-0 transition-all" v-show="isCounterMessage">{{filterDate(message.sended_at)}}</small>
    </div>
</template>

<script lang="ts">
import Message from '@/classes/chat/Message';
import ReadStatus from '@/enums/ReadStatus';
import ImageMessageContent from '@/interfaces/ImageMessageContent';
import { filterDateFromJSONString } from "@/utils/dateFilter"
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    data: () => ({ showTooltip: true }),
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
        },
        parentElement: {
            type: HTMLElement,
            required: false
        }
    },
    methods: {
        openPicture() {
            const a = document.createElement('a') as HTMLAnchorElement
            a.href = this.message.content.uploadImageURL
            a.target = "_blank"
            a.click()
        },
        filterDate(stringified) {
            return filterDateFromJSONString(stringified)
        },
        onClick(method, arg?) {
            this[method]?.(arg)
            
            this.showTooltip = false
        },
        onDelete(message){
            this.$emit('delete', message.id)
        },
        isTextMessage(content): content is string {
            return !Object.keys(content).includes('uploadImageURL')
        },
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
        },
        messageStatus(): string {
            return this.message.read_status === ReadStatus.READ
                   ? 'READ' :
                   this.message.read_status === ReadStatus.SENDED
                   ? 'SENDED' :
                   this.message.read_status === ReadStatus.SENDING
                   ? 'SENDING' : ''
        }
    }
})
</script>