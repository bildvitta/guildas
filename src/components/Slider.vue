<template>
  <div class="slider slider-margin-handler">
    <div class="row flex justify-between items-center arrows-margin-handler q-mb-lg">
      <h2 class="slider__title">{{ sliderTitle }}</h2>
      <div class="slider__arrows" v-if="useArrows">
        <q-icon
          @click="scrollLeft($event)"
          name="arrow_circle_up"
          class="slider__arrows--prev-arrow rotate-270 cursor-pointer"
        />
        <q-icon
          @click="scrollRight($event)"
          name="arrow_circle_up"
          class="slider__arrows--next-arrow rotate-90 cursor-pointer q-ml-sm"
        />
      </div>
    </div>

    <an-slider :sliderSlug="sliderSlug">
      <slot />
    </an-slider>
  </div>
</template>

<script>
import AnSlider from 'components/AnSlider'

export default {
  name: 'slider',

  data () {
    return {
      sliderElement: null
    }
  },

  props: {
    sliderTitle: {
      type: String,
      required: true
    },

    sliderSlug: {
      type: String,
      default: ''
    },

    useArrows: {
      type: Boolean,
      default: true
    }
  },

  components: {
    AnSlider
  },

  mounted () {
    this.sliderElement = document.getElementById(this.sliderSlug)
  },

  methods: {
    scrollLeft () {
      this.sliderElement.scrollTo({
        left: this.sliderElement.scrollLeft - 370,
        behavior: 'smooth'
      })
    },

    scrollRight () {
      this.sliderElement.scrollTo({
        left: this.sliderElement.scrollLeft + 370,
        behavior: 'smooth'
      })
    }
  }
}
</script>