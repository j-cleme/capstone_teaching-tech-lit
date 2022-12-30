<script setup>
import TeachingContainer from "./components/TeachingContainer.vue";
import { BeanOff, Menu, Search } from "lucide-vue-next";
import Nav from "./components/Nav.vue";
</script>

<script>
export default {
  data() {
    return {
      sections: [
        { title: "Menu Icon", icon: "Menu", textContent: "This is a menu icon, sometimes called a \"Hamburger Menu\" due to its horizontal layers." },
        { title: "Search Icon", icon: "Search", textContent: "This is a search icon, indicating a searchable field." },
        { title: "Bean Icon", icon: "BeanOff", textContent: "This indicates that your bean has been disabled." }
      ]
    };
  },
  methods: {}
}

</script>

<template>
  <Nav />
  <main class="flex flex-col justify-center">
    <TeachingContainer :title="sections[0].title" :text-content="sections[0].textContent">
      <Menu />
    </TeachingContainer>
    <TeachingContainer :title="sections[1].title" :text-content="sections[1].textContent">
      <Search />
    </TeachingContainer>
    <TeachingContainer :title="sections[2].title" :text-content="sections[2].textContent">
      <BeanOff />
    </TeachingContainer>
  </main>
</template>
