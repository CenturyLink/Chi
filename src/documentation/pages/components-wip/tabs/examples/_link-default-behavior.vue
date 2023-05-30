<template lang="pug">
  <ComponentExample title="Keep default link behavior" id="link-default-behavior" :tabs="exampleTabs" additionalClasses="-pb--4">
    p.-text(slot="example-description")
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
    div(slot="example")
      ul#example-default-link-behavior.chi-tabs(role="tablist" aria-label="example-default-link-behavior")
        li(v-for="link in tabLinks" :class="[link.active ? '-active' : '']")
          a(
            :href="`#${link.id}`"
            role="tab"
            aria-selected="true"
            :aria-controls="link.id"
          ) {{link.label}}
        li
          a(href='https://assets.ctl.io/chi/' target='_self') External Link
      .-py--2
        .chi-tabs-panel(v-for="tabContent in tabsContent" :class="[tabContent.active ? '-active' : '']" :id="tabContent.id" role="tabpanel")
          .-text {{tabContent.text}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          id: 'webcomponent',
          label: 'Web Component',
          disabled: true
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
          active: true
        }
      ]
    }
  }
})

export default class TabbedNavigationFlat extends Vue {
  tabLinks = [
    {
      id: 'a2',
      label: 'Tab a',
      active: true
    },
    {
      id: 'b2',
      label: 'Tab b'
    },
    {
      id: 'c2',
      label: 'Tab c'
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

  get codeSnippets() {
    return {
      webComponent: '',
      htmlblueprint: `<ul class="chi-tabs" id="example-tabs-2" role="tablist" aria-label="example-default-link-behavior">\n${this.generateTabsHtml()}
  <li><a href="https://assets.ctl.io/chi/" target="_self">External Link</a></li>
</ul>

${this.generateTabsContentHtml()}
</div>

<script>chi.tab(document.getElementById('example-tabs-2'));<\/script>`
    }
  }

  generateTabsHtml() {
    return this.tabLinks.map(({ label, id }, index) => {
      const isFirstItem = index === 0;
      return (
        `  <li${isFirstItem ? ' class="-active"' : ''}>
    <a
      href="#${id}"
      role="tab"${!isFirstItem ? '\n      tabindex="-1"' : ''}
      aria-selected="${isFirstItem ? 'true' : 'false'}"
      aria-controls="${id}">${label}</a>
  </li>`
      )
    }).join('\n');
  }

  generateTabsContentHtml() {
    return this.tabsContent.map(({text, id}, index) => {
      const isFirstItem = index === 0;
      return (
        `<div class="chi-tabs-panel${isFirstItem ? ' -active' : ''}" id="${id}" role="tabpanel">
    <p class="-text">${text}</p>
</div>`
      )
    }).join('\n');
  }

  mounted() {
    chi.tab(document.getElementById('example-default-link-behavior'))
  }
}
</script>
