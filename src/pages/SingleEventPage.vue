<template>
<div>
  <search-bar />
  <div class="image-banner"></div>
  <single-event-details></single-event-details>
</div>
</template>

<script>

import SearchBar from 'src/components/SearchBar'
import SingleEventDetails from 'src/components/SingleEventDetails'

export default {
 name: 'single-event-page',

 components: {
  SearchBar,
  SingleEventDetails
 }
}
</script>

<style>

</style>