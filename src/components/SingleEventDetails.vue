<template>
  <div class="event-details">
    <div class="event-details__title-box q-mb-xl row">
      <div class="col-12 col-sm-6 q-mb-lg">
        <h1 class="event-details__title">{{ event.title }}</h1>
      </div>
      <div class="col-12 col-sm-6">
        <p class="event-details__date">{{ event.date }}</p>
        <div class="event-details__location">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p class="event-details__location-address">{{ event.location }}</p>
        </div>
        <q-btn class="event-details__btn" flat label="Simbora!" />
      </div>
    </div>

    <div class="event-description">
      <h2 class="event-description__heading">Descrição do evento</h2>
      <p class="event-description__text" v-html="event.descriptionText" />
    </div>

    <div class="event-extra">
      <slider sliderTitle="Cê tbm vai curtir">
        <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
          <event-card :event="event" />
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

  data () {
    return {
      event: {
        title: 'Spaceship Experience 2020',
        imageUrl: 'https://cdn.quasar.dev/img/mountains.jpg',
        date: '28 AGOSTO // 21:00',
        descriptionText:
          'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I...',
        location:
          'Auditório NAVE - Iguatemi Shopping, Lorem ipsum, 2 andar, Setor Inovação'
      }
    }
  },

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