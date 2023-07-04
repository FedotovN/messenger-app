export default {
    mounted(el: HTMLElement, bindings) {
        const { value } = bindings
        if(typeof value === 'function') {
            const observer = new IntersectionObserver( entries => {
                entries.forEach(e => {
                    if(e.isIntersecting) {
                        value()
                    }
                })
            })

            observer.observe(el)
        }
        else {
            console.warn('on-view directive takes a callback function as a value, nothing will happen')
        }
    }
}