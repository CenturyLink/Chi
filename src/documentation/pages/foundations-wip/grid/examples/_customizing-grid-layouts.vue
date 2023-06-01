<template lang="pug">
  <ComponentExample title="Customizing Grid Layouts" titleSize="h3" id="customizing-grid-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example") 
      | While automatic layout suits many use cases, you will likely need to 
      | create more specific and predictable layouts based on your requirements.
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class CustomizingGridLayout extends Vue {}
</script>
