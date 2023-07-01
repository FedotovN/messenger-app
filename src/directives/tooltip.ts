import tippy from "tippy.js"
import 'tippy.js/themes/light.css'
import { Props } from "tippy.js"
export default {
    mounted(el, {value}) {
        const config = {
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
        tippy(el, ({...config} as unknown as Partial<Props>))
    },
    unmounted(el) {
        el._tippy?.destroy()
    }
}