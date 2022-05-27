<template lang="pug">
  <ComponentExample title="Horizontal tabs with icons" additionalClasses="-bg--grey-20" :id="exampleId" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    .-px--3(:class="`-bg--${selectedTabId === 'base' ? 'white' : 'black'}`" slot="example")
      ul.chi-tabs.-icons(:class="selectedTabId === 'base' ? '' : '-inverse'" :ref="`example-icons-horizontal-${selectedTabId}`")
        li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in tabs")
          a(href='#')
            i.chi-icon.icon-atom(aria-hidden="true")
            span {{tab}}
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

declare const chi: any;

@Component({
  data: () => {
    return {
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
      exampleId: 'icons-horizontal-lumen-centurylink',
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
      tabs: ['Active Tab', 'Tab Link', 'Tab Link'],
      selectedTabId: 'base'
    };
  },
})
export default class IconsHorizontalLumenCenturyLink extends Vue {
  selectedTab: any;
  tab: any;

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = '';
      this.$data.tabs.forEach((tab: string, index: number) => {
        tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>\n    <a href="#">\n      <i class="chi-icon icon-atom" aria-hidden="true"></i>\n     <span>${tab}</span>\n   </a>\n  </li>`;
        });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''} -icons">${tabLinks}\n</ul>`
    })
  }

  created() {
    this.selectedTab = this.$data.headTabs[0];
    this._setCodeSnippets();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example-icons-horizontal-base'] as HTMLElement);
  }

  changeSelectedTab(e: HeadTabsInterface) {
    this.$data.selectedTabId = e.id;
    this.selectedTab = this.$data.headTabs.find((tab: any) => tab.id === e.id);
  }

  beforeDestroy() {
    this.tab.dispose();
  }
}
</script>
