<template>
  <q-card class="event-card" flat>
    <img class="event-card__image" :src="event.imageUrl" />

    <q-card-section class="event-card__description">
      <div class="event-card__description-title">{{event.title}}</div>
      <div class="event-card__description-date q-mb-sm">{{event.date}}</div>
      <div class="event-card__description-text">{{event.descriptionText}}</div>
      <div class="event-card__location row items-center q-mt-md">
        <q-icon name="location_on" class="event-card__location-icon"></q-icon>
        <p class="event-card__location-address">{{event.location}}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		}
	}
}
</script>