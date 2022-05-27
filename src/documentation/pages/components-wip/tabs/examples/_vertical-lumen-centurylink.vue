<template lang="pug">
  <ComponentExample title="Vertical" id="vertical-lumen-centurylink" additionalClasses="-bg--grey-20" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    .chi-grid.-no-gutter(:class="`-bg--${selectedTabId === 'base' ? 'white' : 'black'}`" slot="example")
      .chi-col.-w--6.-w-sm--4.-p--3
        ul.chi-tabs.-vertical(:class="selectedTabId === 'base' ? '' : '-inverse'" :id="'example-vertical-' + selectedTabId" role="tablist" :aria-label="selectedTabId === 'base' ? 'chi-tabs-vertical-base' : 'vertical-inverse'" :ref="`example__tabs_vertical_${selectedTabId}`")
          li(v-for="item in [1,2,3]" :class="selectedTab.selectedItemId === item ? '-active' : ''" @click.prevent="tabClickHandler(item)")
            a(
              :href="'#vertical-' + selectedTabId + '-' + item"
              role="tab"
              :tabIndex="item === 1 ? '' : '-1'"
              :aria-selected="selectedTab.selectedItemId === item ? 'true' : 'false'"
              :aria-controls="'vertical-' + selectedTabId + '-' + item") {{item === 1 ? 'Active Tab' : 'Tab Link'}}
      .chi-col.-p--3(:class="selectedTabId === 'base' ? '' : '-bg--white'")
        .chi-tabs-panel(:class="selectedTab.selectedItemId === item ? '-active' : ''" :id="'vertical-' + selectedTabId + '-' + item" :key="item" v-for="item in [1,2,3]" role="tabpanel")
          .-text Tab {{item}} content    
    <Wrapper :slot="`code-${exampleId}-${tab.id}-webcomponent`" v-for="tab in headTabs" :key="tab.id">
      <pre class="language-html" slot="code-webcomponent">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-${exampleId}-${tab.id}-htmlblueprint`" :key="tab.id">
      <JSNeeded />
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
      tabs: [1,2,3],
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
      exampleId: 'vertical-lumen-centurylink',
      selectedTabId: 'base'
    }
  },
})
export default class VerticalLumenCenturyLink extends Vue {
selectedTab: any;
  tab: any;

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = '', tabConents = '';
      this.$data.tabs.forEach((tab: number, index: number) => {
        tabLinks += `\n  <li ${index === 0 ? 'class="-active"' : 'role="tab"'}>
    <a
      href="#vertical-${headTab.id}-${tab}"
      role="tab"${index !== 0 ? `
      tabindex="-1"` : ''}
      aria-selected="${index === 0 ? 'true' : 'false'}"
      aria-controls="vertical-${headTab.id}${index === 0 ? '-active' : ''}">${index === 0 ? 'Active Tab' : 'Tab Link'}</a>\n  </li>`;
        tabConents += `\n<div class="chi-tabs-panel${index === 0 ? ' -active' : ''}" id="example__tabs_vertical_${headTab.id}-${tab}" role="tabpanel">\n  Tab ${tab} content\n</div>`
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''}" id="example__tabs_vertical_${headTab.id}" role="tablist" aria-label="chi-tabs-vertical${headTab.id === 'inverse' ? '-inverse' : ''}">${tabLinks}\n</ul>\n${tabConents}\n\n<script>chi.tab(document.getElementById('example__tabs_vertical_${headTab.id}'));<\/script>`
    })
  }

  created() {
    this.selectedTab = this.$data.headTabs[0];
    this._setCodeSnippets();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example__tabs_vertical_base'] as HTMLElement);
  }

  changeSelectedTab(e: HeadTabsInterface) {
    this.$data.selectedTabId = e.id;
    this.selectedTab = this.$data.headTabs.find((tab: any) => tab.id === e.id);
  }

  beforeDestroy() {
    this.tab.dispose();
  }

  tabClickHandler(tabId: number) {
    this.selectedTab.selectedItemId = tabId;
  }
}
</script>
