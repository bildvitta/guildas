<template>
  <q-layout view="hHh LpR fFf" class="container">
    <main-navigation :linksData="linksData" />

    <q-toolbar :class='showMobileNav' class="mobile_main_nav text-white q-py-lg q-px-none">
      <div class="container">
        <router-link to="/" class="mobile_main_nav__logo vertical-middle">
          <img class="main_nav__logo" src="~assets/img/logo.png" alt="NAVE - Logo" />
        </router-link>
        <q-btn flat round dense @click="openLeftDrawer">
          <q-icon name="menu" />
        </q-btn>
      </div>
    </q-toolbar>

    <q-drawer
      behavior="mobile"
      :overlay="false"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :no-swipe-open="noSwipeOpen"
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          <img
            class="mobile_main_nav__logo mobile_main_nav__logo--side_menu q-py-md"
            src="~assets/img/logo.png"
            alt="NAVE - Logo"
          />
        </q-item-label>
        <EssentialLink v-for="link in linksData" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <app-footer></app-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import EssentialLink from 'components/EssentialLink.vue'
import MainNavigation from 'components/MainNavigation.vue'
import AppFooter from 'components/Footer.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    MainNavigation,
    AppFooter
  },

  data () {
    return {
      leftDrawerOpen: false,
      linksData: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Sobre',
          icon: 'school',
          link: '/sobre'
        },
        {
          title: 'Cases',
          icon: 'grade',
          link: '/cases'
        },
        {
          title: 'Eventos',
          icon: 'date_range',
          link: '/eventos'
        },
        {
          title: 'Contato',
          icon: 'email',
          link: '/contato'
        }
      ]
    }
  },

  computed: {
    ...mapGetters('categories', ['categories']),

    showMobileNav () {
      return this.$q.screen.lt.md && 'block'
    },

    noSwipeOpen () {
      return this.$q.screen.gt.sm
    }
  },

  methods: {
    openLeftDrawer () {
      this.leftDrawerOpen = true
    }
  }
}
</script>
