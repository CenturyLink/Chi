<template lang="pug">
  <ComponentExample title="Base with back link, subtitle, buttons and page-level actions" id="base-page-level-actions" padding="-p--0" :tabs="exampleTabs">
    chi-main(backlink="Back link", title="App title", subtitle="App subtitle" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      button.chi-button.-primary.-outline(slot="page-level__actions") Cancel
      button.chi-button.-primary.-ml--1(slot="page-level__actions") Submit
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
    this.$data.codeSnippets.htmlblueprint = `<chi-main backlink="Back link" title="App title" subtitle="App subtitle">
  <!-- App content goes here -->
  <button class="chi-button -primary -outline -bg--white" slot="page-level__actions">Cancel</button>
  <button class="chi-button -primary -ml--1" slot="page-level__actions">Submit</button>
  ${_baseHtmlBlueprintFooter}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
  }
}
</script>
