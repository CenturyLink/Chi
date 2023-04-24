<template lang="pug">
  <ComponentExample title="Vertical Subtabs" id="vertical-subtabs" additionalClasses="-bg--grey-20"
    | :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="changeHeadTab">
    div(slot="example")
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
    <Wrapper v-for="tab in headTabs" :slot="`code-vertical-subtabs-${tab.id}-webcomponent`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-vertical-subtabs-${tab.id}-htmlblueprint`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadTabInterface } from '~/models/models';

@Component({})

export default class VerticalSubtabs extends Vue {
  activeHeadTab = 'base'

  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component'
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint'
    }
  ]

  tabLinks = [
    {
      href: '',
      text: 'Active Tab',
      active: true,
      subLinks: [
        {
          href: '',
          text: 'Subtab Link',
          active: true
        },
        {
          href: '',
          text: 'Subtab Link'
        },
        {
          href: '',
          text: 'Subtab Link'
        }
      ]
    },
    {
      href: '',
      text: 'Tab Link'
    },
    {
      href: '',
      text: 'Tab Link'
    }
  ]

  headTabs = [
      {
        active: true,
        id: 'base',
        label: 'Base',
        codeSnippets: {
          webComponent: {
            code: ''
          },
          htmlBlueprint: {
            code: `<ul class="chi-tabs -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`
          }
        }
      },
      {
        id: 'inverse',
        label: 'Inverse',
        codeSnippets: {
          webComponent: {
            code: ''
          },
          htmlBlueprint: {
            code: `<ul class="chi-tabs -inverse -vertical">
  <li class="-active">
    <a href="#">Active tab</a>
    <ul class="chi-tabs__subtabs">
      <li class="-active">
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
      <li>
        <a href="#">Subtab Link</a>
      </li>
    </ul>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
  <li>
    <a href="#">Tab link</a>
  </li>
</ul>`
        }
      }
    }
  ]

  get isInverse() {
    return this.activeHeadTab === 'inverse'
  }


  changeHeadTab(headTab: HeadTabInterface) {
    this.activeHeadTab = headTab.id
  }
}
</script>
