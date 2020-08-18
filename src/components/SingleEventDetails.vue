<template>
  <div class="event-details">
    <div class="event-details__title-box row">
      <div class="col-6">
        <h1 class="event-details__title">Spaceship Experience 2020</h1>
      </div>
      <div class="col-6">
        <p class="event-details__date">28 Agosto // 21:00</p>
        <div class="event-details__location">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p
            class="event-details__location-address"
          >Auditório NAVE - Iguatemi Shopping, Lorem ipsum, 2 andar, Setor Inovação</p>
        </div>
        <q-btn class="event-details__btn" flat label="Simbora!" />
      </div>
    </div>

    <div class="event-description">
      <h2 class="event-description__heading">Descrição do evento</h2>
      <p class="event-description__text"></p>
    </div>

    <div class="event-extra">
      <slider slider_title="Cê tbm vai curtir">
        <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
          <event-card :event="event"></event-card>
        </div>
      </slider>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Slider from 'src/components/Slider'
import EventCard from 'src/components/EventCard'

export default {
	name: 'single-event-details',

	components: {
		Slider,
		EventCard
	},

	mounted () {},

	computed: {
		...mapGetters('events', ['eventCards'])
	}
}
</script>