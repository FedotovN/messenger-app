export default {
    mounted(el: HTMLElement, { value }) {
        el.addEventListener('scroll', () => {
            value.callback()
        })
    },
    unmounted(el) {
        el.removeEventListener('scroll', this)
    }
}