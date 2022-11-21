<script setup>
import TeachingModal from "./components/TeachingModal.vue";
</script>

<template>
  <main>
    <TeachingModal>
      <template #title>Menu Icon</template>
      <template #textcontent>This is a menu icon, sometimes called a "Hamburger Menu" due to its horizontal
        layers.</template>
    </TeachingModal>
  </main>
</template>

<style scoped>
main {
  display: flex;
  place-items: center;
}
</style>
