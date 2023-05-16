<template lang="pug">
  div
    <TitleBar title="Shadow" description="Use shadow utility classes to assist in creating a visual hierarchy." />
    <Notation />
    <Examples />
    <SASS />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Notation from './notation/index.vue';
import Examples from './examples/index.vue';
import SASS from './sass/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Shadow'
    }
  },
  components: {
    Notation,
    Examples,
    SASS
  }
})
export default class ShadowUtility extends Vue {}
</script>
