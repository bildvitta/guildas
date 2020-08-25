<template>
  <div class="search_wrapper row q-mb-xl margin-fix-header">
    <q-input class="col-9" borderless v-model="search" @keyup.enter="searchEvents()" placeholder="Pesquise pelo nome do Evento">
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>
    <q-btn class="col-3" label="Procurar" flat @click="searchEvents()" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'search-bar',

  data () {
    return {
      search: ''
    }
  },

  computed: {
    isEvents () {
      return this.$route.name === 'Events'
    }
  },

  methods: {
    ...mapActions('events', ['setEvents']),
    ...mapActions('subjects', ['filterEventsOnSubjects']),

  	searchEvents () {
      this.isEvents && this.setEvents(this.search, this.$route.name) || this.filterEventsOnSubjects(this.search, this.$route.name)
    
      const firstEventSlider = document.querySelector('.events-slider-box')

      if (firstEventSlider) {
        const heightToScroll = firstEventSlider.scrollHeight + firstEventSlider.clientHeight
        scroll({
          top: heightToScroll,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>
