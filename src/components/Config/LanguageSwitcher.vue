<template>
  <div class="card w-28 h-10">
    {{ getLang.label }}
    <base-tooltip :options="{trigger: 'click', interactive: true, arrow: false }">
        <div class="flex flex-col w-28 text-center">
            <p @click="changeLanguage(l.id)" v-for="l in getLangs" :key="l.id" class="w-full py-4 hover:text-gray-300 cursor-pointer">
                {{ l.label }}
            </p>
        </div>
    </base-tooltip>
  </div>
</template>

<script>
export default {
    name: 'LanguageSwitcher',
    data: () => ({
        currentLang: 'ru'
    }),
    async mounted() {
        const config = this.$i18n.locale
        this.currentLang = config ? config : 'ru'
    },
    methods: {
        changeLanguage(id) {
            this.currentLang = id
            this.$store.dispatch('updateConfig', {language: this.currentLang})
            this.$i18n.locale = this.currentLang
        }
    },
    computed: {
        getLangs() {
            return [
                {
                    label: 'Русский (Ru)',
                    id: 'ru'
                },
                {
                    label: 'English (En)',
                    id: 'en'
                },
            ]
        },
        getLang() {
            return this.getLangs.find(i => i.id === this.currentLang)
        }
    }
}
</script>

<style>

</style>