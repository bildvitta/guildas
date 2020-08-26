<template>
  <div class="slider slider-margin-handler">
    <div class="row flex justify-between items-center arrows-margin-handler q-mb-lg">
      <h2 class="slider__title">{{ sliderTitle }}</h2>
      <div class="slider__arrows" :style='hideArrows' v-if="useArrows">
        <q-icon
          @click="scrollHorizontal('left')"
          name="arrow_circle_up"
          class="slider__arrows--prev-arrow rotate-270 cursor-pointer"
        />
        <q-icon
          @click="scrollHorizontal('right')"
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

  computed: {
    hideArrows () {
      return this.$q.screen.xs && 'display: none;'
    }
  },

  methods: {
    scrollHorizontal (direction) {
      const scrollValue = direction === 'left' ? -370 : 370

      this.sliderElement.scrollTo({
        left: this.sliderElement.scrollLeft + scrollValue,
        behavior: 'smooth'
      })
    }
  }
}
</script>