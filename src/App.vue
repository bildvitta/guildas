<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CategoriesAPI from 'src/services/categories/categories-api'

export default {
  name: "App",
  mounted() {
    this.setCategories()
    this.setEvents()
    this.setSubjects()
  },
  computed: {
    ...mapGetters('categories', ['categories'])
  },
  methods: {
    ...mapActions('categories', ['setCategories']),
    ...mapActions('events', ['setEvents']),
    ...mapActions('subjects', ['setSubjects']),
  }
};
</script>
