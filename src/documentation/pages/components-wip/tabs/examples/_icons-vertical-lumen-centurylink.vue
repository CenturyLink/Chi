<template lang="pug">
  <ComponentExample title="Vertical tabs with icons" :id="exampleId" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="e => changeSelectedTab(e)">
    .-p--3(slot="example")
      div(:class="`-bg--${selectedTabId === 'base' ? 'white' : 'black'} -p--3`")
        ul(:class="`chi-tabs ${selectedTabId === 'base' ? '' : '-inverse'} -vertical -icons`")
          li(:class="index === 0 ? '-active' : ''" v-for="(tab, index) in tabs")
            a(href='#')
              i.chi-icon.icon-atom(aria-hidden="true")
              span {{tab}}
            ul.chi-tabs__subtabs(v-if="index === 0")
              li(:class="subTabindex === 0 ? '-active' : ''" v-for="(subTab, subTabindex) in ['Subtab Link', 'Subtab Link', 'Subtab Link']")
                a(href='#') {{subTab}}           
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
        tabLinks += `
  <li ${index === 0 ? 'class="-active"' : ''}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${tab}</span>
    </a>
  </li>`;
      });

      headTab.codeSnippets.htmlBlueprint.code = `<ul class="chi-tabs${headTab.id === 'inverse' ? ' -inverse' : ''} -vertical -icons">${tabLinks}
</ul>`
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
