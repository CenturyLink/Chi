<template lang="pug">
  div
    h2 Examples

    <Interaction />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Interaction from './_interaction.vue';

@NuxtComponent({
  components: {
    Interaction,
  },
})
export default class Examples extends Vue {}
</script>
