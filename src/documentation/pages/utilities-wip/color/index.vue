<template lang="pug">
  div
    TitleBar(title="Color" description="Use shorthand color utility classes to quickly apply or remove colors.")
    .chi-grid__container.-pt--3
      IconColor
      BackgroundColor
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IconColor from './examples/icon-color/index.vue';
import BackgroundColor from './examples/background-color/index.vue';

@Component({
  components: {
    IconColor,
    BackgroundColor
  }
})
export default class Border extends Vue {}
</script>
