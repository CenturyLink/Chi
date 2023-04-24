<template lang="pug">
  <ComponentExample title="Keep default link behavior" id="link-default-behavior" :tabs="exampleTabs" additionalClasses="-pb--4">
    p.-text(slot="example-description")
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
    div(slot="example")
      ul#example-default-link-behavior.chi-tabs(role="tablist" aria-label="example-default-link-behavior")
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.href}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.href"
          ) {{link.text}}
        li
          a(href='https://assets.ctl.io/chi/' target='_self') External Link
      .-py--2
        .chi-tabs-panel(v-for="tabContent in tabsContent" :class="[tabContent.active ? '-active' : '']" :id="tabContent.id" role="tabpanel")
          .-text {{tabContent.text}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webComponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <JSNeeded />
      <code v-highlight="$data.codeSnippets.htmlBlueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({})

export default class TabbedNavigationFlat extends Vue {
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
      href: 'a2',
      text: 'Tab a',
      active: true
    },
    {
      href: 'b2',
      text: 'Tab b'
    },
    {
      href: 'c2',
      text: 'Tab c'
    }
  ]

  tabsContent = [
    {
      id: 'a2',
      text: 'Content for tab a',
      active: true
    },
    {
      id: 'b2',
      text: 'Content for tab b'
    },
    {
      id: 'c2',
      text: 'Content for tab c'
    }
  ]

  codeSnippets = {
    webComponent: '',
    htmlBlueprint: `<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">
  <li class="-active">
    <a
      href="#a2"
      role="tab"
      aria-selected="true"
      aria-controls="a2">Tab a</a>
  </li>
  <li>
    <a
      href="#b2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="ab2">Tab b</a>
  </li>
  <li>
    <a
      href="#c2"
      role="tab"
      aria-selected="false"
      tabindex="-1"
      aria-controls="c2">Tab c</a>
  </li>
  <li><a href="https://assets.ctl.io/chi/" target="_self">External Link</a></li>
</ul>

<div class="chi-tabs-panel -active" id="a2" role="tabpanel">
  <p class="-text">Content for tab a</p>
</div>
<div class="chi-tabs-panel" id="b2" role="tabpanel">
  <p class="-text">Content for tab b</p>
</div>
<div class="chi-tabs-panel" id="c2" role="tabpanel">
  <p class="-text">Content for tab c</p>
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`
  }

  mounted() {
    chi.tab(document.getElementById('example-default-link-behavior'))
  }
}
</script>
