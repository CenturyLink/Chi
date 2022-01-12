<template lang="pug">
  <Wrapper>
    h2 Examples

    <Base />
    <SemanticStates />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Base from './_base.vue';
import SemanticStates from './_semantic_states.vue';

@Component({
  components: {
    Base,
    SemanticStates
  }
})
export default class Examples extends Vue {}
</script>
