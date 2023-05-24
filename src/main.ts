import { createApp } from 'vue'
import { i18n } from './i18n'
import { auth } from '@/firebase/config'
import App from './App.vue'
import router from './router'
import store from './store'
import UI from '@/components/UI'
import directives from './directives'
import Toaster from '@meforma/vue-toaster'
import tooltip from '@/plugins/tooltip'
console.log(i18n)

let app: any


auth.onAuthStateChanged(()=>{
    if(!app) {
        initApp()
    }
})
function initApp() {
    app = createApp(App)
    for(const name in UI) { app.component(name, UI[name]) }
    for(const name in directives) {app.directive(name, directives[name])}
    app.use(i18n).use(store).use(router).use(Toaster, {
        position: "top-right"
    }).use(tooltip).mount('#app')
}