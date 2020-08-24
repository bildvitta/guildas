<template>
  <div>
    <search-bar />
    <carousel />

    <slider sliderTitle="Fica Ligado!">
      <div v-for='(subject, index) in subjects' :key='index' class="slider__item">
        <subject-card :subject="subject"/>
      </div>
    </slider>

    <slider v-for="(category, index) in categories" :key="`category-${index}`" class="events-slider-box" v-show="showCategory(category.name)" :sliderTitle="category.name">
      <div v-for="(event, index) in events" :key="`event-${index}`">
        <div class="slider__item" v-if="category.name && filterEvent(event, category.name)">
          <event-card :event="event"/>
        </div>
      </div>
    </slider>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SearchBar from 'components/SearchBar.vue'
import Carousel from 'components/Carousel.vue'
import Slider from 'components/Slider.vue'
import EventCard from 'components/EventCard.vue'
import SubjectCard from 'components/SubjectCard.vue'

export default {
  name: 'events-page',

  components: {
    SearchBar,
    Carousel,
    Slider,
    EventCard,
    SubjectCard
  },

  data () {
    return {
      slide: 1
    }
  },

  created () {
    this.setEvents()
    this.setSubjects(),
    this.setCategories()
  },

  computed: {
    ...mapGetters('events', ['events']),
    ...mapGetters('subjects', ['subjects']),
    ...mapGetters('categories', ['categories']),

    setCategorySliderWidth () {
      const cardWidth = 325

      return this.categoryCards.length * cardWidth > window.innerWidth
        ? `width: ${this.categoryCards.length * cardWidth}px`
        : 'width 100%'
    }
  },

  methods: {
    ...mapActions('events', ['setEvents']),
    ...mapActions('subjects', ['setSubjects']),
    ...mapActions('categories', ['setCategories']),

    filterEvent (event, category) {
      return event?.category?.name === category
    },

    showCategory (categoryName) {
      for (let event in this.events) {
        if (this.events[event].category.name === categoryName) {
          return true
        }
      }

      return false
    }
  }
}
</script>
