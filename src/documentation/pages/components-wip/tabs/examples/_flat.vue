<template lang="pug">
  <ComponentExample title="Flat" id="flat" :tabs="exampleTabs" :headTabs="isPortal ? null : headTabs"
    | @chiHeadTabsChange="changeHeadTab" additionalClasses="-bg--grey-20">
    .-bg--white(slot="example")
      .-px--3(:class="[isInverse ? '-bg--black' : '']")
        ul.chi-tabs(
          :id="`example-horizontal-${activeHeadTab}`"
          :class="[isInverse ? '-inverse' : '']"
          role="tablist"
          aria-label="chi-tabs-horizontal")
          li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
            a(
              :href="`#${link.href}`"
              role="tab"
              aria-selected="true"
              :aria-controls="link.href"
            ) {{link.text}}
      .-p--3
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
      <Wrapper v-for="tab in headTabs" :slot="`code-flat-${tab.id}-webcomponent`" :key="tab.id">
        <pre class="language-html">
          <code v-highlight="tab.codeSnippets.webComponent.code" class="html"></code>
        </pre>
      </Wrapper>
      <Wrapper v-for="tab in headTabs" :slot="`code-flat-${tab.id}-htmlblueprint`" :key="tab.id">
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

export default class Flat extends Vue {
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
            code: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">
  <li class="-active">
    <a
      href="#horizontal-base-1"
      role="tab"
      aria-selected="true"
      aria-controls="horizontal-base-1">Active Tab</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-base-2"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-base-2">Tab Link</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-base-3"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-base-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-base-1" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="horizontal-base-2" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="horizontal-base-3" role="tabpanel">Tab 3 content</div>

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`
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
            code: `<ul class="chi-tabs -inverse" id="example-horizontal-inverse" role="tablist" aria-label="chi-tabs-horizontal-inverse">
  <li class="-active">
    <a
      href="#horizontal-inverse-1"
      role="tab"
      aria-selected="true"
      aria-controls="horizontal-inverse-1">Active Tab</a></li>
  <li>
    <a
      href="#horizontal-inverse-2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-inverse-2">Tab Link</a></li>
  <li>
    <a
      href="#horizontal-inverse-3"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-inverse-3">Tab Link</a></li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-inverse-1" role="tabpanel">
  Tab 1 content
</div>
<div class="chi-tabs-panel" id="horizontal-inverse-2" role="tabpanel">
  Tab 2 content
</div>
<div class="chi-tabs-panel" id="horizontal-inverse-3" role="tabpanel">
  Tab 3 content
</div>

<script>chi.tab(document.getElementById('example-horizontal-inverse'));<\/script>`
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
        id: `horizontal-${this.activeHeadTab}-1`,
        text: 'Tab 1 content',
        active: true
      },
      {
        id: `horizontal-${this.activeHeadTab}-2`,
        text: 'Tab 2 content'
      },
      {
        id: `horizontal-${this.activeHeadTab}-3`,
        text: 'Tab 3 content'
      }
    ]
  }

  get tabLinks() {
    return [
      {
        href: `horizontal-${this.activeHeadTab}-1`,
        text: 'Active Tab',
        active: true
      },
      {
        href: `horizontal-${this.activeHeadTab}-2`,
        text: 'Tab Link'
      },
      {
        href: `horizontal-${this.activeHeadTab}-3`,
        text: 'Tab Link'
      }
    ]
  }

  changeHeadTab(headTab: HeadTabInterface) {
    this.activeHeadTab = headTab.id
  }

  mounted() {
    chi.tab(document.getElementById('example-horizontal-base'))
  }

  updated() {
    if (this.isInverseTabsInactive) {
      setTimeout(() => {
        this.isInverseTabsInactive = false;
        chi.tab(document.getElementById('example-horizontal-inverse'));
      }, 500)
    }
  }
}
</script>
