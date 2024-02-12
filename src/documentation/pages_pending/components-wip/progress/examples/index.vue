<template lang="pug">
  div
    h2 Examples

    BaseExample
    <SemanticStates />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import Base from './_base.vue';
import SemanticStates from './_semantic_states.vue';

@NuxtComponent({
  components: {
    BaseExample: Base,
    SemanticStates,
  },
})
export default class Examples extends Vue { }
</script>
