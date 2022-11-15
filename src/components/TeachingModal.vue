<script setup>
import { Menu } from 'lucide-vue-next';

// defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
//   textcontent: {
//     type: String,
//     required: true,
//   }
// });
</script>

<template>
  <article class="teaching-modal">
    <div class="titleContainer">
      <h1>
        <slot name="title"></slot>
      </h1>
      <slot name="icon">
        <Menu />
      </slot>
    </div>
    <p>
      <slot name="textcontent"></slot>
    </p>
  </article>
</template>

<style scoped>
h1 {
  font-weight: 300;
  font-size: 2.6rem;
  top: -10px;
}

article {
  border: 1px solid #ffffff;
  border-radius: 5px;
  padding: 2.5rem;
  background-color: #7777774a;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2.5rem;
}

.titleContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
