<template lang="pug">
  <ComponentExample title="Bordered" :id="exampleId" additionalClasses="-bg--grey-20" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    div(:class="selectedTabId === 'base' ? '' : '-bg--grey-20'" slot="example")
      .-p--3(:class="`-bg--${selectedTabId === 'base' ? 'white' : 'black'}`")
        ul.chi-tabs(:class="selectedTabId === 'base' ? '' : '-inverse'").-border
          li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in tabs")
            a(href='#') {{tab}}
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
      exampleId: 'bordered-portal',
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
export default class BorderedSubtabsLumenCenturyLink extends Vue {

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = ''; 
      this.$data.tabs.forEach((tab: string, index: number) => {
        tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>\n    <a href="#">${tab}</a>\n  </li>`;
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''} -border">${tabLinks}\n</ul>`
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