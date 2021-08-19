<template lang="pug">
  header.docs-titlebar
    .chi-grid__container
      <h1 class="docs-titlebar__title">{{title}}</h1>
      .docs-titlebar__description(v-if="description") {{description}}
</template>

<script lang="ts">
export default {
  props: ['title', 'description'],
  created() {
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<style></style>
