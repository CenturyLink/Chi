<template lang="pug">
  <ComponentExample title="Base with back link, subtitle, buttons and page-level actions" id="base-page-level-actions" padding="-p--0" :tabs="exampleTabs">
    chi-main(backlink="Back link", title="App title", subtitle="App subtitle" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      button.chi-button.-primary.-outline(slot="page-level__actions") Cancel
      button.chi-button.-primary.-ml--1(slot="page-level__actions") Submit
      <AppLayoutFooter />
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Add page-level actions at the bottom of the application layout by defining <code>slot="page-level__actions"</code> on each <code>chi-button</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppLayoutFooter from './_app-layout-footer.vue';
import { _baseHtmlBlueprintFooter, _baseWebComponentFooter } from './utilities';

@Component({
  components: {
    AppLayoutFooter
  },
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: ``,
      }
    };
  }
})
export default class BasePageLevelActions extends Vue {
  created(){
    this._createSnippets();
  }
  _createSnippets(){
    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="App title" subtitle="App subtitle">
  <!-- App content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${_baseWebComponentFooter}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back title</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -text--navy -m--0 -br--1 -pr--2">App title</div>
        <div class="-text--md -pl--2">App subtitle</div>
      </div>
      </div>
      <div class="chi-main__header-end">
        <button class="chi-button -primary">Primary</button>
      </div>
  </div>
  <div class="chi-main__content">
    <!-- App content goes here -->
    <div class="-d--flex -align-items--center -justify-content--end -py--3 -my--2 -bt--1">
      <button class="chi-button -primary -outline -bg--white">Cancel</button>
      <button class="chi-button -primary -ml--1">Submit</button>
    </div>
  </div>
  ${_baseHtmlBlueprintFooter}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
  }
}
</script>
