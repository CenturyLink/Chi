<template lang="pug">
  <ComponentExample title="Vertical Tree Tabs" id="vertical-portal" :tabs="exampleTabs">
    ul.chi-tabs.-vertical.-icons.-list.-tree.-lg.-p--3(slot="example")
      li(v-for="(tab, index) in tabs" :class="index === 0 ? '-active': ''")
        a.chi-tabs_item(href='#')
          i.chi-icon.icon-atom(aria-hidden="true")
          span.chi-tabs_item-title {{tab.tab}}
          span.chi-tabs_item-text(v-if="tab.description") {{tab.description}}
          button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
            .chi-button__content
              i.chi-icon.icon-more-vert(aria-hidden="true")
        ul.chi-tabs__subtabs(v-if="tab.subTabs && tab.subTabs.length")
          li(v-for="subTab in tab.subTabs")
            a.chi-tabs_item(href='#')
              span.chi-tabs_item-title {{subTab.tab}}
              span.chi-tabs_item-text {{subTab.description}}
              button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                .chi-button__content
                  i.chi-icon.icon-more-vert(aria-hidden="true")
            ul.chi-tabs__subtabs(v-if="subTab.subTabs && subTab.subTabs.length")
              li(v-for="subTab in subTab.subTabs")
                a.chi-tabs_item(href='#')
                  span.chi-tabs_item-title {{subTab.tab}}
                  span.chi-tabs_item-text {{subTab.description}}
                  button.chi-button.-icon.-flat.-no-hover(aria-label="Button action")
                    .chi-button__content
                      i.chi-icon.icon-more-vert(aria-hidden="true")
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
      tabs: [{tab: 'Active Tab'}, {tab: 'Tab Link', description: 'Tab description', subTabs: [
        {tab: 'Subtab Link', description: 'Subtab description'},
        {tab: 'Subtab Link', description: 'Subtab description', subTabs: [
          {tab: 'Subtab Link', description: 'Subtab description'},
          {tab: 'Subtab Link', description: 'Subtab description'},
        ]},
        {tab: 'Subtab Link', description: 'Subtab description'}
      ]}, {tab: 'Tab Link', description: 'Tab description'}],
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
export default class VerticalPortal extends Vue {
  _getSubTabLinks(subTabs: any[]) {
    let subTabLinks = '';
    subTabs.forEach((subTab) => {
      subTabLinks += `\n      <li>
        <a class="chi-tabs_item" href="#">
          <span class="chi-tabs_item-title">${subTab.tab}</span>
          <span class="chi-tabs_item-text">${subTab.description}</span>
          <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
            <div class="chi-button__content">
              <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
            </div>
          </button>
        </a>${!subTab.subTabs || !subTab.subTabs.length ? '' : `
        <ul class="chi-tabs__subtabs">${this._getSubTabLinks(subTab.subTabs)}
        </ul>`}\n     </li>`
    })
    return subTabLinks;
  }
  _setCodeSnippet() {
    let tabLinks = '';
    this.$data.tabs.forEach((tab: any, index: number) => {
      tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>
    <a class="chi-tabs_item" href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span class="chi-tabs_item-title">${tab.tab}</span>${!tab.description ? '' : `
      <span class="chi-tabs_item-text">${tab.description}</span>`}
      <button class="chi-button -icon -flat -no-hover" aria-label="Button action">
        <div class="chi-button__content">
          <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
        </div>
      </button>
    </a>${!tab.subTabs || !tab.subTabs.length ? '' : `
    <ul class="chi-tabs__subtabs">${this._getSubTabLinks(tab.subTabs)}
    </ul>`}
  </li>`
    })
    this.$data.codeSnippets.htmlblueprint = `<ul class="chi-tabs -vertical -icons -list -tree -lg">${tabLinks}\n</ul>`
  }

  created() {
    this._setCodeSnippet();
  }
}
</script>
