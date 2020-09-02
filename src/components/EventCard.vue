<template>
  <router-link :to="eventURL">
    <q-card class="event-card bg-secondary q-mr-md" :style="isFullWidth" flat>
      <div class="relative-position">
        <div class="event-card__subjects">
          
        </div>
        <div class="event-card__image full-width" :style="eventImage"/>
      </div>
      
      <q-card-section class="event-card__description">
        <div class="event-card__description-title text-bold">{{ event.name }}</div>
        <div class="event-card__description-date q-mb-sm text-uppercase text-medium-purple text-bold">
          {{ eventDate }} {{ eventStartTime }}
        </div>
        <div class="event-card__description-text ellipsis-3-lines text-medium-gray">{{ event.description }}</div>
        <div class="event-card__location row items-center q-mt-md">
          <q-icon name="location_on" color="strong-pink" class="event-card__location-icon"></q-icon>
          <p class="event-card__location-address ellipsis q-ml-sm q-mb-none text-darker-purple">
            {{ event.place }}
          </p>
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
    window.addEventListener('resize', this.setWindowSize)
  },

  computed: {
    eventURL () {
      return `/eventos/${this.event.id}`
    },

    eventImage () {
      return `background-image: url(${this.event?.avatar?.medium});`
    },
    
    eventDate () {
      return formatDate(this.event.date)
    },

    eventStartTime () {
      return formatTime(this.event.start_time)
    },

    isSubject () {
      return this.$route.name === 'Subject'
    },

    isFullWidth () {
      return this.windowSize < 750 && this.isSubject && 'width: 100%;'
    }
  },

  methods: {
    setWindowSize () {
      this.windowSize = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
  .event-card {
    width: 325px;
    transition: all .3s linear;
    border-radius: 10px;

    &:hover {
      background-color: #fff;
      box-shadow: $shadow-purple;
    }

    &__image {
      border-radius: 10px !important;
      height: 200px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all .3s linear;
    }

    &:hover &__image { 
      border-radius: 10px 10px 0px 0px !important;
    }

    &__description-title {
      font-size: 16px;
    }

    &__location-icon {
      font-size: 18px;
    }

    &__location-address {
      font-size: 12px;
      max-width: 30ch;
      display: inline-block;

      @media (max-width: 600px) { 
        max-width: 25ch; 
      }
    }
  }
</style>