<template lang="pug">
  <ComponentExample title="Vertical tabs with icons and description" id="vertical-description-lumen-centurylink" additionalClasses="-bg--grey-20" :tabs="exampleTabs">
    .-bg--white.-p--3(slot="example")
      ul.chi-tabs.-vertical.-icons.-list
        li(v-for="(tab, index) in tabs" :key="index" :class="index === 0 ? '-active' : ''")
          a.chi-tabs_item(href='#')
            i.chi-icon.icon-atom(aria-hidden="true")
            span.chi-tabs_item-title {{tab}}
            span.chi-tabs_item-text Tab description
          ul.chi-tabs__subtabs(v-if="tab.includes('Active')")
            li(v-for="(subTab, subTabIndex) in subTabs" :key="subTabIndex")
              a.chi-tabs_item(href='#')
                span.chi-tabs_item-title {{subTab}}
                span.chi-tabs_item-text Subtab description
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
      tabs: ['Tab Link', 'Active Tab', 'Tab Link'],
      subTabs: ['Subtab Link', 'Subtab Link', 'Subtab Link'],
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
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      },
    };
  },
})
export default class VerticalDescriptionLumenCenturyLink extends Vue {

  _setCodeSnippets() {
    let tabLinks = '', subTabLinks = '', subTabs = '';
    this.$data.subTabs.forEach((subTab: string) => {
      subTabLinks += `\n      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">${subTab}</span>
          <span class="chi-tabs_item-text">Subtab description</span>
        </a>\n      </li>`
    })

    subTabs = `\n   <ul class="chi-tabs__subtabs">${subTabLinks}\n   </ul>`
    this.$data.tabs.forEach((tab: string, tabIndex: number) => {
      tabLinks += `\n  <li${tabIndex === 0 ? ' class="-active"' : ''}>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">${tab}</span>
      <span class="chi-tabs_item-text">Tab description</span>
    </a>${tab.includes('Active') ? subTabs : ''}\n  </li>`
    })

    this.$data.codeSnippets.htmlblueprint = `<ul class="chi-tabs -vertical -icons -list">${tabLinks}\n</ul>`
  }

  created() {
    this._setCodeSnippets();
  }
}
</script>
