<template lang="pug">
  div
    h2 Examples
    <Complex />

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Complex from './_complex.vue';


@Component({
  components: {
    Complex,
  }
})
export default class Examples extends Vue {}
</script>
