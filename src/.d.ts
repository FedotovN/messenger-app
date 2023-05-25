import Toaster from '@meforma/vue-toaster'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toast: Toaster
  }
}