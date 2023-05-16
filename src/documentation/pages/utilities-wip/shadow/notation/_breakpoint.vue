<template lang="pug">
  <ComponentExample title="{breakpoint}" titleSize="h4" id="breakpoint" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
      | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
    ul.-text(slot="example-description")
      li blank - leave blank to apply <code>shadow</code> to all breakpoints.
      li <code>sm</code> - use to apply <code>shadow</code> to sm and larger breakpoints.
      li <code>md</code> - use to apply <code>shadow</code> to ms and larger breakpoints.
      li <code>lg</code> - use to apply <code>shadow</code> to lg and larger breakpoints.
      li <code>xl</code> - use to apply <code>shadow</code> to xl breakpoints.
  </ComponentExample>
    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class Breakpoint extends Vue {}
</script>
