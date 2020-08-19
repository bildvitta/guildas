<template>
  <router-link :to="`/eventos/${ event.id }`">
    <q-card class="event-card" flat>
      <img class="event-card__image" :src="event.imageUrl" />
      <q-card-section class="event-card__description">
        <div class="event-card__description-title">{{ event.name }}</div>
        <div class="event-card__description-date q-mb-sm">{{ event.date | formatDate }}</div>
        <div class="event-card__description-text">{{ event.description }}</div>
        <div class="event-card__location row items-center q-mt-md">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p class="event-card__location-address">{{ event.location }}</p>
        </div>
      </q-card-section>
    </q-card>
  </router-link>
</template>

<script>
import filters from 'src/mixins/filters/filters'

export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },

  mixins: ['filters']
}
</script>