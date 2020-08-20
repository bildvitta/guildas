<template>
  <router-link :to="`/eventos/${ event.id }`">
    <q-card class="event-card" flat>
      <img class="event-card__image" :src="eventImage" />
      <q-card-section class="event-card__description">
        <div class="event-card__description-title">{{ event.name }}</div>
        <div class="event-card__description-date q-mb-sm">{{ eventDate }} // {{ eventStartTime }}</div>
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
  props: {
    event: {
      type: Object,
      required: true
    }
  },

  computed: {
    eventImage () {
      return this.event?.avatar?.small
    },

    eventDate () {
      return formatDate(this.event.date)
    },

    eventStartTime () {
      return formatTime(this.event.start_time)
    }
  }
}
</script>