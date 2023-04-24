<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" additionalClasses="-bg--grey-20"
    | :tabs="exampleTabs" :headTabs="headTabs" @chiHeadTabsChange="changeHeadTab">
    div(slot="example")
      div(:class="['-p--3', isInverse ? '-bg--black' : '-bg--white']")
        ul.chi-tabs.-border(
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
    <Wrapper v-for="tab in headTabs" :slot="`code-bordered-${tab.id}-webcomponent`" :key="tab.id">
      <pre class="language-html">
        <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper v-for="tab in headTabs" :slot="`code-bordered-${tab.id}-htmlblueprint`" :key="tab.id">
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
      href: '',
      text: 'Active Tab',
      active: true
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
            code: `<ul class="chi-tabs -border">
  <li class="-active">
    <a href="#">Active tab</a>
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
            code: `<ul class="chi-tabs -inverse -border">
  <li class="-active">
    <a href="#">Active tab</a>
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
