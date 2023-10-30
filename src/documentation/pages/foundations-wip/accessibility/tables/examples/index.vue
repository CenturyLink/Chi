<template lang="pug">
  .chi-grid__container.-pt--3
    <InfoAndRelationships />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InfoAndRelationships from './_info-and-relationships.vue';

@Component({
  components: {
    InfoAndRelationships
  }
})
export default class Examples extends Vue {}
</script>
