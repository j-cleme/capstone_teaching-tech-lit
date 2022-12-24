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
      // alert(title);
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
