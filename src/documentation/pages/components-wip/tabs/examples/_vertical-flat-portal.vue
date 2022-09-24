<template lang="pug">
  <ComponentExample title="Flat" titleSize="h4" :id="exampleId"  :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(slot="example")
      .chi-grid.-no-gutter.-bg--white
        .chi-col.-w--6.-w-sm--4.-p--3
          ul#example-portal-vertical-flat.chi-tabs.-vertical(role="tablist" aria-label="example-portal-vertical-flat" ref="example__portal_vertical_flat")
            li(v-for="(tab, index) in tabs" :class="tab === '1' ? '-active' : ''")
              a(
                :href="`#portal-vertical-flat-${tab}`"
                role="tab"
                :aria-selected="tab === '1' ? 'true' : 'false'"
                :tabIndex="item === '1' ? '' : '-1'"
                :aria-controls="`portal-vertical-flat-${tab}`") {{tab === '1' ? 'Active Tab' : 'Tab Link'}}
        .chi-col.-p--3
          .chi-tabs-panel(:class="tab === '1' ? '-active' : ''" :id="`portal-vertical-flat-${tab}`" :key="`portal-vertical-flat-${tab}`" v-for="tab in tabs" role="tabpanel")
            .-text Tab {{tab}} content
    <Wrapper v-for="tab in exampleTabs" :slot="`code-${tab.id}`" :key="tab.id">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="tab.codeSnippet" class="html"></code>
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
      tabs: ['1', '2', '3'],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
          codeSnippet: ''
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
          codeSnippet: ''
        },
      ],
      exampleId: 'vertical-flat-portal'
    };
  },
})
export default class VerticalFlatPortal extends Vue {
  tab: any;
  _setCodeSnippets() {
    let tabLinks = '', tabConents = '';
    this.$data.tabs.forEach((tab: number, index: number) => {
      tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>
    <a
      href="#portal-vertical-flat-${tab}"
      role="tab"
      aria-selected="${index === 0 ? 'true' : 'false'}"${index !== 0 ? `
      tabIndex="-1"` : ''}
      aria-controls="portal-vertical-flat-${tab}">${index === 0 ? 'Active Tab' : 'Tab Link'}</a>\n  </li>`;
      tabConents += `\n<div class="chi-tabs-panel${index === 0 ? ' -active' : ''}" id="portal-vertical-flat-${tab}" role="tabpanel">\n  Tab ${tab} content\n</div>`
      });
    this.$data.exampleTabs[1].codeSnippet = `<ul class="chi-tabs -vertical" id="example-portal-vertical-flat" role="tablist" aria-label="chi-tabs-portal-vertical-flat">${tabLinks}\n</ul>\n${tabConents}\n\n<script>chi.tab(document.getElementById('example-portal-vertical-flat'));<\/script>`;
  }

  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example__portal_vertical_flat'] as HTMLElement);
  }

  beforeDestroy() {
    this.tab?.dispose();
  }
}
</script>