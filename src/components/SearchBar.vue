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

  methods: {
    ...mapActions('events', ['filterEvents']),
    ...mapActions('subjects', ['filterEventsOnSubjects']),

  	searchEvents () {
      if (this.$route.name === 'Events') {
        this.filterEvents(this.search, this.$route.name)
      } else if (this.$route.name === 'Subject') {
        this.filterEventsOnSubjects(this.search, this.$route.name)
      }
    
      const firstEventSlider = document.querySelector('.events-slider-box')

      if  (firstEventSlider) {
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
