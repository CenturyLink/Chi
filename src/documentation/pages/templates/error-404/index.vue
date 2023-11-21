<template lang="pug">
  div
    <TitleBar title="Error 404" description="Basic 404 level error page template. Indicates a client error, such as a misspelled URL." />
    <Examples />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Examples from './examples/index.vue';

@Component({
  head() {
    return {
      title: 'Chi - Error-404'
    }
  },
  components: {
    Examples
  },
})
export default class Error404 extends Vue {}
</script>
