<template lang="pug">
<ComponentExample title="Available Offset Sizes" id="available-offset-sizes" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | Offset sizes, like column sizes, range from <code>-o--1</code>, which
      | takes up ~8.3% of the width to <code>-o--11</code>, which consumes
      | ~91.6% of the row.
  template(#example)
    .-show--example.chi-grid.-mb--3( v-for="item in columns")
      .chi-col(:class="`-o--${item}`" :key="item")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      columns: Array.from({ length: 11 }, (_, i) => i + 1),
    };
  },
})
export default class AvailableOffsetSizes extends Vue {}
</script>
