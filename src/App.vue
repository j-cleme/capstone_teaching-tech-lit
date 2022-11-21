<script setup>
import TeachingModal from "./components/TeachingModal.vue";
import Drawer from "./components/drawer.vue";
import { Menu } from 'lucide-vue-next';

</script>
<script>
export default {
  data() {
    return {
      sections: [
        { id: 1, title: 'Menu Icon', textContent: 'This is a menu icon, sometimes called a "Hamburger Menu" due to its horizontal layers.' },
        { id: 2, title: 'Search Icon', textContent: '' },
        { id: 3, title: 'Embedded Links', textContent: '' }
      ]
    }
  },
  methods: {
    navDrawer() {
      let sidenav = document.getElementById('sidenav');
      sidenav.style.width = "200px";
    }
  }
}

</script>

<template>
  <nav>
    <Menu @click="navDrawer()" />
    <Drawer></Drawer>
  </nav>
  <main>
    <TeachingModal :title="sections[0].title" :text-content="sections[0].textContent">
      <!-- <template #title>Menu Icon</template> -->
      <template>
        <Menu />
      </template>
      <!-- <template #textcontent>This is a menu icon, sometimes called a "Hamburger Menu" due to its horizontal
        layers.</template> -->
    </TeachingModal>
  </main>
</template>

<style scoped>
main {
  display: flex;
  place-items: center;
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20%;
}
</style>
