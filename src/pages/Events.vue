<template>
  <div>
    <search-bar />
    <carousel />
  </div>
</template>

<script>
import SearchBar from "components/SearchBar.vue";
import Carousel from "components/Carousel.vue";

export default {
  name: "events-page",

  components: {
    SearchBar,
    Carousel,
  },

  data () {
    return {
      slide: 1,
    };
  },
}
</script>
