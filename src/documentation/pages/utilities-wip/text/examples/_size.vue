<template lang="pug">
  <ComponentExample padding="-p--0" title="Text size" id="text-size" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Text size supports the following sizes: <code>-text--2xs</code>, <code>-text--xs</code>, <code>-text--sm</code>, <code>-text--md</code>,
      | <code>-text--lg</code>, and <code>-text--xl</code>. The default size is <code>-text--md</code>.
    table.chi-table.-bordered(slot="example")
      thead
        tr
          th.-bt--0.-bl--0.-text(width='20%')
            | Size
          th.-bt--0.-br--0
            | Example
      tbody
        tr(v-for="(size, index) in sizes")
          td.-bl--0.-text(width='20%', :class="index === sizes.length - 1 ? '-bb--0' : ''")
            code {{`-text--${ size.size }`}}
            dl.-text.-text--xs.-mt--2
              dt.-text--bold Font-size:
              dd {{`${ size.font }`}}
              dt.-text--bold.-mt--1 Line-height:
              dt {{`${ size.line }`}}
          td.-br--0(:class="index === sizes.length - 1 ? '-bb--0' : ''")
            p(:class="`-text--${ size.size }`")
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
        },
      ],
    };
  },
})
export default class Size extends Vue {
  sizes = [
    { size: 'xl', font:'18px (1.125rem)', line:'28px (1.75rem)' },
    { size: 'lg', font:'16px (1rem)', line:'24px (1.5rem)' },
    { size: 'md', font:'14px (0.875rem)', line:'24px (1.5rem)' },
    { size: 'sm', font:'13px (0.8125rem)', line:'20px (1.25rem)' },
    { size: 'xs', font:'12px (0.75rem)', line:'16px (1rem)' },
    { size: '2xs', font:'11px (0.6875rem)', line:'16px (1rem)' }
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.sizes
      .map(size => `<p class="-text--${ size.size }">The quick brown fox jumps over the lazy dog.</p>`)
      .join('\n');
  }
}
</script>
