<template lang="pug">
  <ComponentExample padding="-p--0" title="Brand" id="text-brand" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Brand text colors reinforce Lumen's brand. Use primary and secondary as accents and body and light as neutrals.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        div.-p--1.-p-sm--2.-text--center
          p.-text.text--body
            | -text--body
        div.-p--1.-p-sm--2.-text--center
          p.-text.text--primary
            | -text--primary
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        div.-p--1.-p-sm--2.-text--center
          p.-text.-text--secondary
            | -text--secondary
        div.-p--1.-p-sm--2.-text--center
          p.-text.-text--light
            | -text--light
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
export default class Brand extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<!-- For light backgrounds -->\n' +
        '<p class="-text--body">-text--body</p>\n' +
        '<p class="-text--primary">-text--primary</p>\n' +
        '<!-- For dark backgrounds -->\n' +
        '<p class="-text--secondary">-text--secondary</p>\n' +
        '<p class="-text--light">-text--light</p>'
    };
  }
}
</script>
