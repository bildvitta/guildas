<template>
  <q-carousel
    :class="hideCarousel"
    animated
    v-model="slide"
    navigation
    infinite
    :autoplay="autoplay"
    arrows
    transition-prev="fade"
    transition-next="fade"
    control-color="light-gray"
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

  computed: {
    hideCarousel () {
      return this.$q.screen.xs && 'hidden'
    }
  },

  methods: {
    toggleAutoplay () {
      this.autoplay = !this.autoplay
    }
  }
}
</script>

<style lang="scss">
  .q-carousel {
    overflow: initial;
    margin-bottom: 100px;

    &__navigation {
      position: absolute;
      bottom: -50px;
    }

    &__navigation .q-icon {
      font-size: 10px;
    }

    &__navigation-icon--active .q-icon { 
      color: $text-strong-pink; 
    }

    .q-panel { 
      border-radius: 10px;
    }
  }
</style>