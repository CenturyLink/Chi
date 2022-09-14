<template lang="pug">
  <ComponentExample title="Vertical tabs with icons" :id="exampleId" additionalClasses="-bg--grey-20" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    .-p--3(:class="`-bg--${selectedTabId === 'base' ? 'white' : 'black'}`" slot="example")
      ul.chi-tabs.-vertical.-icons(:class="selectedTabId === 'base' ? '' : '-inverse'")
        li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in tabs")
          a(href='/components-wip/tabs/#')
            i.chi-icon.icon-atom(aria-hidden="true")
            span {{tab}}
          ul.chi-tabs__subtabs(v-if="index === 0")
            li(:class="subTabindex === 0 ? '-active' : ''" v-for="(subTab, subTabindex) in ['Subtab Link', 'Subtab Link', 'Subtab Link']")
              a(href='/components-wip/tabs/#') {{subTab}}           
    <Wrapper :slot="`code-${exampleId}-${tab.id}-webcomponent`" v-for="tab in headTabs" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
     <Wrapper v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-htmlblueprint`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadTabsInterface } from '../../../../models/models';

@Component({
  data: () => {
    return {
      exampleId: 'icons-vertical-lumen-centurylink',
      tabs: ['Active Tab', 'Tab Link', 'Tab Link'],
      selectedTabId: 'base',
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
       headTabs: [
        {
          active: true,
          id: 'base',
          label: 'Base',
          selectedItemId: 1,
          codeSnippets: {
            webComponent: {
              code: ``
            },
            htmlBlueprint: {
              code: ``,
            }
          }
        },
        {
          id: 'inverse',
          label: 'Inverse',
          selectedItemId: 1,
          codeSnippets: {
            webComponent: {
              code: ``,
              description: ``
            },
            htmlBlueprint: {
              code: ``,
            }
          }
        }
      ],
    };
  },
})
export default class IconsVerticalLumenCenturyLink extends Vue {

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = '';
      this.$data.tabs.forEach((tab: string, index: number) => {
        tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>\n    <a href="#">\n      <i class="chi-icon icon-atom" aria-hidden="true"></i>\n     <span>${tab}</span>\n   </a>\n  </li>`;
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''} -vertical -icons">${tabLinks}\n</ul>`
    })
  }

  created() {
    this._setCodeSnippets();
  }

  changeSelectedTab(e: HeadTabsInterface) {
    this.$data.selectedTabId = e.id;
  }
}
</script>
