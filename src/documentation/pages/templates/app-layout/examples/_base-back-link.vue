<template lang="pug">
  <ComponentExample title="Base with back link" id="base-back-link" padding="-p--0" :tabs="exampleTabs">
    chi-main(backlink="Back link", title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      <AppLayoutFooter />
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Use the <code>backlink=""</code> attribute to display a link above the title of the application layout.
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
  components:  {
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
export default class BaseBackLink extends Vue {
  created() {
    this._createSnippets();
  }
  _createSnippets() {
    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="App title">
  <!-- App content goes here -->
  ${_baseWebComponentFooter}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -text--navy -m--0 -pr--2">App title</div>
      </div>
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
