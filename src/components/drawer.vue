<script setup>
import { Menu } from 'lucide-vue-next';
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
        // sidenav.style.transform = "translateX(-200px)";
        sidenav.classList.remove("-translate-x-full")
        this.$data.navOpen = false;
      }
      if (this.$data.navOpen === false) {
        // sidenav.style.transform = "translateX(0px)";
        sidenav.classList.add("-translate-x-full")
        this.$data.navOpen = true;
      }
    },
  }
}
</script>

<template>
  <nav class="columns-1 flex justify-start my-4 bg-black">
    <Menu @click="toggleNav()" color="orange" />
    <ul class="drawer-container -translate-x-full" id="sidenav">
      <li><a href="#">Lorem Ipsum</a></li>
      <li><a href="#">Lorem Ipsum</a></li>
      <li><a href="#">Lorem Ipsum</a></li>
      <li><a href="#">Lorem Ipsum</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* .drawer-container {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    position: fixed;
    background-color: #111;
    width: 200px;
    transform: translateX(-200px);
    transition: 0.5s;
} */

.drawer-container a {
  text-decoration: none;
  display: block;
  padding: 15px;
  color: white;
}


.drawer-container a:hover {
  background-color: #F76902;
}
</style>