<template lang="pug">
  <ComponentExample title="Vertical" id="vertical-lumen-centurylink" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    .-p--3(slot="example")
      div(:class="'chi-grid -no-gutter -bg--' + (selectedTabId === 'base' ? 'white' : 'black')")
        .chi-col.-w--6.-w-sm--4.-p--3
          ul(:class="'chi-tabs ' + (selectedTabId === 'base' ? '' : '-inverse') + ' -vertical'" :id="'example-vertical-' + selectedTabId" role="tablist" :aria-label="selectedTabId === 'base' ? 'chi-tabs-vertical-base' : 'vertical-inverse'" :ref="`example-vertical-${selectedTabId}`")
            li(v-for="item in [1,2,3]" :class="selectedTab.selectedItemId === item ? '-active' : ''" @click.prevent="tabClickHandler(item)")
              a(
                :href="'#vertical-' + selectedTabId + '-' + item"
                role="tab"
                :tabIndex="item === 1 ? '' : '-1'"
                :aria-selected="selectedTab.selectedItemId === item ? 'true' : 'false'"
                :aria-controls="'vertical-' + selectedTabId + '-' + item") {{item === 1 ? 'Active Tab' : 'Tab Link'}}
        div(:class="'chi-col ' + (selectedTabId === 'base' ? '' : '-bg--white') + ' -p--3'")
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
        tabLinks += `
  <li ${index === 0 ? 'class="-active"' : 'role="tab"'}>
    <a
      href="#vertical-${headTab.id}-${tab}"
      ${index === 0 ? 'role="tab"' : 'tabIndex="-1"'}
      aria-selected="${index === 0 ? 'true' : 'false'}"
      aria-controls="vertical-${headTab.id}${index === 0 ? '-active' : ''}">${index === 0 ? 'Active Tab' : 'Tab Link'}</a>
  </li>`;
        tabConents += `
<div class="chi-tabs-panel${index === 0 ? ' -active' : ''}" id="vertical-${headTab.id}-${tab}" role="tabpanel">Tab ${tab} content</div>`
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''}" id="example-vertical-${headTab.id}" role="tablist" aria-label="chi-tabs-vertical${headTab.id === 'inverse' ? '-inverse' : ''}">${tabLinks}
</ul>
${tabConents}
<script>chi.tab(document.getElementById('example-vertical-${headTab.id}'));<\/script>`
    })
  }

  created() {
    this.selectedTab = this.$data.headTabs[0];
    this._setCodeSnippets();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example-vertical-base'] as HTMLElement);
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
    console.log(this.selectedTab);
  }
}
</script>
