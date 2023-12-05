<template lang="pug">
  div
    <ComponentExample title="Shrink" id="shrink" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use the <code>-flex--shrink*</code> class to toggle a flex item's ability to shrink when its size is larger than its container.
    .-mb--2.-p--3.-d--flex.-show--example(slot="example")
      .-text.-p--2(style="width:100%;") Item
      .-text.-p--2.-flex--shrink1 Shrink Item
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
    </ComponentExample>
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@Component({
  components: {
    SpecificBreakpoints,
  },
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-d--flex">
  <div style="width:100%;">Item</div>
  <div class="-flex--shrink1">Shrink Item</div>
</div>`
      }
    };
  }
})
export default class Shrink extends Vue {}
</script>
