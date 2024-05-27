<template lang="pug">
h2 Examples
div
  BaseExample
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';

@NuxtComponent({
  components: {
    BaseExample: Base
  },
})
export default class Examples extends Vue {}
</script>
