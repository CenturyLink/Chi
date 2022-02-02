<template lang="pug">
  <ComponentExample title="Base" id="base-portal" padding="-p--0" :tabs="exampleTabs">
    .-p--3.-bg--grey-20(slot="example")
      .-bg--white.-px--3.-pt--2
        ul.chi-tabs#example-portal-horizontal-base(
          role="tablist"
          aria-label="chi-tabs-horizontal")
          li.-active
            a(
              href='#portal-horizontal-base-1'
              role="tab"
              aria-selected="true"
              aria-controls="portal-horizontal-base-1"
              ) Active Tab
          li
            a(
              href='#portal-horizontal-base-2'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="portal-horizontal-base-2") Tab Link
          li
            a(
              href='#portal-horizontal-base-3'
              role="tab"
              aria-selected="false"
              tabindex="-1"
              aria-controls="portal-horizontal-base-3"
              ) Tab Link
        .-py--3
          .chi-tabs-panel.-active#portal-horizontal-base-1(role="tabpanel")
            .-text Tab 1 content
          .chi-tabs-panel#portal-horizontal-base-2(role="tabpanel")
            .-text Tab 2 content
          .chi-tabs-panel#portal-horizontal-base-3(role="tabpanel")
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
        htmlblueprint: `<ul class="chi-tabs" id="example-horizontal-base" role="tablist" aria-label="chi-tabs-horizontal">
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
      aria-controls="horizontal-base-3"">Tab Link</a>
  </li>
</ul>

<div class="chi-tabs-panel -active" id="horizontal-base-1" role="tabpanel">Tab 1 content</div>
<div class="chi-tabs-panel" id="horizontal-base-2" role="tabpanel">Tab 2 content</div>
<div class="chi-tabs-panel" id="horizontal-base-3" role="tabpanel">Tab 3 content</div>

<script>chi.tab(document.getElementById('example-portal-horizontal-base'));<\/script>`,
      },
    };
  },
})
export default class BasePortal extends Vue {
  mounted() {
    chi.tab(document.getElementById('example-portal-horizontal-base'));
  }
}
</script>
