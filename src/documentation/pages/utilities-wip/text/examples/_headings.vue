<template lang="pug">
  <ComponentExample padding="-p--0" title="Text headings" id="text-headings" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use classes <code>-text--h1</code> through <code>-text--h6</code> to match Chi's default heading sizes.
    table.chi-table.-bordered(slot="example")
      thead
        tr
          th.-bt--0.-bl--0.-text(width='20%')
            div Size
          th.-bt--0.-br--0
            div Example
      tbody
        tr(v-for="({ name, font, line }) in headings")
          td.-w--30.-w-md--20(width='20%')
            code -text--{{ name }}
            dl.-text.-text--xs.-mt--2
              dt.-text--bold Font-size:
              dd {{ font }}
              dt.-text--bold.-mt--1 Line-height:
              dt {{ line }}
          td
            p.-px--2(:class="`-text--${ name }`")
              | The quick brown fox jumps over the lazy dog.
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
        }
      ]
    };
  },
})
export default class Headings extends Vue {
  headings = [
    { name: 'h1', font:'48px (3rem)', line:'64px (4rem)' },
    { name: 'h2', font:'32px (2rem)', line:'48px (3rem)' },
    { name: 'h3', font:'24px (1.5rem)', line:'32px (2rem)' },
    { name: 'h4', font:'18px (1.125rem)', line:'32px (2rem)' },
    { name: 'h5', font:'16px (1rem)', line:'24px (1.5rem)' },
    { name: 'h6', font:'14px (0.875rem)', line:'24px (1.5rem)' }
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.headings
      .map(({ name }) => `<p class="-text--${ name }">The quick brown fox jumps over the lazy dog.</p>`)
      .join('\n');
  }
}
</script>
