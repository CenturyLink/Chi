<template lang="pug">
  <ComponentExample title="Base with back link, subtitle and buttons" id="base-back-link-subtitle-buttons" padding="-p--0" :tabs="exampleTabs">
    chi-main(backlink="Back link", title="App title", subtitle="App subtitle" slot="example")
      button.chi-button.-primary(slot="header-actions") Primary
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      <AppLayoutFooter />
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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
        htmlblueprint: ``
      }
    };
  }
})
export default class BaseSubtitleButtons extends Vue {
  created(){
    this._createSnippets();
  }
  _createSnippets(){
    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="App title" subtitle="App subtitle">
  <button class="chi-button -primary" slot="header-actions">Primary</button>
  <!-- App content goes here -->
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
  </div>
  ${_baseHtmlBlueprintFooter}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
  }
}
</script>
