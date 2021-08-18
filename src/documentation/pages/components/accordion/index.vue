<template lang="pug">
  div
    | Accordion
    <Examples />
</template>

<script lang="ts">
  import Examples from './examples/index.vue';

  export default {
    components: {
      Examples,
    },

    mounted() {
    }
  };
</script>
