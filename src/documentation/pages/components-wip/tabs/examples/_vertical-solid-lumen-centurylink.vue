<template lang="pug">
  <ComponentExample title="Solid" titleSize="h4" :id="exampleId"  :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(slot="example")
      .chi-grid.-no-gutter.-bg--white
        .chi-col.-w--6.-w-sm--4.-p--3
          ul#example-portal-vertical-solid.chi-tabs.-vertical.-solid.-xl(role="tablist" aria-label="example-portal-vertical-solid" ref="example__portal_vertical_solid")
            li(v-for="(tab, index) in tabs" :class="tab === '1' ? '-active' : ''")
              a(
                :href="`#portal-vertical-solid-${tab}`"
                role="tab"
                :aria-selected="tab === '1' ? 'true' : 'false'"
                :tabindex="tab === '1' ? 0 : -1"
                :aria-controls="`portal-vertical-solid-${tab}`") {{tab === '1' ? 'Active Tab' : 'Tab Link'}}
        .chi-col.-p--3
          .chi-tabs-panel(:class="tab === '1' ? '-active' : ''" :id="`portal-vertical-solid-${tab}`" :key="`portal-vertical-solid-${tab}`" v-for="tab in tabs" role="tabpanel")
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
      exampleId: 'horizontal-solid-lumen-centurylink'
    };
  },
})
export default class VerticalSolidLumenCenturyLink extends Vue {
  tab: any;
  _setCodeSnippets() {
    let tabLinks = '', tabConents = '';
    this.$data.tabs.forEach((tab: number, index: number) => {
      tabLinks += `\n  <li${index === 0 ? ' class="-active"' : ''}>
    <a
      href="#portal-vertical-solid-${tab}"
      role="tab"
      aria-selected="${index === 0 ? 'true' : 'false'}"
      aria-controls="portal-vertical-solid-${tab}">${index === 0 ? 'Active Tab' : 'Tab Link'}</a>\n  </li>`;
      tabConents += `\n<div class="chi-tabs-panel${index === 0 ? ' -active' : ''}" id="portal-vertical-solid-${tab}" role="tabpanel">\n  Tab ${tab} content\n</div>`
      });
    this.$data.exampleTabs[1].codeSnippet = `<ul class="chi-tabs -vertical -solid -xl" id="example-portal-vertical-solid" role="tablist" aria-label="chi-tabs-portal-vertical-solid">${tabLinks}\n</ul>\n${tabConents}\n\n<script>chi.tab(document.getElementById('example-portal-vertical-solid'));<\/script>`;
  }

  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this.tab = chi.tab(this.$refs['example__portal_vertical_solid'] as HTMLElement);
  }

  beforeDestroy() {
    this.tab?.dispose();
  }
}
</script>