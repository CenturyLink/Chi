<template lang="pug">
  .chi-grid__container.-pt--3
    <Error />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Error from './_error.vue';

@Component({
  components: {
    Error
  }
})
export default class Examples extends Vue {}
</script>
