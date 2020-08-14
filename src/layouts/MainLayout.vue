<template>
  <q-layout view="lHh Lpr lFf" class="container">
    <main-navigation :linksData="linksData" />

    <q-toolbar class="mobile_main_nav text-white q-py-lg q-px-none">
      <div class="container">
        <router-link to="/" class="mobile_main_nav__logo vertical-middle">
          <img class="main_nav__logo" src="~assets/img/logo.png" alt="NAVE - Logo" />
        </router-link>
        <q-btn flat round dense @click="openLeftDrawer()">
          <q-icon name="menu" />
        </q-btn>
      </div>
    </q-toolbar>

    <q-drawer behavior="mobile" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          <img class="mobile_main_nav__logo mobile_main_nav__logo--side_menu q-py-md" src="~assets/img/logo.png" alt="NAVE - Logo"/>
        </q-item-label>
        <EssentialLink v-for="link in linksData" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
import EssentialLink from "components/EssentialLink.vue";
import MainNavigation from "components/MainNavigation.vue";

export default {
  name: "MainLayout",

  components: {
    EssentialLink,
    MainNavigation,
  },

  data () {
    return {
      leftDrawerOpen: false,
      linksData: [
        {
          title: "Home",
          icon: "home",
          link: "/",
        },
        {
          title: "Sobre",
          icon: "school",
          link: "/sobre",
        },
        {
          title: "Cases",
          icon: "grade",
          link: "/cases",
        },
        {
          title: "Eventos",
          icon: "date_range",
          link: "/eventos",
        },
        {
          title: "Contato",
          icon: "email",
          link: "/contato",
        },
      ],
    };
  },

  computed: {
    ...mapGetters("categories", ["categories"]),
  },

  methods: {
		openLeftDrawer () {
			this.leftDrawerOpen = true
		}
	},
}
</script>
