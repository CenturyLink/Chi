<template lang="pug">
  <ComponentExample title="Keep default link behavior" id="default-link-lumen-centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | By default, Chi JavaScript enabled tabs will ignore default link behavior.
      | To preserve it, specify a target property on the link.
    div(slot="example")
      ul#example-default-link-behavior.chi-tabs(role="tablist" aria-label="example-default-link-behavior" ref="example__tabs_default_link_behavior")
        li(v-for="(tab, index) in tabs" :class="index===0 ? '-active' : ''")
          a(
            :href="`#${tab}2`"
            role="tab"
            :aria-selected="tab === 'a' ? 'true' : 'false'"
            :tabindex="tab === 'a' ? 0 : -1"
            :aria-controls="tab + '2'") Tab {{tab}}
        li
          a(href='https://assets.ctl.io/chi/' target='_self') External Link
      .chi-tabs-panel(role="tabpanel" :id="`${tab}2`" :class="tab === 'a' ? '-active' : ''" v-for="tab in tabs")
        p.-text Content for tab {{tab}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
      tabs: ['a', 'b', 'c'],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      },
    };
  },
})
export default class DefaultLinkLumenCenturyLink extends Vue {
  tab: any;

  _setcodesnippet() {
    let links = ``, tabPanels = ``;
    this.$data.tabs.forEach((tab: string, tabIndex: number) => {
      links += `\n  <li${tabIndex === 0 ? ' class="-active"' : ''}>\n   <a \n     href="#${tab}2"\n     role="tab"\n     aria-selected="${tabIndex === 0 ? true : false}"${tabIndex === 0 ? '' : `\n     tabindex="-1"`}\n     aria-controls="${tab}2">Tab ${tab}</a>\n  </li>`
      tabPanels += `\n<div class="chi-tabs-panel${tabIndex === 0 ? ' -active' : ''}" id="example__tabs_panel_${tab}2" role="tabpanel">\n  <p class="-text">Content for tab ${tab}</p>\n</div>`
    })
    this.$data.codeSnippets.htmlblueprint = `<ul class="chi-tabs" id="example__tabs_default_link" role="tablist" aria-label="example-default-link-behavior">${links}\n  <li><a href="https://assets.ctl.io/chi/" target="_self">External Link</a></li>\n</ul>\n${tabPanels}\n\n<script>chi.tab(document.getElementById('example__tabs_default_link'));<\/script>`
  }

  created() {
    this._setcodesnippet();
  }
  
  mounted() {
    this.tab = chi.tab(this.$refs['example__tabs_default_link_behavior'] as HTMLElement);
  }

  beforeDestroy() {
    this.tab.dispose();
  }
}
</script>
