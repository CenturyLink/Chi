<template lang="pug">
  div
    <TitleBar title="Error 404" description="Basic 404 level error page template. Indicates a client error, such as a
    |  misspelled URL." />
    .chi-grid__container.-pt--3
      <Error />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Error from './_error.vue';
@Component({
  head() {
    return {
      title: 'Chi - Error-404'
    }
  },
  components: {
    Error
  },
})
export default class Error404 extends Vue {}
</script>
