import tippy from "tippy.js"
import 'tippy.js/themes/light.css'
export default {
    mounted(el, {value}) {
        let config = {
            theme: null,
            content: null
        }
        if(value){
            if(typeof value === 'object') {
                Object.keys(value).forEach( bind => {
                    config[bind] = value[bind]
                })
            }
            else config.content = value
        }
        tippy(el, {...config})
    },
    unmounted(el) {
        el._tippy.destroy()
    }
}