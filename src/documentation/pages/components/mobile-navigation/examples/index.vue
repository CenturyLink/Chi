<template lang="pug">
  <Wrapper>
    h2 Examples

    <Interaction />
  </Wrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Interaction from './_interaction.vue';

@Component({
  components: {
    Interaction
  }
})
export default class Examples extends Vue {}
</script>
