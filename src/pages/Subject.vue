<template>
  <div class="subject">
    <search-bar/>
    <h2 class="subject__title">{{ subject.name }}</h2>
    <p class="subject__description">{{ subject.description }}</p>

    <event-card v-for="(event, index) in subject.events" :key="index" :event="event" />
  </div>
</template>

<script>
import EventCard from 'src/components/EventCard'
import SearchBar from 'src/components/SearchBar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'subject-page',

  components: {
    EventCard,
    SearchBar
  },

  created () {
    this.setSubjectById(this.$route.params.id)
  },

  computed: {
    ...mapGetters('subjects', ['subjects']),

    subject () {
      return this.subjects
    }
  },

  methods: {
    ...mapActions('subjects', ['setSubjects', 'setSubjectById'])
  }

}
</script>