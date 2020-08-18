<template>
  <div>
    <search-bar />
    <carousel />

    <slider slider_title="Fica Ligado!">
      <div class="slider__item">
        <subject-card />
      </div>
    </slider>

    <slider slider_title="Categoria 1">
      <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
        <event-card :event="event"/>
      </div>
    </slider>

    <slider slider_title="Categoria 2">
      <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
        <event-card :event="event"/>
      </div>
    </slider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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

  computed: {
    ...mapGetters('events', ['eventCards']),

    setCategorySliderWidth () {
      const cardWidth = 325

      return this.categoryCards.length * cardWidth > window.innerWidth
        ? `width: ${this.categoryCards.length * cardWidth}px`
        : 'width 100%'
    }
  },

  methods: {}
}
</script>
