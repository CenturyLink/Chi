<template lang="pug">
  div
    TitleBar(title="Overflow" description="Use to change how content overflows an element.")
    .chi-grid__container.-pt--3
      Examples
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  components: {
    Examples
  }
})
export default class Overflow extends Vue {}
</script>
