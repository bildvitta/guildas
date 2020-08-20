<template>
  <div>
    <div class="image-banner" :style="'background-image:url(' + eventImage + ');'"></div>
    <single-event-details :event='eventById' class="q-mb-xl"/>

    <div class="event-extra q-mt-xl">
      <slider sliderTitle="Cê tbm vai curtir">
        <div class="slider__item" v-for="(event, index) in events" :key="index">
          <event-card :event="event" />
        </div>
      </slider>
    </div>
  </div>
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
      return this.eventById?.avatar?.medium
    }
  },

  methods: {
    ...mapActions('events', ['setEventById', 'setEvents'])
  }
}
</script>