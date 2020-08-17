<template>
  <div>
    <search-bar />
    <carousel />

    <slider slider_title="Fica Ligado!">
      <div class="slider__item">
        <q-avatar class="slider__item--rounded">
          <img class="block" src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <p class="text-center block q-mt-sm slider__item__subject">Assunto</p>
      </div>
    </slider>

    <slider slider_title="Categoria 1">
     <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
      <event-card :event="event"></event-card>
     </div>
    </slider>

    <slider slider_title="Categoria 2">
     <div class="slider__item" v-for="(event, index) in eventCards" :key="index">
      <event-card :event="event"></event-card>
     </div>
    </slider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from "components/SearchBar.vue";
import Carousel from "components/Carousel.vue";
import Slider from "components/Slider.vue";
import EventCard from "components/EventCard.vue";

export default {
  name: "events-page",

  components: {
    SearchBar,
    Carousel,
    Slider,
    EventCard
  },

  data () {
    return {
      slide: 1,
    };
  },

  computed: {
    ...mapGetters('events', ['eventCards']),

   setCategorySliderWidth: function () {
    const cardWidth = 325

    let categoryWidth

    if (this.categoryCards.length * cardWidth > window.innerWidth) {
     categoryWidth = 'width: ' + this.categoryCards.length * cardWidth + 'px'
    } else {
     categoryWidth = 'width: 100%'
    }

    return categoryWidth
   }
  },

  methods: {
   checkCategoryCardSize () {
    const cardWidth = 325

    return 
   }
  }
};
</script>
