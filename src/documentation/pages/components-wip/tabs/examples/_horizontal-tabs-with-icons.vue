<template lang="pug">
  <ComponentExample title="Horizontal tabs with icons" id="horizontal-tabs-with-icons"
    | :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="changeHeadTab" additionalClasses="-bg--grey-20">
    div(slot="example")
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
    <Wrapper v-for="tab in headTabs" :slot="`code-horizontal-tabs-with-icons-${tab.id}-webcomponent`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-horizontal-tabs-with-icons-${tab.id}-htmlblueprint`" :key="tab.id">
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

export default class TabbedNavigationFlat extends Vue {
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
      href: `#`,
      text: 'Active Tab',
      active: true
    },
    {
      href: `#`,
      text: 'Tab Link'
    },
    {
      href: `#`,
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
            code: `<ul class="chi-tabs -icons" id="example-horizontal-with-icons-base">
  <li class="-active">
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Active Tab</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
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
            code: `<ul class="chi-tabs -inverse -icons" id="example-horizontal-with-icons-inverse">
  <li class="-active">
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Active Tab</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="chi-icon icon-atom" aria-hidden="true"></i>
      <span>Tab Link</span>
    </a>
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
