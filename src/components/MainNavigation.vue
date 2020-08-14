<template>
  <nav class="main_nav">
    <router-link to="/">
      <img class="main_nav__logo" src="~assets/img/logo.png" alt="NAVE - Logo" />
    </router-link>

    <ul class="main_nav__link-wrapper">
      <li v-for="link in linksData" :key="link.title" class="main_nav__list-item">
        <router-link
          class="main_nav__link"
          :to="link.link"
          :class="checkPath(link.link) ? 'active-link' : ''"
        >{{ link.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "main-navigation",

  props: {
    linksData: {
      required: true,
    },
  },

  methods: {
    checkPath(path) {
      if (this.$route.path === path) return true;
      return false;
    },
  },
};
</script>

<style>
</style>