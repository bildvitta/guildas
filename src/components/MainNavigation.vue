<template>
  <nav id="header" class="main_nav flex items-center justify-between" :class="hideMainNav">
    <img @click="redirectToHome" class="main_nav__logo cursor-pointer" src="~assets/img/logo.png" alt="NAVE - Logo"/>

    <ul class="main_nav__link-wrapper flex items-center">
      <li v-for="link in linksData" :key="link.title" class="main_nav__list-item">
        <router-link class="main_nav__link text-darker-purple" :to="link.link" :class="checkPath(link.link)">{{ link.title }}</router-link>
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

  computed: {
    hideMainNav () {
      return this.$q.screen.lt.md && 'hidden'
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

<style lang="scss">
  .main_nav {
    margin-bottom: 50px;

    &__list-item + &__list-item { 
      margin-left: 60px;
    }

    &__link {
      transition: color 0.2s linear;
      font-family: "Press Start 2P", cursive;
      font-size: 10px;

      &:hover {
        color: $text-medium-purple;
      }
    }

    .active-link {
      color: $text-medium-purple;
      position: relative;
    }

    .active-link::after {
      position: absolute;
      left: 50%;
      margin-top: 2px;
      transform: translateX(-50%) translateY(10px);
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: $bg-medium-purple;
      display: block;
      animation-name: animateActiveLink;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }

  @keyframes animateActiveLink {
    0% { 
      opacity: 0;
    }

    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }
  }
</style>
