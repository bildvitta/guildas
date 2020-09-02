<template>
  <div class="an-slider relative-position" :class="expandedClass">
    <div
      ref="slider"
      class="an-slider__container"
      :id="sliderSlug"
      :class="expandedContainerClass"
      v-on="$listeners"
      @mousedown="mouseDown"
      @mousemove="mouseMove"
    >
      <div ref="sliderContent" class="an-slider__content q-mb-sm">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  props: {
    expanded: {
      type: Boolean
    },

    animationOnScroll: {
      type: Boolean,
      default: true
    },

    sliderSlug: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      start: 1,
      difference: 0,
      drag: false,
      hideBar: false,
      element: null
    }
  },

  computed: {
    expandedClass () {
      return this.expanded ? 'an-slider--expanded' : 'full-width'
    },

    expandedContainerClass () {
      return this.expanded ? 'an-slider__container--expanded' : ''
    }
  },

  mounted () {
    this.element = this.$refs.slider
  },

  created () {
    // Polyfill for scrolling
    window.__forceSmoothScrollPolyfill__ = true
    smoothscroll.polyfill()
    window.addEventListener('mouseup', this.mouseUp)
  },

  destroyed () {
    window.removeEventListener('mouseup', this.mouseUp)
  },

  methods: {
    mouseDown (event) {
      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.start = event.clientX + this.element.scrollLeft
      this.difference = 0
      this.drag = true
    },

    mouseMove (event) {
      if (!this.drag) {
        return null
      }

      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.difference = this.start - (event.clientX + this.element.scrollLeft)
      this.element.scrollLeft += this.difference
    },

    mouseUp (event) {
      let tick = 1

      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.drag = false

      const animate = () => {
        const step = Math.sin(tick)

        if (step <= 0) {
          this.difference = 0
          window.cancelAnimationFrame(animate)
        } else {
          this.element.scrollLeft += this.difference * step
          tick -= 0.02
          window.requestAnimationFrame(animate)
        }
      }

      this.animationOnScroll && animate()
    }
  }
}
</script>

<style lang='scss'>
.an-slider {
  overflow: hidden;
  overflow-x: auto;
  width: 100%;

  &__container {
    cursor: grab;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    overflow-x: auto;
    position: relative;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0 !important;
    }

    &--expanded {
      padding: 0 20px;
    }
  }

  &__content {
    display: flex;
    height: auto;
  }

  &--expanded {
    margin-left: -(#{20px});
    margin-right: -(#{20px});
    width: auto;
  }
}
</style>
