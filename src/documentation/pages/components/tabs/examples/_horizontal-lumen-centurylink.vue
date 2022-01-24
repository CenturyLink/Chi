<template lang="pug">
  <ComponentTabExample title="Horizontal" id="horizontal-lumen-centurylink" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3(:slot="$data.menuTabs[menuId === 'base' ? 0 : 1].id")
      div(:class="menuId === 'base' ? '-bg--white' : '-bg--black'").-px--3
        ul.chi-tabs(:class="menuId === 'base' ? '' : '-inverse'" :id="`example-horizontal-${menuId}`"
          role="tablist"
          :aria-label="menuId === 'base' ? 'chi-tabs-horizontal' : 'chi-tabs-horizontal-inverse'"
          :ref="menuId === 'base' ? 'example-horizontal-base' : ''")
          li(v-for="item in [1,2,3]" :class="item === 1 ? '-active' : ''")
            a(
              :href="`#horizontal-${menuId}-${item}`"
              role="tab"
              :aria-selected="`${item === 1 ? 'true' : 'false'}`"
              :aria-controls="`horizontal-${menuId}-${item}`"
              ) {{item === 1 ? 'Active Tab' : 'Tab Link'}}
      .-bg--white.-p--3
        .chi-tabs-panel(:class="item === 1 ? '-active' : ''" v-for="item in [1,2,3]" :id="`horizontal-${menuId}-${item}`" role="tabpanel")
          .-text Tab {{item}} content
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="highlightedHTMLBluePrint ? highlightedHTMLBluePrint : $data.codeSnippets.htmlblueprint.base" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentTabExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
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
      menuTabs: [
        {
          active: true,
          id: 'base',
          label: 'Base',
        },
        {
          id: 'inverse',
          label: 'Inverse',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: { 
          base: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">
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

<script>chi.tab(document.getElementById('example-horizontal-base'));<\/script>`,
          inverse: `<ul class="chi-tabs -inverse" id="example-horizontal-inverse" role="tablist" aria-label="chi-tabs-horizontal-inverse">
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

<script>chi.tab(document.getElementById('example-horizontal-inverse'));<\/script>`,
        },
      },
    };
  },
})
export default class Horizontal extends Vue {
  menuId = 'base';
  highlightedHTMLBluePrint = '';
  tab: any;

  mounted() {
    this.tab = chi.tab(this.$refs['example-horizontal-base'] as HTMLElement);
  }

  toggleMenuId(toggleTabEvent: string) {
    this.menuId = toggleTabEvent;
    this.highlightedHTMLBluePrint = this.$data.codeSnippets.htmlblueprint[toggleTabEvent];

  }

  beforeDestroy() {
    this.tab.dispose();
  }
}
</script>