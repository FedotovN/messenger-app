<template>
  <div class="flex flex-col bg-white py-2 px-4 gap-4 rounded shadow whitespace-nowrap overflow-hidden text-ellipsis">
    <p class="text-lg font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">Страница не найдена</p>
    <small class="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">{{ path }}</small>
    <div class="flex w-full justify-between">
        <base-link :to="{name: 'login'}">Вход</base-link>
        <base-link :to="{name: 'todo'}">Главная</base-link>
    </div>
  </div>
</template>

<script>
export default {
    props: ['path']
}
</script>

<style>

</style>