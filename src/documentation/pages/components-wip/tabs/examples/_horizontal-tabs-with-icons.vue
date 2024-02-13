<template lang="pug">
  <ComponentExample title="Horizontal tabs with icons" id="horizontal-tabs-with-icons" :tabs="exampleTabs" titleSize="h4" :headTabs="headTabs" @chiHeadTabsChange="changeHeadTab" additionalClasses="-bg--grey-20">
    template(#example)
      div(:class="['-px--3', isInverse ? '-bg--black' : '-bg--white']")
        ul.chi-tabs.-icons(
          :id="`example-horizontal-with-icons-${activeHeadTab}`"
          :class="[isInverse ? '-inverse' : '']"
          role="tablist"
          aria-label="chi-tabs-horizontal")
          li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
            a(
              :href="`#${link.href}`"
              role="tab"
              aria-selected="true"
              :aria-controls="link.href"
            )
              i.chi-icon.icon-atom(aria-hidden="true")
              span {{link.text}}
    //- template(v-for="tab in headTabs")
    //-   template(#["`code-horizontal-tabs-with-icons-${tab.id}-webcomponent`"])
    //-     Copy(lang="html" :code="tab.codeSnippets.webComponent.code")
    //-   template(#["`code-horizontal-tabs-with-icons-${tab.id}-htmlblueprint`"])
    //-     Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '~/models/models';

@NuxtComponent({})
export default class TabbedNavigationFlat extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  activeHeadTab = 'base';

  tabLinks = [
    {
      href: `#`,
      text: 'Active Tab',
      active: true,
    },
    {
      href: `#`,
      text: 'Tab Link',
    },
    {
      href: `#`,
      text: 'Tab Link',
    },
  ];

  get headTabs() {
    return [
      {
        active: true,
        id: 'base',
        label: 'Base',
        codeSnippets: {
          webComponent: {
            code: '',
          },
          htmlBlueprint: {
            code: `<ul class="chi-tabs -icons">
${this.tabsLinksHtml}
</ul>`,
          },
        },
      },
      {
        id: 'inverse',
        label: 'Inverse',
        codeSnippets: {
          webComponent: {
            code: '',
          },
          htmlBlueprint: {
            code: `<ul class="chi-tabs -inverse -icons">
${this.tabsLinksHtml}
</ul>`,
          },
        },
      },
    ];
  }

  get tabsLinksHtml() {
    return this.tabLinks
      .map(({ text, active }) => {
        return `  <li${active ? ' class="-active"' : ''}>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>${text}</span>
    </a>
  </li>`;
      })
      .join('\n');
  }

  get isInverse() {
    return this.activeHeadTab === 'inverse';
  }

  changeHeadTab(headTab: IHeadTabs) {
    this.activeHeadTab = headTab.id;
  }
}
</script>
