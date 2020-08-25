<template>
  <div class="event-details" :key="event.id">
    <div class="event-details__title-box q-mb-xl row">
      <div class="col-12 col-sm-6 q-mb-lg">
        <h1 class="event-details__title">{{ event.name }}</h1>
      </div>
      <div class="col-12 col-sm-6">
        <p class="event-details__date">{{ eventDate }} {{ eventTime }}</p>
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
      <!-- <vue-markdown>this is the default slot</vue-markdown> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDate, formatTime } from 'src/helpers/filters'
// var VueMarkdown = require('vue-markdown')

export default {
  name: 'single-event-details',

  props: {
    event: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  components: {
    // VueMarkdown
  },

  computed: {
    eventDate () {
      return formatDate(this.event.date)
    },

    eventTime () {
      return formatTime(this.event.start_time)
    }
  }
}
</script>