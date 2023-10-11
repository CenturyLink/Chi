<template lang="pug">
  div
    <ComponentExample title="Fill" id="fill" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use the <code>-flex--fill</code> class on flexbox items to display as equal widths while taking up all available horizontal space.
    .-mb--2.-p--3.-d--flex.-show--example(slot="example")
      .-text.-p--2.-flex--fill(v-for="i in 3") Item
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
    };
  }
})
export default class Fill extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generateHtml() {
    const content = Array(3).fill(0).map(() => `  <div class="-flex--fill">Item</div>`).join('\n');

    return (
      `<div class="-d--flex">
${content}
</div>`)
  }
}
</script>
