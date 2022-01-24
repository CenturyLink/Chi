<template lang="pug">
  <ComponentExample title="Bordered" id="bordered" padding="-p--0" :tabs="exampleTabs">
    .-p--3.-bg--grey-20(slot="example")
      .-bg--white.-px--3.-pt--2
        ul.chi-tabs.-border#example-portal-horizontal-bordered(
          role="tablist"
          aria-label="chi-tabs-portal-horizontal")
          li.-active
            a(
              href='#portal-horizontal-bordered-1'
              role="tab"
              aria-selected="true"
              aria-controls="portal-horizontal-bordered-1"
              ) Active Tab
          li
            a(
              href='#portal-horizontal-bordered-2'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="portal-horizontal-bordered-2") Tab Link
          li
            a(
              href='#portal-horizontal-bordered-3'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="portal-horizontal-bordered-3"
              ) Tab Link
        .-py--3
          .chi-tabs-panel.-active#portal-horizontal-bordered-1(role="tabpanel")
            .-text Tab 1 content
          .chi-tabs-panel#portal-horizontal-bordered-2(role="tabpanel")
            .-text Tab 2 content
          .chi-tabs-panel#portal-horizontal-bordered-3(role="tabpanel")
            .-text Tab 3 content
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
        htmlblueprint: `<ul class="chi-tabs -border" id="example-horizontal-bordered" role="tablist" aria-label="chi-tabs-horizontal">
  <li class="-active">
    <a
      href="#horizontal-bordered-1"
      role="tab"
      aria-selected="true"
      aria-controls="horizontal-bordered-1">Active Tab</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-bordered-2"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-bordered-2">Tab Link</a>
  </li>
  <li role="tab">
    <a
      href="#horizontal-bordered-3"
      aria-selected="false"
      tabindex="-1"
      aria-controls="horizontal-bordered-3">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-bordered-1" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="horizontal-bordered-2" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="horizontal-bordered-3" role="tabpanel">Tab 3 content</div>

<script>chi.tab(document.getElementById('example-portal-horizontal-bordered'));<\/script>`,
      },
    };
  },
})
export default class BorderedPortal extends Vue {
  mounted() {
    chi.tab(document.getElementById('example-portal-horizontal-bordered'));
  }
}
</script>
