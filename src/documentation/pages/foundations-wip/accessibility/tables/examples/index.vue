<template lang="pug">
.chi-grid__container.-pt--3
  <InfoAndRelationships />
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import InfoAndRelationships from './_info-and-relationships.vue';

@NuxtComponent({
  components: {
    InfoAndRelationships,
  },
})
export default class Examples extends Vue {}
</script>
