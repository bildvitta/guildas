<template>
  <div class="search_wrapper row q-mb-xl margin-fix-header relative-position">
    <q-input class="col-9 q-px-lg" borderless v-model="search" @keyup.enter="searchEvents()" placeholder="Pesquise pelo nome do Evento">
      <template v-slot:prepend>
        <q-icon name="search" color="strong-pink"/>
      </template>
    </q-input>
    <q-btn class="col-3 bg-medium-purple text-bold text-white absolute" label="Procurar" flat @click="searchEvents()" />
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
      this.$router.push({ query: { name_contains: this.search } }) 

      this.isEvents && this.setEvents(this.$route.query) || this.filterEventsOnSubjects(this.$route.query)
    
      this.slideToBottom()
    },

    slideToBottom () {
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

<style lang="scss">
  .search_wrapper {
    box-shadow: 0px 3px 6px #7f2bed26;
    border-radius: 10px;

    .q-input {

      .q-field__native { 
        color: $text-medium-gray;
      }
    }

    .q-field__marginal,
    .q-field__control { 
      height: auto;
    }

    .q-btn {
      text-transform: none;
      font-size: 14px;
      padding: 2px 0;
      top: 0;
      right: 0;
      border-radius: 10px;
      box-shadow: none;
    }

    .q-btn__wrapper { 
      box-shadow: none;
    }
  }
</style>
