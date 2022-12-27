<script setup>
import { Menu } from 'lucide-vue-next';
import NavLink from './NavLink.vue'
</script>

<script>
export default {
  data() {
    return { navOpen: false }
  },
  methods: {
    toggleNav() {
      let sidenav = document.getElementById('sidenav');
      if (this.$data.navOpen === true) {
        this.$data.navOpen = false;
        console.log("set navOpen to false")
      } else if (this.$data.navOpen === false) {
        this.$data.navOpen = true;
        console.log("set navOpen to true")
      }
    },
  }
}
</script>

<template>
  <!-- TODO this *should* be 2 components (header and nav) but i am lazy and sloppily combining 
    them is easy and fast. once split, toggleNav() needs to change to properly send info between components. -->
  <header class="bg-neutral-300 sticky w-full h-16 m-0 flex flex-row justify-start items-center">
    <Menu :size="50" @click="toggleNav()" class="mx-2 my-2 md:hover:rotate-90 duration-75 text-neutral-600 " />
    <h1 class="mx-1 md:px-2 py-2 text-lg font-semibold text-neutral-900">Teaching Tech Lit</h1>
  </header>
  <nav
    class="bg-neutral-200 grid grid-cols-1 grid-flow-row auto-rows-max justify-around h-screen duration-100 absolute z-10"
    :class="[navOpen ? 'w-3/4' : 'w-0']" id="sidenav">
    <NavLink :nav-open="navOpen" :href="'/quiztest'">Test Quiz</NavLink>
    <NavLink :nav-open="navOpen" :href="'/'">Lorem Ipsone</NavLink>
    <NavLink :nav-open="navOpen" :href="'/'">Lorem Ipstwo</NavLink>
    <NavLink :nav-open="navOpen" :href="'/'">Lorem Ipsthree</NavLink>
    <NavLink :nav-open="navOpen" :href="'/'">Lorem Ipsfour</NavLink>
  </nav>
</template>
