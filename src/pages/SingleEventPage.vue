<template>
  <q-page>
    <div class="image-banner" :style="eventImage"></div>
    <single-event-details :event='eventById' class="q-mb-xl"/>

    <div class="event-extra q-mt-xl">
      <slider sliderTitle="Cê tbm vai curtir" sliderSlug="ce-tbm-vai-curtir" class="events-slider-box">
        <div class="slider__item" v-for="(event, index) in events" :key="index">
          <event-card :event="event" />
        </div>
      </slider>
    </div>
  </q-page>
</template>

<script>


import { mapActions, mapGetters } from 'vuex'
import Slider from 'src/components/Slider'
import EventCard from 'src/components/EventCard'
import SingleEventDetails from 'src/components/SingleEventDetails'

export default {
  name: 'single-event-page',

  components: {
    SingleEventDetails,
    Slider,
    EventCard
  },

  created () {
    this.setEvents()
  },

  watch: {
    $route: {
      handler (newValue) {
        this.setEventById(newValue.params.id)
      },
      immediate: true
    }
  },

  computed: {
    ...mapGetters('events', ['events', 'eventById']),

    eventImage () {
      return `background-image:url( ${this.eventById?.avatar?.medium} );`
    }
  },

  methods: {
    ...mapActions('events', ['setEventById', 'setEvents'])
  }
}
</script>

<style lang="scss">
  .image-banner {
    width: 100%;
    height: 400px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  }
</style>