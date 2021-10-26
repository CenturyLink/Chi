<template lang="pug">
  div
    h2 Examples
    div(slot="example-description")
      p.-text To render a file input, apply the class <code>chi-file-input</code>
        | to an <code>input type="file"</code> and add a label next to it.
    div
      <Base />
      <Disabled />    
      <Sizes />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Disabled from './_disabled.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    Disabled,
    Sizes,
  }
})
export default class FileInputExamples extends Vue {}
</script>
