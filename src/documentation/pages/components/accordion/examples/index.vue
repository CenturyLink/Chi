<template lang="pug">
  div
    | Example
    <Example1 />
</template>

<script lang="ts">
  import Example1 from './_example1.vue';

  export default {
    components: {
      Example1,
    },

    mounted() {
    }
  };
</script>
