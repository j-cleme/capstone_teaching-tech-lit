<script setup>
import TeachingModal from "./components/TeachingModal.vue";
import Drawer from "./components/drawer.vue";
import { Menu } from "lucide-vue-next";
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
  }
}

</script>

<template>
  <Drawer />
  <main class="columns-10 flex justify-center">
    <TeachingModal :title="sections[0].title" :text-content="sections[0].textContent">
      <template>
        <Menu />
      </template>
    </TeachingModal>
  </main>
</template>
