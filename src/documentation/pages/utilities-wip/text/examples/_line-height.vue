<template lang="pug">
  <ComponentExample padding="-p--0" title="Text line height" id="text-line-height" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use shorthand utility classes to control an element's line-height. Line height sizes are equal to <code>$base-unit * {size}</code>
      | and illustrated in green in the example below.
    .-m--3.-show--example(slot="example")
        p.-text.-pl--1(v-for="type in lineHeights", :class="type") {{ type }}
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class LineHeight extends Vue {
  lineHeights = ['-lh--1', '-lh--2', '-lh--3', '-lh--4', '-lh--5', '-lh--6', '-lh--7', '-lh--8', '-lh--9'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.$data.lineHeights
      .map((lineHeight: string) => `<p class="-text ${ lineHeight }">${ lineHeight }</p>`)
      .join('\n');
  }
}
</script>
