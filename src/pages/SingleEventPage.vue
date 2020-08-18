<template>
<div>
  <div class="image-banner"></div>
  <single-event-details></single-event-details>
</div>
</template>

<script>

import SingleEventDetails from 'src/components/SingleEventDetails'

export default {
  name: 'single-event-page',

  components: {
    SingleEventDetails
  }
}
</script>