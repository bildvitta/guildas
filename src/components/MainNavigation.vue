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

<style lang="scss">
  .main_nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    
    @media (max-width: 768px) { display: none; }

    &__logo{ cursor: pointer; }

    &__link-wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    &__list-item + &__list-item { margin-left: 60px; }

    &__link {
      color: #1b162d;
      transition: color 0.2s linear;
      font-family: "Press Start 2P", cursive;
      font-size: 10px;

      &:hover { color: $medium-purple; }
    }

    .active-link {
      color: $medium-purple;
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
      background-color: $medium-purple;
      display: block;
      animation-name: animateActiveLink;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }

  @keyframes animateActiveLink {
    0% { opacity: 0; }

    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }
  }
</style>
