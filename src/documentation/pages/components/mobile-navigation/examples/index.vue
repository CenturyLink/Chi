<template lang="pug">
  div
    h2 Examples

    <Interaction />
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
