<template lang="pug">
  <Wrapper>
    h2 Examples
    p.-text
      | To render price, use the class <code>chi-price</code>.

      <Base />
      <Sizes />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Sizes from './_sizes.vue';

@Component({
  components: {
    Base,
    Sizes,
  }
})
export default class Examples extends Vue {}
</script>
