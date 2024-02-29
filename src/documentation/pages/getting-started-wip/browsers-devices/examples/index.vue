<template lang="pug">
.chi-grid__container.-pt--3
  BrowserSupport
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import BrowserSupport from './_browser-support.vue';

@NuxtComponent({
  components: {
    BrowserSupport,
  },
})
export default class Examples extends Vue {}
</script>
