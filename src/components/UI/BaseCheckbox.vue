<template>
    <div class="flex flex-col gap-2">
        <div class="flex w-full gap-2 pl-1 select-none">
            <input
                :checked="modelValue"
                @change="updateValue"
                class="cursor-pointer scale-125 bg-gray-500"
                type="checkbox"
                :name="id"
                :id="id">
            <label
                class="font-semibold text-gray-600 dark:text-gray-300 text-xs whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer"
                :class="{'text-red-500': error}"                 
                :for="id">
                <slot></slot>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: Boolean,
            required: false,
            default: false
        },
        error: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            id: null
        }
    },
    created() {
        this.id = "checkbox-" + Math.random()
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', !!e.target.checked)
        }
    }
}
</script>

<style>

</style>