<template>
  <div class="overflow-hidden">
        <div class="border-gray-300 dark:border-gray-500 bg-gray-100 pl-3 pr-2 flex gap-1 items-center dark:focus:border-primary-100 focus:border-primary-200 transition-colors dark:bg-gray-600 dark:text-gray-300 rounded-full border overflow-hidden
        " :class="{'border-primary-300 dark:border-primary-100': isActive}">
            <i class="fa-solid fa-search text-sm w-5 m-0 p-0" :class="{'text-primary-300 dark:text-primary-100': isActive}"></i>
            <input
                :value="modelValue || value"
                :name="id"
                :id="id"
                :type="type"
                :autocomplete="autocomplete"
                :disabled="disabled"
                :placeholder="placeholder"
                @input="updateInput"
                @focusin="isActive = true"
                @focusout="isActive = false"
                class="w-full h-8 text-sm outline-none dark:bg-gray-600 bg-gray-100 shadow-none" 
                />
            <div class="w-3">
                <base-loader size="tiny"  v-if="this.loading"/>
            </div>
        </div>

        <small
            v-if="errorMessage"
            class="text-red-600 dark:text-rose-400 overflow-hidden text-elipsis">
                {{ errorMessage }}
        </small>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'BaseSearchInput',
    props: {
        value: {
            type: String,
            required: false,
            default: ''
        },
        modelValue: {
            type: String,
            required: false,
            default: ''
        },
        label: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        errorMessage: {
            type: String,
            required: false,
            default: ''
        },
        autocomplete: {
            type: String,
            required: false,
            default: ''
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        },
        loading: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            isActive: false,
            id: null as any
        }
    },
    created(){
        this.id = 'input-' + Math.random()
    },
    methods: {
        activateInput() {
            this.isActive = true
        },
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },
    watch: {
        modelValue() {
            this.isActive = true
        }   
    }
})
</script>

<style>

</style>