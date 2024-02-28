<template lang="pug">
  div
    h2 Examples
    p.-text
      | To render price, use the class <code>chi-price</code>.
    BaseExample
    <Sizes />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import Sizes from './_sizes.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    Sizes,
  },
})
export default class Examples extends Vue {}
</script>
