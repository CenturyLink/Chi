<template lang="pug">
  <ComponentExample title="Vertical tabs with icons" id="vertical-tabs-with-icons" :tabs="exampleTabs" :headTabs="headTabs" titleSize="h4" @chiHeadTabsChange="changeHeadTab" additionalClasses="-bg--grey-20">
    template(#example)
      div(:class="['-p--3', isInverse ? '-bg--black' : '-bg--white']")
        ul.chi-tabs.-icons.-vertical(
          :id="`example-vertical-with-icons-${activeHeadTab}`"
          :class="[isInverse ? '-inverse' : '']"
          role="tablist"
          aria-label="chi-tabs-vertical")
          li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
            a(
              :href="`#${link.href}`"
              role="tab"
              aria-selected="true"
              :aria-controls="link.href"
            )
              i.chi-icon.icon-atom(aria-hidden="true")
              span {{link.text}}
            ul.chi-tabs__subtabs(v-if="link.subLinks")
              li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
                a(href='#') {{subLink.text}}
    template(#["`code-vertical-tabs-with-icons-${tab.id}-webcomponent`" :key="tab.id"] v-for="tab in headTabs")
      Copy(lang="html" :code="tab.codeSnippets.webComponent.code")

    template(#["`code-vertical-tabs-with-icons-${tab.id}-htmlblueprint`" :key="tab.id"] v-for="tab in headTabs")
      Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '~/models/models';

@NuxtComponent({})
export default class VerticalTabsWithIcons extends Vue {
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
  ]
  activeHeadTab = 'base';

  tabLinks = [
    {
      href: '',
      text: 'Active Tab',
      active: true,
      subLinks: [
        {
          href: '',
          text: 'Subtab Link',
          active: true,
        },
        {
          href: '',
          text: 'Subtab Link',
        },
        {
          href: '',
          text: 'Subtab Link',
        },
      ]
    },
    {
      href: '',
      text: 'Tab Link',
    },
    {
      href: '',
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
            code: `<ul class="chi-tabs -vertical -icons">
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
            code: `<ul class="chi-tabs -vertical -inverse -icons">
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
