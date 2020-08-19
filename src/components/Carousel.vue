<template>
  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="fade"
    transition-next="fade"
    @mouseenter="toggleAutoplay"
    @mouseleave="toggleAutoplay"
  >
    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
    <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
  </q-carousel>
</template>

<script>
export default {
  name: 'carousel',

  data () {
    return {
      slide: 1,
      autoplay: 3000
    }
  },

  methods: {
    toggleAutoplay () {
      this.autoplay = !this.autoplay
    }
  }
}
</script>
