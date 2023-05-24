<template>
    <div class="hidden">
        <div ref="slot">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css'

export default {
    props: {
        options: {
            type: Object
        }
    },
    data: () => ({ t: null }),
    name: "BaseTooltip",
    mounted() {
        const defaults = {
            allowHTML: true,
            interactive: true,
            content: this.$refs.slot
        }
        this.t = tippy(this.$el.parentNode, {
            ...defaults,
            ...this.options,
            appendTo: document.body
        })
    },
    unmounted() {
        this.t.destroy()
    }
}
</script>

<style>

</style>