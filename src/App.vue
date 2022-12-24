<script setup>
import TeachingContainer from "./components/TeachingContainer.vue";
import { Menu } from "lucide-vue-next";
import Nav from "./components/Nav.vue";
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
  <Nav />
  <main class="flex flex-col justify-center">
    <TeachingContainer :title="sections[0].title" :text-content="sections[0].textContent">
      <template>
        <Menu />
      </template>
    </TeachingContainer>
  </main>
</template>
