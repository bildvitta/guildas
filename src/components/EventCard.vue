<template>
  <router-link :to="`/eventos/${ event.id }`">
    <q-card class="event-card q-mr-md" :style="isFullWidth" flat>
      <div class="relative-position">
        <div class="event-card__subjects">
          
        </div>
        <div class="event-card__image" :style="eventImage"/>
      </div>
      
      <q-card-section class="event-card__description">
        <div class="event-card__description-title">{{ event.name }}</div>
        <div class="event-card__description-date q-mb-sm">{{ eventDate }} {{ eventStartTime }}</div>
        <div class="event-card__description-text">{{ event.description }}</div>
        <div class="event-card__location row items-center q-mt-md">
          <q-icon name="location_on" class="event-card__location-icon"></q-icon>
          <p class="event-card__location-address text-darker-purple">{{ event.place }}</p>
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
    eventImage () {
      return `background-image: url(${this.event?.avatar?.medium});`
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

      return this.windowSize < 750 && 'width: 100%;'
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
    background-color: $secondary;
    transition: all .3s linear;
    border-radius: 10px;

    &:hover {
      background-color: #fff;
      box-shadow: 0px 3px 15px $shadow-purple !important;
    }

    &__image {
      border-radius: 10px !important;
      width: 100%;
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
      font-weight: 700;
      font-size: 16px;
    }

    &__description-date {
      color: $medium-purple;
      font-weight: 700;
      text-transform: uppercase;
    }

    &__description-text {
      color: $medium-gray-text;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    &__location-icon {
      color: $strong-pink;
      font-size: 18px;
    }

    &__location-address {
      margin-left: 5px;
      margin-bottom: 0;
      font-size: 12px;
      max-width: 30ch;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      display: inline-block;

      @media (max-width: 600px) { 
        max-width: 25ch; 
      }
    }
  }
</style>