export default {
    mounted(el, bindings) {
        document.addEventListener('click', (e) => {
            if(e.currentTarget != el) {
                try {
                    if(typeof bindings.value === 'object')
                        bindings.value.callback()
                    else bindings.value()
                }
                catch(e) {
                    console.warn(e)
                    console.log('Error in click outside directive in element ', el)
                }
            }
        })
    },
    unmounted() {
        removeEventListener('click', this)
    }
}