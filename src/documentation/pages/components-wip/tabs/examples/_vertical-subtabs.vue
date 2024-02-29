<template lang="pug">
<ComponentExample title="Vertical Subtabs" id="vertical-subtabs" additionalClasses="-bg--grey-20" :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="changeHeadTab">
  template(#example)
    div(:class="['-p--3', isInverse ? '-bg--black' : '-bg--white']")
      ul.chi-tabs.-vertical(
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
          ) {{link.text}}
          ul.chi-tabs__subtabs(v-if="link.subLinks")
            li(v-for="subLink in link.subLinks" :class="[subLink.active ? '-active' : '']")
              a(href='#') {{subLink.text}}
  //- template(v-for="tab in headTabs")
  //-   template(#["`code-vertical-subtabs-${tab.id}-webcomponent`"])
  //-     Copy(lang="html" :code="tab.codeSnippets.webComponent.code")
  //-   template(#["`code-vertical-subtabs-${tab.id}-htmlblueprint`"])
  //-     Copy(lang="html" :code="tab.codeSnippets.htmlBlueprint.code")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IHeadTabs } from '~/models/models';

@NuxtComponent({})
export default class VerticalSubtabs extends Vue {
  activeHeadTab = 'base';

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
      ],
    },
    {
      href: '',
      text: 'Tab link',
    },
    {
      href: '',
      text: 'Tab link',
    },
  ];

  headTabs = [
    {
      active: true,
      id: 'base',
      label: 'Base',
      codeSnippets: {
        webComponent: {
          code: '',
        },
        htmlBlueprint: {
          code: `<ul class="chi-tabs -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
${this.tabsLinksHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
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
          code: `<ul class="chi-tabs -inverse -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
${this.tabsLinksHtml}
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`,
        },
      },
    },
  ];

  get isInverse() {
    return this.activeHeadTab === 'inverse';
  }

  get tabsLinksHtml() {
    return this.tabLinks
      .map((_, index) => {
        return `      <li${index === 0 ? ' class="-active"' : ''}>
        <a href="#">Subtab Link</a>
      </li>`;
      })
      .join('\n');
  }

  changeHeadTab(headTab: IHeadTabs) {
    this.activeHeadTab = headTab.id;
  }
}
</script>
