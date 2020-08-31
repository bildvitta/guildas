<template>
  <div class="subject">
    <search-bar/>
    <h2 class="subject__title text-uppercase q-mb-md">{{ subject.name }}</h2>
    <p class="subject__description">{{ subject.description }}</p>

    <div class="flex q-mt-xl">
      <div class="slider__item q-mb-md" v-for="(event, index) in subject.events" :style="marginBottomIsNull" :key="`event-${index}`">
        <event-card :key="index" :event="event"/>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from 'src/components/EventCard'
import SearchBar from 'src/components/SearchBar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'subject-page',

  data () {
    return {
      windowSize: ''
    }
  },

  components: {
    EventCard,
    SearchBar
  },

  created () {
    this.setSubjectById(this.$route.params.id)

    this.windowSize = window.innerWidth
    window.addEventListener('resize', this.checkWindowSize)
  },

  computed: {
    ...mapGetters('subjects', ['subjects']),

    subject () {
      return this.subjects
    },

    marginBottomIsNull () {
      if (this.$route.name != 'Subject') {
        return false
      }

      return this.windowSize < 750 ? 'margin-left: 0; margin-right: 0' : ''
    }
  },

  methods: {
    ...mapActions('subjects', ['setSubjects', 'setSubjectById']),

    checkWindowSize () {
      this.windowSize = window.innerWidth
    }
  }

}
</script>

<style lang="scss">
  .subject {

    &__title {
      font-family: 'Press Start 2P', cursive;
      font-size: 20px;
    }

    &__description { 
      max-width: 650px;
    }
  }
</style>