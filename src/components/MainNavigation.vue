<template>
  <nav id="header" class="main_nav">
    <img @click="redirectToHome" class="main_nav__logo" src="~assets/img/logo.png" alt="NAVE - Logo"/>

    <ul class="main_nav__link-wrapper">
      <li v-for="link in linksData" :key="link.title" class="main_nav__list-item">
        <router-link class="main_nav__link" :to="link.link" :class="checkPath(link.link)">{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'main-navigation',

  props: {
    linksData: {
      required: true,
      type: Array
    }
  },

  methods: {
    redirectToHome () {
      this.$router.push('/')
    },

    checkPath (path) {
      return this.$route.path.split('/')[1] === path.replace('/', '') && 'active-link'
    }
  }
}
</script>
