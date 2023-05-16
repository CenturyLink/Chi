<template lang="pug">
  .chi-grid__container.-pt--3
    <ComponentExample title="Examples" id="examples" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" />
    <Default />
    <Responsive />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Default from './_default.vue'
import Responsive from './_responsive.vue'

@Component({
  components: {
    Default,
    Responsive
  }
})
export default class Examples extends Vue {}
</script>
