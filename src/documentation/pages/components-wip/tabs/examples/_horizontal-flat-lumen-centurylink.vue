<template lang="pug">
  <ComponentExample title="Flat" titleSize="h4" :id="exampleId" additionalClasses="-bg--grey-20" :tabs="exampleTabs" :headTabs="headTabs" :headTabsExampleSlot="true"  @chiHeadTabsChange="e => changeSelectedTab(e)">
    div(:slot="`example-head-${headTab.id}`" v-for='headTab in headTabs')
      div(:class="`-bg--${headTab.id === 'base' ? 'white' : 'black'}`").-px--3
        ul.chi-tabs(:class="headTab.id === 'base' ? '' : '-inverse'" :id="`example-horizontal-${headTab.id}`"
          role="tablist"
          :aria-label="headTab.id === 'base' ? 'chi-tabs-horizontal' : 'chi-tabs-horizontal-inverse'"
          :ref="`example__tabs_horizontal_flat_${headTab.id}`")
          li(v-for="item in headTab.tabItems" :class="item === '1' ? '-active' : ''")
            a(
              :href="`#horizontal-flat-lumen-centurylink-${headTab.id}-${item}`"
              role="tab"
              :aria-selected="item === '1' ? 'true' : 'false'"
              :aria-controls="`horizontal-${headTab.id}-${item}`"
            ) {{item === '1' ? 'Active Tab' : 'Tab Link'}}
      .-bg--white.-p--3
        .chi-tabs-panel(v-for="item in headTab.tabItems" :class="item === '1' ? '-active' : ''" :id="`horizontal-flat-lumen-centurylink-${headTab.id}-${item}`" :key="`${headTab.id}-${item}`" role="tabpanel")
          .-text Tab {{item}} content
    <Wrapper :slot="`code-${exampleId}-${tab.id}-webcomponent`" v-for="tab in headTabs" :key="tab.id">
      <pre class="language-html">
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
      headTabs: [
        {
          active: true,
          id: 'base',
          label: 'Base',
          tabItems: ['1', '2', '3'],
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
          tabItems: ['1', '2', '3'],
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
      exampleId: 'horizontal-flat-lumen-centurylink',
      selectedTabId: 'base'
    };
  },
})
export default class HorizontalFlatLumenCenturyLink extends Vue {
  selectedTab: any;
  baseTab: any;
  inverseTab: any;

  _setCodeSnippets() {
    this.$data.headTabs.forEach((headTab: any) => {
      let tabLinks = '', tabConents = '';
      headTab.tabItems.forEach((tab: string, index: number) => {
        tabLinks += `\n  <li ${index === 0 ? 'class="-active"' : 'role="tab"'}>\n    <a
      href="#horizontal-${headTab.id}-${tab}"
      ${index === 0 ? 'role="tab"' : 'tabIndex="-1"'}
      aria-selected="${index === 0 ? 'true' : 'false'}"
      aria-controls="horizontal-${headTab.id}${index === 0 ? '-active' : ''}">${index === 0 ? 'Active Tab' : 'Tab Link'}</a>\n  </li>`;
        tabConents += `\n<div class="chi-tabs-panel${index === 0 ? ' -active' : ''}" id="example__tabs_horizontal_${headTab.id}-${tab}" role="tabpanel">Tab ${tab} content</div>`
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''}" id="example__tabs_horizontal_${headTab.id}" role="tablist" aria-label="chi-tabs-horizontal${headTab.id === 'inverse' ? '-inverse' : ''}">${tabLinks}\n</ul>\n${tabConents}\n\n<script>chi.tab(document.getElementById('example__tabs_horizontal_${headTab.id}'));<\/script>`
    })
  }

  created() {
    this.selectedTab = this.$data.headTabs[0];
    this._setCodeSnippets();
  }

  mounted() {
    this.baseTab = chi.tab(this.$refs['example__tabs_horizontal_flat_base'] as HTMLElement);
    this.inverseTab = chi.tab(this.$refs['example__tabs_horizontal_flat_inverse'] as HTMLElement);
  }

  changeSelectedTab(e: HeadTabsInterface) {
    this.$data.selectedTabId = e.id;
    this.selectedTab = this.$data.headTabs.find((tab: any) => tab.id === e.id);
  }

  beforeDestroy() {
    this.baseTab?.dispose();
    this.inverseTab?.dispose();
  }
}
</script>