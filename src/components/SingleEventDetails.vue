<template>
  <div class="event-details">
    <div class="event-details__title-box q-mb-xl row">
      <div class="col-12 col-sm-6 q-mb-lg">
        <h1 class="event-details__title">{{ event.name }}</h1>
      </div>
      <div class="col-12 col-sm-6">
        <p class="event-details__date">{{ eventDate }} // {{ eventTime }}</p>
        <div class="event-details__location">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p class="event-details__location-address">{{ event.place }}</p>
        </div>
        <q-btn class="event-details__btn" flat label="Simbora!" />
      </div>
    </div>

    <div class="event-description">
      <h2 class="event-description__heading">Descrição do evento</h2>
      <p class="event-description__text" v-html="event.description" />
    </div>

    <!-- COMENTADO POR HORA APENAS -->
    <!-- <div class="event-extra">
      <slider sliderTitle="Cê tbm vai curtir">
        <div class="slider__item" v-for="(event, index) in events" :key="index">
          <event-card :event="event" />
        </div>
      </slider>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

//COMENTADOS POR HORA APENAS
// import Slider from 'src/components/Slider'
// import EventCard from 'src/components/EventCard'

import { formatDate, formatTime } from 'src/helpers/filters'

export default {
  name: 'single-event-details',

  data () {
    return {
      
    }
  },

  props: {
    event: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  components: {
    // Slider,
    // EventCard
  },

  computed: {
    eventDate () {
      return formatDate(this.event.date)
    },

    eventTime () {
      return formatTime(this.event.start_time)
    }
  },

  mounted () {}

}
</script>