<template>
  <router-link :to="`/assunto/${subject.id}`">
    <q-avatar class="slider__item--rounded">
      <!-- <img class="block" :src="subjectImage" /> -->
      <div class="subject-card__image" :style="'background-image: url(' + subjectImage + ');'"/>
    </q-avatar>
    <p class="text-center block q-mt-sm slider__item__subject">{{ subject.name }}</p>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'subject-card',

  props: {
    subject: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  computed: {
    subjectImage () {
      return this.subject.image.small
    }
  }
}
</script>

<style lang="scss">
  .subject-card{
    &__image {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

</style>