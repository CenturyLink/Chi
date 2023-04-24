<template lang="pug">
  <ComponentExample title="Flat" id="vertical-flat" :tabs="exampleTabs" :headTabs="isPortal ? null : headTabs"
    | @chiHeadTabsChange="changeHeadTab" additionalClasses="-bg--grey-20">
    .-bg--white(slot="example")
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-sm--4.-p--3(:class="[isInverse ? '-bg--black' : '-bg--white']")
          ul(
            :id="`example-vertical-${activeHeadTab}`"
            :class="['chi-tabs', '-vertical', isInverse ? '-inverse' : '']"
            role="tablist"
            aria-label="chi-tabs-horizontal")
            li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
              a(
                :href="`#${link.href}`"
                role="tab"
                aria-selected="true"
                :aria-controls="link.href"
              ) {{link.text}}
        .chi-col.-p--3
          .chi-tabs-panel(v-for="tabContent in tabsContent" :class="[tabContent.active ? '-active' : '']" :id="tabContent.id" role="tabpanel")
            .-text {{tabContent.text}}
    template(v-if="isPortal")
      <pre class="language-html" slot="code-webcomponent">
        <code v-highlight="$data.headTabs[0].codeSnippets.webComponent.code" class="html"></code>
      </pre>
      <pre class="language-html" slot="code-htmlblueprint">
        <JSNeeded />
        <code v-highlight="$data.headTabs[0].codeSnippets.htmlBlueprint.code" class="html"></code>
      </pre>
    template(v-else)
      <Wrapper v-for="tab in headTabs" :slot="`code-vertical-flat-${tab.id}-webcomponent`" :key="tab.id">
        <pre class="language-html">
          <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
        </pre>
      </Wrapper>
      <Wrapper v-for="tab in headTabs" :slot="`code-vertical-flat-${tab.id}-htmlblueprint`" :key="tab.id">
        <JSNeeded />
        <pre class="language-html">
          <code v-highlight="tab.codeSnippets.htmlBlueprint.code" class="html"></code>
        </pre>
      </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { HeadTabInterface } from '~/models/models';

declare const chi: any;

@Component({})

export default class VerticalFlat extends Vue {
  activeHeadTab = 'base'
  isInverseTabsInactive = true

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
            code: `<ul class="chi-tabs -vertical" id="example-vertical-base" role="tablist" aria-label="chi-tabs-vertical-base">
  <li class="-active">
    <a
      href="#vertical-base-1"
      role="tab"
      aria-selected="true"
      aria-controls="vertical-base-1">Active Tab</a>
  </li>
  <li>
    <a
      href="#vertical-base-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-base-2">Tab Link</a>
  </li>
  <li>
    <a
      href="#vertical-base-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-base-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="vertical-base-1" role="tabpanel">
  Tab 1 content
</div>
<div class="chi-tabs-panel" id="vertical-base-2" role="tabpanel">
  Tab 2 content
</div>
<div class="chi-tabs-panel" id="vertical-base-3" role="tabpanel">
  Tab 3 content
</div>

<script>chi.tab(document.getElementById('example-vertical-base'));<\/script>`
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
            code: `<ul class="chi-tabs -inverse -vertical" id="example-vertical-inverse" role="tablist" aria-label="vertical-inverse">
  <li class="-active">
    <a
      href="#vertical-inverse-1"
      role="tab"
      aria-selected="true"
      aria-controls="vertical-inverse-1">Active Tab</a>
  </li>
  <li>
    <a
      href="#vertical-inverse-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-inverse-2">Tab Link</a>
  </li>
  <li>
    <a
      href="#vertical-inverse-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="vertical-inverse-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="vertical-inverse-1" role="tabpanel">
  Tab 1 content
</div>
<div class="chi-tabs-panel" id="vertical-inverse-2" role="tabpanel">
  Tab 2 content
</div>
<div class="chi-tabs-panel" id="vertical-inverse-3" role="tabpanel">
  Tab 3 content
</div>

<script>chi.tab(document.getElementById('example-vertical-inverse'));<\/script>`
        }
      }
    }
  ]

  get theme() {
    return this.$store.state.themes.theme;
  }

  get isInverse() {
    return this.activeHeadTab === 'inverse'
  }

  get isPortal() {
    return this.theme === 'portal'
  }

  get tabsContent() {
    return [
      {
        id: `vertical-${this.activeHeadTab}-1`,
        text: 'Tab 1 content',
        active: true
      },
      {
        id: `vertical-${this.activeHeadTab}-2`,
        text: 'Tab 2 content'
      },
      {
        id: `vertical-${this.activeHeadTab}-3`,
        text: 'Tab 3 content'
      }
    ]
  }

  get tabLinks() {
    return [
      {
        href: `vertical-${this.activeHeadTab}-1`,
        text: 'Active Tab',
        active: true
      },
      {
        href: `vertical-${this.activeHeadTab}-2`,
        text: 'Tab Link'
      },
      {
        href: `vertical-${this.activeHeadTab}-3`,
        text: 'Tab Link'
      }
    ]
  }

  changeHeadTab(headTab: HeadTabInterface) {
    this.activeHeadTab = headTab.id
  }

  mounted() {
    chi.tab(document.getElementById('example-vertical-base'))
  }

  updated() {
    if (this.isInverseTabsInactive) {
      setTimeout(() => {
        this.isInverseTabsInactive = false
        chi.tab(document.getElementById('example-vertical-inverse'))
      }, 500)
    }
  }
}
</script>
