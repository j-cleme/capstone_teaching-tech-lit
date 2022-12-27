<script>
export default {
  data() {
    return {}
  },
  props: {
    navOpen: Boolean,
    href: { type: String, default() { return "#" } },
  },
  methods: {

  }
}
</script>

<template>
  <a class="px-4 py-2 text-lg font-semibold text-neutral-900 duration-100" :class="[navOpen ? '' : 'hidden']"
    :href="href">
    <slot>Lorem Ipsum</slot>
  </a>
</template>