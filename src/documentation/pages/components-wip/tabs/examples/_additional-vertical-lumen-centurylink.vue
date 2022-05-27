<template lang="pug">
  <ComponentExample title="Vertical" id="additional-vertical-lumen-centurylink" :tabs="exampleTabs">
    .-pb--4(slot="example")
      div(v-for="(size, index) in sizes")
        p.-text--bold.-mt--6 {{size.name}}
        .chi-divider.-mb--3
        ul.chi-tabs.-vertical(:class="size.class")
          li(:class="index === 0 ? '-active' : ''" v-for="(link, index) in tabLinks")
            a(href="#") {{link.link}}
            ul.chi-tabs__subtabs(v-if="link.subLinks && link.subLinks.length")
              li(:class="sublinkIndex === 0 ? '-active' : ''" v-for="(sublink, sublinkIndex) in link.subLinks")
                a(href='#') {{sublink}}
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
      sizes: [{name: 'Small', class: '-sm'}, {name: 'Medium (Base)', class: '-md'}, {name:'Large', class: '-lg'}, {name: 'X-Large', class:'-xl'}],
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
      tabLinks: [{link: 'Active Tab', subLinks: Array(3).fill('Subtab Link')}, {link: 'Tab Link'}, {link: 'Tab Link'}],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      },
    };
  },
})
export default class AdditionalVerticalLumenCenturyLink extends Vue {
  _getSubLinks(links: string[]) {
    let subLinks = '';
    links.forEach((subLink: string, subLinkIndex: number) => {
      subLinks += `\n     <li${subLinkIndex === 0 ? ' class="-active"' : ''}>\n       <a href="#">${subLink}</a>\n     </li>`
    })
      return subLinks;
  }

  _setCodeSnippet() {
    let codeSnippet = '', tabLinks = '';
    this.$data.tabLinks.forEach((tab: {[key: string]: any}, tabIndex: number) => {
      tabLinks += `\n  <li${tabIndex === 0 ? ' class="-active"' : ''}>\n   <a href="#">${tab.link}</a>${tab.subLinks ? `\n   <ul class="chi-tabs__subtabs">${this._getSubLinks(tab.subLinks)}\n   </ul>` : ''}\n  </li>`
    })
    this.$data.sizes.forEach((size: {[key: string]: string}, index: number) => {
      codeSnippet += `<!-- ${size.name} -->\n<ul class="chi-tabs -vertical ${size.class}">${tabLinks}\n</ul>${index === this.$data.sizes.length - 1 ? '' : '\n\n'}`
    })
    this.$data.codeSnippets.htmlblueprint = codeSnippet
  }
  
  created() {
    this._setCodeSnippet()
  }
}
</script>
