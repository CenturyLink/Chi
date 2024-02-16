<template lang="pug">
  div
    <ComponentExample title="Shrink" id="shrink" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    template(#example-description)
      p.-text Use the <code>-flex--shrink*</code> class to toggle a flex item's ability to shrink when its size is larger than its container.
    template(#example)
      .-mb--2.-p--3.-d--flex.-show--example
        .-text.-p--2(style="width:100%;") Item
        .-text.-p--2.-flex--shrink1 Shrink Item
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
    </ComponentExample>
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@NuxtComponent({
  components: {
    SpecificBreakpoints,
  },
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-d--flex">
  <div style="width:100%;">Item</div>
  <div class="-flex--shrink1">Shrink Item</div>
</div>`,
      },
    };
  },
})
export default class Shrink extends Vue {}
</script>
