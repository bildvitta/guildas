<template>
  <div>
    <div class="image-banner" :style="'background-image:url(' + eventImage + ');'"></div>
    <single-event-details :event='events'/>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import SingleEventDetails from 'src/components/SingleEventDetails'

export default {
  name: 'single-event-page',

  components: {
    SingleEventDetails
  },

  created () {
    this.setEventById(this.$route.params.id)
  },

  computed: {
    ...mapGetters('events', ['events']),

    eventImage () {
      return 'http://104.131.88.91' + this.events?.avatar?.medium
    }
  },

  methods: {
    ...mapActions('events', ['setEventById'])
  }
}
</script>