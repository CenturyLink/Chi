<template lang="pug">
  div(v-if="docs")
    h2 Web Component
    <PropertiesGenerator tag="chi-badge"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      docs: Vue.prototype.$chiDocs
    };
  }
})
export default class Properties extends Vue {}
</script>
