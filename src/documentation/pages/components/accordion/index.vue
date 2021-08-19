<template lang="pug">
  div
    <TitleBar title="Accordion" description="Accordion is used to toggle between hiding and showing content." />
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
