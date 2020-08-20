<template>
  <router-link :to="`/eventos/${ event.id }`">
    <q-card class="event-card" :style="isFullWidth" flat>
      <div class="relative-position">
        <div class="event-card__subjects">
          
        </div>
        <img class="event-card__image full-width" :src="eventImage" />
      </div>
      
      <q-card-section class="event-card__description">
        <div class="event-card__description-title">{{ event.name }}</div>
        <div class="event-card__description-date q-mb-sm">{{ eventDate }} {{ eventStartTime }}</div>
        <div class="event-card__description-text">{{ event.description }}</div>
        <div class="event-card__location row items-center q-mt-md">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p class="event-card__location-address">{{ event.place }}</p>
        </div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
import { formatDate, formatTime } from 'src/helpers/filters'

export default {
  data () {
    return {
      windowSize: ''
    }
  },

  props: {
    event: {
      type: Object,
      required: true
    }
  },

  created () {
    this.windowSize = window.innerWidth
    window.addEventListener('resize', this.checkWindowSize)
  },

  computed: {
    eventImage () {
      return this.windowSize < 750 ? this.event?.avatar?.medium : this.event?.avatar?.medium
    },
    
    eventDate () {
      return formatDate(this.event.date)
    },

    eventStartTime () {
      return formatTime(this.event.start_time)
    },

    isFullWidth () {
      if (this.$route.name != 'Subject') {
        return false
      }

      return this.windowSize < 750 ? 'width: 100%;' : ''
    }
  },

  methods: {
    checkWindowSize () {
      this.windowSize = window.innerWidth
    }
  }
}
</script>