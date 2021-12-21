<template lang="pug">
  <Wrapper>
    h2 Examples

    <Base />
    <Required />
    <Sizes />
    <Associate />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Required from './_required.vue';
import Sizes from './_sizes.vue';
import Associate from './_associate.vue';

@Component({
  components: {
    Base,
    Required,
    Sizes,
    Associate
  }
})
export default class Examples extends Vue {}
</script>
