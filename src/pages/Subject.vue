<template>
  <div class="subject">
    <search-bar/>
    <h2 class="subject__title">{{ subjects.name }}</h2>
    <p class="subject__description">{{ subjects.description }}</p>

    <event-card v-for="(event, index) in subjects.events" :key="index" :event="event" />
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

  data () {
    return {

    }
  },

  created () {
    this.setSubjectById(Number(this.$route.params.id))
  },

  mounted () {
  },

  computed: {
    ...mapGetters('subjects', ['subjects'])
  },

  methods: {
    ...mapActions('subjects', ['setSubjects', 'setSubjectById'])
  }

}
</script>