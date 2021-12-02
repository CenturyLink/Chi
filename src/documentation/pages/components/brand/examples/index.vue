<template lang="pug">
  <Wrapper>
    h2 Examples
    p.-text
      | The Brand component is primarily used in application headers to showcase
      | Lumen brands and function as a home navigation link. Examples below have been
      | placed in a <code>chi-link</code> to facilitate this use case, but note,
      | placing in a <code>chi-link</code> tag is not required.

    <Base />
    <Inverse />
    <White />
    <Black />
    <Sizes />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Inverse from './_inverse.vue';
import White from './_white.vue';
import Black from './_black.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    Inverse,
    White,
    Black,
    Sizes
  }
})
export default class Examples extends Vue {}
</script>
