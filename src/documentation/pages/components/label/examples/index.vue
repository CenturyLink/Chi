<template lang="pug">
  <Wrapper>
    h2 Examples

    <Base />
    <Required />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import Required from './_required.vue';

@Component({
  components: {
    Base,
    Required
  }
})
export default class Examples extends Vue {}
</script>
