<template lang="pug">
  <ComponentExample title="{size}" titleSize="h4" id="size" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" >
    ul.-text(slot="example-description")
      li <code>0</code> - use to set <code>box-shadow</code> to <code>none</code>
      li <code>1</code> - use to set <code>box-shadow</code> to <code>1px</code>
      li <code>2</code> - use to set <code>box-shadow</code> to <code>4px</code>
      li <code>3</code> - use to set <code>box-shadow</code> to <code>6px</code>
      li <code>4</code> - use to set <code>box-shadow</code> to <code>8px</code>
      li <code>5</code> - use to set <code>box-shadow</code> to <code>12px</code>
  </ComponentExample>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Size extends Vue {}
</script>
