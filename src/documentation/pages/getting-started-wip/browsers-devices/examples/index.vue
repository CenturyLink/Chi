<template lang="pug">
  .chi-grid__container.-pt--3
    <BrowserSupport />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BrowserSupport from './_browser-support.vue';

@Component({
  components: {
    BrowserSupport
  }
})
export default class Examples extends Vue {}
</script>
