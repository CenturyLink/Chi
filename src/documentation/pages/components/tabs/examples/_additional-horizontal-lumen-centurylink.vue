<template lang="pug">
  <ComponentExample title="Horizontal" id="additional-horizontal-lumen-centurylink" :tabs="exampleTabs">
    .-pb--4(slot="example")
      p.-text--bold X-small
      .chi-divider.-mb--2
      ul.chi-tabs.-xs
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Small
      .chi-divider.-mb--2
      ul.chi-tabs.-sm
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Medium (Base)
      .chi-divider.-mb--2
      ul.chi-tabs
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
      p.-text--bold.-mt--6 Large
      .chi-divider.-mb--2
      ul.chi-tabs.-lg
        li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
          a(href='#') {{ link }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: [{name: 'X-small', class: '-xs'}, {name: 'Small', class: '-sm'}, {name: 'Medium (Base)', class: '-md'}, {name:'Large', class: '-lg'}, {name: 'X-Large', class:'-xl'}],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      tabLinks: ['Active Tab', 'Tab Link', 'Tab Link'],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      },
    };
  },
})
export default class AdditionalHorizontalLumenCenturyLink extends Vue {
  _setCodeSnippet() {
    let codeSnippet = '', tabLinks = '';
      this.$data.tabLinks.forEach((tab: string, index: number) => {
        tabLinks += `
  <li ${index === 0 ? 'class="-active"' : ''}>
    <a href="#">${tab}</a>
  </li>`;
    })
    this.$data.sizes.forEach((size: {[key: string]: string}, index: number) => {
      codeSnippet += `<!-- ${size.name} -->
<ul class="chi-tabs ${size.class}">${tabLinks}
</ul>${index === this.$data.sizes.length - 1 ? '' : '\n\n'}`
    })
    this.$data.codeSnippets.htmlblueprint = codeSnippet
  }
  created() {
    this._setCodeSnippet()
  }
}
</script>
