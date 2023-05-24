<template>
   <div class="overflow-hidden">
        <div class="relative mt-7 ">
            <label
                v-if="label"
                :class="{
                    'top-1/2': !isActive && !modelValue && !value, 
                    '-top-3': isActive || modelValue || value,
                    'text-blue-600 dark:text-primary-100': isActive,
                    'text-red-600 dark:text-rose-400': errorMessage,
                    'text-gray-600 dark:text-gray-300': !errorMessage && !isActive
                }"
                class="cursor-text text-xs absolute -translate-y-1/2 left-2 transition-all"
                :for="id">
                    {{ label }}
            </label>

            <input
                :value="modelValue || value"
                :name="id"
                :id="id"
                :type="type"
                :autocomplete="autocomplete"
                :disabled="disabled"
                @input="updateInput"
                @focusin="isActive = true"
                @focusout="isActive = false"
                class="w-full h-10 pl-2 text-md outline-none dark:focus:border-primary-100 focus:border-primary-200 transition-colors dark:bg-dark-200 dark:text-gray-300" 
                :class="{
                    'border-red-400 dark:border-rose-400': errorMessage,
                    'border rounded border-gray-300 dark:border-gray-600': !disabled,
                    'border-b text-gray-500 border-gray-300 dark:border-gray-600': disabled
                }"/>
        </div>

        <small
            v-if="errorMessage"
            class="text-red-600 dark:text-rose-400 overflow-hidden text-elipsis">
                {{ errorMessage }}
        </small>
    </div>
</template>

<script>
export default {
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
        }
    },
    data() {
        return {
            isActive: false,
            id: null
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
}
</script>

<style>

</style>