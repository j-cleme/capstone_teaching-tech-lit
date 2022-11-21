<script setup>
import TeachingContainer from "./components/TeachingContainer.vue";
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
  <div class="container">
    <div class="row">
      <Drawer class="columns-1"/>
  <main class="columns-10 flex justify-center">
    <TeachingContainer :title="sections[0].title" :text-content="sections[0].textContent">
      <template>
        <Menu />
      </template>
    </TeachingContainer>
  </main>
    </div>
  </div>
</template>
