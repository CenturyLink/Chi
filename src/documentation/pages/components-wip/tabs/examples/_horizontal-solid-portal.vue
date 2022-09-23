<template lang="pug">
  <ComponentExample title="Flat" titleSize="h4" id="horizontal-1" additionalClasses="-bg--grey-20" :tabs="exampleTabs">
    .-bg--white.-px--3.-pt--2(slot="example")
      ul.chi-tabs.-solid.-lg.-border#example-portal-horizontal-solid(
        role="tablist"
        aria-label="chi-tabs-horizontal"
        ref="example__tabs_portal_horizontal_solid")
        li(v-for="(tab, index) in tabs" :class="index === 0 && '-active'")
          a(
            :href="'#portal-horizontal-solid-' + tab"
            role="tab"
            :aria-selected="index === 0 ? 'true' : 'false'"
            :tabindex="index === 0 ? '' : -1"
            :aria-controls="'portal-horizontal-solid-' + tab"
            ) {{tab === 1 ? 'Active Tab' : 'Tab Link'}}
      .-py--3
        .chi-tabs-panel(role="tabpanel" :id="'portal-horizontal-solid-' + tab" v-for="(tab, index) in tabs" :class="index === 0 ? '-active' : ''")
          .-text Tab {{tab}} content
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
      tabs: [1,2,3],
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
export default class HorizontalSolidPortal extends Vue {
  tab: any;

  _setCodeSnippet() {
    let tabLinks = '', tabPanels = '';
    this.$data.tabs.forEach((tab: number, tabIndex: number) => {
      tabLinks += `\n  <li${tabIndex === 0 ? ' class="-active"' : ' role="tab"'}>\n    <a
      href="#horizontal-solid-bordered-${tab}"${tabIndex === 0 ? `
      role="tab"` : ''}
      aria-selected="${tabIndex === 0 ? 'true' : 'false'}"${tabIndex !== 0 ? `
      tabindex="-1"` : ''}
      aria-controls="${'horizontal-solid-bordered-' + tab}">${tab === 1 ? 'Active Tab' : 'Tab Link'}</a>\n  </li>`

      tabPanels += `\n<div class="chi-tabs-panel ${tabIndex === 0 ? '-active' : ''}" id="horizontal-solid-bordered-${tab}" role="tabpanel">Tab ${tab} content</div>`
    })
    this.$data.codeSnippets.htmlblueprint = `<ul class="chi-tabs -solid -lg -border" id="example-horizontal-solid-bordered" role="tablist" aria-label="chi-tabs-horizontal">${tabLinks}\n</ul>\n${tabPanels}\n\n<script>chi.tab(document.getElementById('example__tabs_portal_horizontal_base'));<\/script>`
  }
  
  created() {
    this._setCodeSnippet();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example__tabs_portal_horizontal_solid'] as HTMLElement);
  }

  beforeDestroy() {
    this.tab?.dispose();
  }
}
</script>
