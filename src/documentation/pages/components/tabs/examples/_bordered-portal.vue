<template lang="pug">
  <ComponentExample title="Bordered" id="bordered-portal" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      .-bg--white.-px--3.-pt--2
        ul.chi-tabs.-border#example-portal-horizontal-bordered(
          role="tablist"
          aria-label="chi-tabs-portal-horizontal"
          ref="example__tabs_portal_horizontal_bordered")
          li(v-for="(tab, index) in tabs" :class="index === 0 && '-active'")
            a(
              :href="'#portal-horizontal-bordered-' + tab"
              role="tab"
              :aria-selected="index === 0 ? 'true' : 'false'"
              :tabindex="index === 0 ? '' : -1"
              :aria-controls="'portal-horizontal-bordered-' + tab"
              ) {{tab === 1 ? 'Active Tab' : 'Tab Link'}}
        .-py--3
          .chi-tabs-panel(role="tabpanel" :id="'portal-horizontal-bordered-' + tab" v-for="(tab, index) in tabs" :class="index === 0 ? '-active' : ''")
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
export default class BorderedPortal extends Vue {
  tab: any;

  _setCodeSnippet() {
    let tabLinks = '', tabPanels = '';
    this.$data.tabs.forEach((tab: number, tabIndex: number) => {
      tabLinks += `
  <li${tabIndex === 0 ? ' class="-active"' : ' role="tab"'}>
    <a
      href="#horizontal-bordered-${tab}"${tabIndex === 0 ? `
      role="tab"` : ''}
      aria-selected="${tabIndex === 0 ? 'true' : 'false'}"${tabIndex !== 0 ? `
      tabindex="-1"` : ''}
      aria-controls="${'horizontal-bordered-' + tab}">${tab === 1 ? 'Active Tab' : 'Tab Link'}</a>
  </li>`

      tabPanels += `
<div class="chi-tabs-panel ${tabIndex === 0 ? '-active' : ''}" id="example__tabs_horizontal__bordered_${tab}" role="tabpanel">Tab ${tab} content</div>`
    })
    this.$data.codeSnippets.htmlblueprint = `<ul class="chi-tabs -border" id="example__tabs_horizontal_bordered" role="tablist" aria-label="chi-tabs-horizontal">${tabLinks}
</ul>
${tabPanels}

<script>chi.tab(document.getElementById('example__tabs_portal_horizontal_bordered'));<\/script>`
  }
  
  created() {
    this._setCodeSnippet();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example__tabs_portal_horizontal_bordered'] as HTMLElement);
  }

  beforeDestroy() {
    this.tab.dispose();
  }
}
</script>
