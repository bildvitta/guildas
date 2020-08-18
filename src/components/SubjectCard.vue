<template>
  <router-link :to="`/assunto/${subject.id}`">
    <q-avatar class="slider__item--rounded">
      <img class="block" src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <p class="text-center block q-mt-sm slider__item__subject">Assunto</p>
  </router-link>
</template>

<script>
export default {}
</script>

<style>
</style>