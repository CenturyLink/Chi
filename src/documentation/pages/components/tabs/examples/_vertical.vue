<template lang="pug">
  <ComponentTabExample title="Vertical" id="vertical-lumen-centurylink" padding="-p--0" :tabs="exampleTabs" :menuTabs="menuTabs" :menuId="menuId" @toggleMenuId="toggleMenuId">
    .-p--3.-bg--grey-20(slot="menu-base")
      .chi-grid.-no-gutter.-bg--white
        .chi-col.-w--6.-w-sm--4.-p--3
          ul.chi-tabs.-vertical#example-vertical-base(role="tablist" aria-label="chi-tabs-vertical-base")
            li.-active
              a(
                href='#vertical-base-1'
                role="tab"
                aria-selected="true"
                aria-controls="vertical-base-1") Active Tab
            li
              a(
                href='#vertical-base-2'
                role="tab"
                aria-selected="false"
                tabindex="-1"
                aria-controls="vertical-base-2") Tab Link
            li
              a(
                href='#vertical-base-3'
                role="tab"
                aria-selected="false"
                tabindex="-1"
                aria-controls="vertical-base-3") Tab Link
        .chi-col.-p--3
          .chi-tabs-panel.-active#vertical-base-1(role="tabpanel")
            .-text Tab 1 content
          .chi-tabs-panel#vertical-base-2(role="tabpanel")
            .-text Tab 2 content
          .chi-tabs-panel#vertical-base-3(role="tabpanel")
            .-text Tab 3 content
      
    .-p--3.-bg--grey-20(slot="menu-inverse")
      .chi-grid.-no-gutter.-bg--black
        .chi-col.-w--6.-w-sm--4.-p--3
          ul.chi-tabs.-inverse.-vertical#example-vertical-inverse(role="tablist" aria-label="vertical-inverse")
            li.-active
              a(
                href='#vertical-inverse-1'
                role="tab"
                aria-selected="true"
                aria-controls="vertical-inverse-1") Active Tab
            li
              a(
                href='#vertical-inverse-2'
                role="tab"
                tabindex="-1"
                aria-selected="false"
                aria-controls="vertical-inverse-2") Tab Link
            li
              a(
                href='#vertical-inverse-3'
                role="tab"
                tabindex="-1"
                aria-selected="false"
                aria-controls="vertical-inverse-3") Tab Link
        .chi-col.-bg--white.-p--3
          .chi-tabs-panel.-active#vertical-inverse-1(role="tabpanel")
            .-text Tab 1 content
          .chi-tabs-panel#vertical-inverse-2(role="tabpanel")
            .-text Tab 2 content
          .chi-tabs-panel#vertical-inverse-3(role="tabpanel")
            .-text Tab 3 content  
      
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-if="menuId === 'base'" v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
        <code v-if="menuId === 'inverse'" v-highlight="$data.codeSnippets.htmlblueprint1" class="html"></code>
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
        htmlblueprint: `<ul class="chi-tabs -vertical" id="example-vertical-base" role="tablist" aria-label="chi-tabs-vertical-base">
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
        htmlblueprint1: `<ul class="chi-tabs -inverse -vertical" id="example-vertical-inverse" role="tablist" aria-label="vertical-inverse">
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
    }
  },
})
export default class VerticalLumenCenturyLink extends Vue {
  menuId = 'base';

  mounted() {
    chi.tab(document.getElementById('example-vertical-base'));
  }

  toggleMenuId(e: string) {
    this.menuId = e;  
  }
}
</script>
