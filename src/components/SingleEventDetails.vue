<template>
  <div class="event-details" :key="event.id">
    <div class="event-details__title-box q-mb-xl row">
      <div class="col-12 col-sm-6 q-mb-lg">
        <h1 class="event-details__title text-strong-pink">{{ event.name }}</h1>
      </div>
      <div class="col-12 col-sm-6">
        <p class="event-details__date text-medium-purple text-uppercase text-bold">{{ eventDate }} {{ eventTime }}</p>
        <div class="event-details__location flex no-wrap">
          <q-icon name="location_on" class="event-card__location-icon text-strong-pink"></q-icon>
          <p class="event-details__location-address q-ml-sm q-mb-none text-darker-purple" :class="limitLocationString">{{ event.place }}</p>
        </div>
        <q-btn class="event-details__btn bg-strong-pink text-white text-bold" flat label="Simbora!" />
      </div>
    </div>

    <div class="event-description">
      <h2 class="event-description__heading">Descrição do evento</h2>
      <p class="event-description__text" v-html="event.description" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDate, formatTime } from 'src/helpers/filters'

export default {
  name: 'single-event-details',

  props: {
    event: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  computed: {
    eventDate () {
      return formatDate(this.event.date)
    },

    eventTime () {
      return formatTime(this.event.start_time)
    },

    limitLocationString () {
      return this.$q.screen.xs ? 'ellipsis' : ''
    }
  }
}
</script>

<style lang="scss">
  .event-details {
    &__title-box { 
      margin-top: 50px;
    }

    &__title {
      font-family: "Press Start 2P", cursive;
      font-size: 40px;
      line-height: 1.3;

      @media (max-width: 900px) { 
        font-size: 30px;
      }

      @media (max-width: 700px) { 
        font-size: 24px;
      }
    }

    &__location-icon {
      font-size: 18px;
      display: inline-block;
    }

    &__location-address {
      display: inline-block;
      font-size: 12px;
      max-width: 52%;

      @media (max-width: 600px) {
        max-width: 100%;
      }
    }

    &__btn {
      width: 324px;
      margin-top: 50px;
      text-transform: none;
      box-shadow: 3px 6px 9px #7f2bed26;

      @media (max-width: 700px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  .event-description {
    margin-bottom: 40px;

    &__heading {
      font-family: 'Press Start 2P', cursive;
      font-size: 16px;

      @media (max-width: 600px) { 
        font-size: 14px;
      }
    }
  }
</style>