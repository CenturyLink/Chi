<template lang="pug">
  <ComponentExample title="With tabs" id="with_tabs_portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text Use portal themed cards with tabs for organizing Enterprise Portal card content into separate but related views.
    template(#example)
      .chi-card
        .chi-card__tabs
          ul.chi-tabs
            li.-active
              a(href='#tab1') Active Tab
            li
              a(href='#tab2') Tab Link
            li
              a(href='#tab3') Tab Link
        .chi-card__content.chi-tabs-panel.-active(id="tab1" role="tabpanel")
          .chi-card__caption
            | Tab 1 content
        .chi-card__content.chi-tabs-panel(id="tab2" role="tabpanel")
          .chi-card__caption
            | Tab 2 content
        .chi-card__content.chi-tabs-panel(id="tab3" role="tabpanel")
          .chi-card__caption
            | Tab 3 content
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class WithTabsPortal extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div class="chi-card">
  <div class="chi-card__tabs">
    <ul class="chi-tabs">
      <li class="-active"><a href="#tab1">Active Tab</a></li>
      <li><a href="#tab2">Tab Link</a></li>
      <li><a href="#tab3">Tab Link</a></li>
    </ul>
  </div>
  <div class="chi-card__content chi-tabs-panel -active" id="tab1" role="tabpanel">
    <div class="chi-card__caption">Tab 1 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab2" role="tabpanel">
    <div class="chi-card__caption">Tab 2 content</div>
  </div>
  <div class="chi-card__content chi-tabs-panel" id="tab3" role="tabpanel">
    <div class="chi-card__caption">Tab 3 content</div>
  </div>
</div>

<script>
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      chi.tab(document.querySelectorAll('.chi-tabs-panel .chi-tabs'));
    }
  );
<\/script>`,
  }
  mounted() {
    chi.tab(document.querySelectorAll('.chi-tabs-panel .chi-tabs'));
  }
}
</script>
