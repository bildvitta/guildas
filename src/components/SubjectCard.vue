<template>
  <router-link :to="`/assunto/${subject.id}`">
    <q-avatar class="subject-card slider__item--rounded">
      <div class="subject-card__image" :style="subjectImage"/>
    </q-avatar>
    <p class="text-center block q-mt-sm slider__item__subject text-darker-purple">{{ subject.name }}</p>
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
      return `background-image: url(${this.subject.image.small});`
    }
  }
}
</script>

<style lang="scss">
  .subject-card{
    box-shadow: $shadow-purple;
    transition: all .3s linear;

    &__image {
      width: 100%;
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
</style>