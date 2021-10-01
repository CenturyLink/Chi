<template lang="pug">
  div
    h2 Examples
    p.-text
      | The Brand component is primarily used in application headers to showcase
      | Lumen brands and function as a home navigation link. Examples below have been
      | placed in a <code>chi-link</code> to facilitate this use case, but note,
      | placing in a <code>chi-link</code> tag is not required.

    div
      <BaseExample />
      <InverseExample />
      <WhiteExample />
      <BlackExample />
      <SizesExample />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseExample from './_base.vue';
import InverseExample from './_inverse.vue';
import WhiteExample from './_white.vue';
import BlackExample from './_black.vue';
import SizesExample from './_sizes.vue';

@Component({
  components: {
    BaseExample,
    InverseExample,
    WhiteExample,
    BlackExample,
    SizesExample
  }
})
export default class BrandExamples extends Vue {}
</script>
