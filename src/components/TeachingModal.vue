<script setup>
import { Menu } from 'lucide-vue-next';

</script>
<script>

export default {
  data() {
    return {}
  },
  props: {
    title: String,
    textContent: String,
  },
  methods: {
    clickHandler(title) {
      // happens when you click on the icon(?) and the relevant element needs to appear elsewhere
      alert(title);
    }
  }

}
</script>

<template>
  <article class="teaching-modal" @click="clickHandler(title)">
    <h1>
      <!-- <slot name="title"></slot> -->
      {{ title }}
    </h1>
    <p>
      {{ textContent }}
      <!-- <slot name="textcontent"></slot> -->
    </p>
    <div class="iconSlot">

      <slot name="icon">
        <Menu />
      </slot>
    </div>
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

article * {
  display: flex;
  place-items: center;
  place-content: center;
}

.iconSlot {
  transform: scale(2.5);
}
</style>
