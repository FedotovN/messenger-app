<template>
  <div class="w-full flex flex-col gap-2 h-full">
        <div class="flex justify-between items-center">
            <label
            class="text-gray-600 dark:text-gray-400" :for="'textarea-'+id">{{ label }}</label>
            <small class="text-xs text-gray-600 dark:text-gray-400" v-if="maxLength && focused">{{ modelValue?.length || 0 }} / {{ maxLength }}</small>
        </div>
        <textarea
        :maxlength="maxLength ? maxLength : null"
        @focusin="focused = true"
        @focusout="focused = false"
        :value="modelValue"
        @input="updateValue"
        :id="'textarea-' + id"
        cols="30" rows="10" 
        class="w-full h-full outline-none border border-gray-400 rounded resize-none p-2 transition-colors dark:bg-dark-200 dark:text-gray-200"
        :class="focused ? 'border-blue-600' : ''"
        >
        </textarea>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: false,
            default: ''
        },
        modelValue: {
            type: String,
            required: false
        },
        maxLength: {
            type: Number,
            required: false
        }
    },
    methods: {
        updateValue(e) {
            this.$emit("update:modelValue", e.target.value)
        }
    },
    data() {
        return {
            focused: false,
            id: Math.random()
        }
    }
}
</script>

<style>

</style>