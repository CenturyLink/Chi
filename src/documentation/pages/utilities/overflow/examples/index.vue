<template lang="pug">
  .chi-grid__container.-pt--3
    h2 Examples
    <Auto />
    <Hidden />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Auto from './_auto.vue';
import Hidden from './_hidden.vue';

@Component({
  components: {
    Auto,
    Hidden,
  }
})

export default class Examples extends Vue {}
</script>
