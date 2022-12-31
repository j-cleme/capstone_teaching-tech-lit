<script setup>
import { VueElement } from 'vue';


</script>

<script>

export default {
  data() {
    return {}
  },
  props: {
    title: String,
    icon: VueElement,
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

<!-- <BlogPost
  v-for="post in posts"
  :key="post.id"
  :title="post.title"
 /> -->


<template>
  <article class="border border-neutral-600 p-4 m-4 grid grid-cols-2 grid-rows-2 items-center justify-center gap-2"
    @click="clickHandler(title)">
    <h1>
      {{ title }}
    </h1>
    <p class="row-span-2">
      {{ textContent }}
    </p>
    <component :is="icon"></component>
  </article>
</template>
