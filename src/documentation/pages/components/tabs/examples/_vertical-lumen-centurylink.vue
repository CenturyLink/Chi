<template lang="pug">
  <ComponentTabExample title="Vertical" id="vertical-lumen-centurylink" additionalClasses="-bg--grey-20" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3(:slot="$data.menuTabs[menuId === 'base' ? 0 : 1].id")
      div(:class="'chi-grid -no-gutter -bg--' + (menuId === 'base' ? 'white' : 'black')")
        .chi-col.-w--6.-w-sm--4.-p--3
          ul(:class="'chi-tabs ' + (menuId === 'base' ? '' : '-inverse') + ' -vertical'" :id="'example-vertical-' + menuId" role="tablist" :aria-label="menuId === 'base' ? 'chi-tabs-vertical-base' : 'vertical-inverse'" :ref="menuId === 'base' ? 'example-vertical-base' : ''")
            li(:class="tab.id === 1 ? '-active' : ''" :key="tab.id" v-for="tab in $data.tabs")
              a(
                :href="'#vertical-' + menuId + '-' + tab.id"
                role="tab"
                :tabIndex="tab.id === 1 ? '' : '-1'"
                :aria-selected="tab.id === 1 ? 'true' : 'false'"
                :aria-controls="'vertical-' + menuId + '-' + tab.id") {{tab.label}}
        div(:class="'chi-col ' + (menuId === 'base' ? '' : '-bg--white') + ' -p--3'")
          div(:class="'chi-tabs-panel ' + (tab.id === 1 ? '-active' : '')" :id="'vertical-' + menuId + '-' + tab.id" :key="tab.id" v-for="tab in $data.tabs" role="tabpanel")
            .-text Tab {{tab.id}} content    
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
      tabs: [{id: 1, label: 'Active Tab'}, {id: 2, label: 'Tab Link'}, {id: 3, label: 'Tab Link'}],
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
          base: `<ul class="chi-tabs -vertical" id="example-vertical-base" role="tablist" aria-label="chi-tabs-vertical-base">
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

<script>chi.tab(document.getElementById('example-vertical-base'));<\/script>`,
          inverse: `<ul class="chi-tabs -inverse -vertical" id="example-vertical-inverse" role="tablist" aria-label="vertical-inverse">
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

<script>chi.tab(document.getElementById('example-vertical-inverse'));<\/script>`,
        },
      },
    }
  },
})
export default class VerticalLumenCenturyLink extends Vue {
  menuId = 'base';
  highlightedHTMLBluePrint = '';
  tab: any;

  mounted() {
    this.tab = chi.tab(this.$refs['example-vertical-base'] as HTMLElement);
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
