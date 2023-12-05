<template lang="pug">
  <ComponentExample padding="-p--0" title="Brand" id="text-brand" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Brand text colors reinforce Lumen's brand. Use primary and secondary as accents and body and light as neutrals.
    .chi-grid.-no-gutter(slot="example")
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        .-p--1.-p-sm--2.-text--center(v-for="background in lightBackgrounds")
          p.-text(:class="`-text--${background}`") -text--{{ background }}
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        .-p--1.-p-sm--2.-text--center(v-for="backgroundDark in darkBackgrounds")
          p.-text(:class="`-text--${backgroundDark}`") -text--{{ backgroundDark }}
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
          label: 'HTML Blueprint'
        }
      ]
    };
  }
})
export default class Brand extends Vue {
  lightBackgrounds = ['body', 'primary']
  darkBackgrounds = ['secondary', 'light']

  get codeSnippets() {
    return {
      htmlblueprint: (
        `<!-- For light backgrounds -->
${this.generateHtml(this.lightBackgrounds)}
<!-- For dark backgrounds -->
${this.generateHtml(this.darkBackgrounds)}
`
      )
    }
  }

  generateHtml(items: string[]) {
    return items.map(item => {
      return (
        `<p class="-text--${ item }">-text--${ item }</p>`
      )
    }).join('\n');
  }
}
</script>
