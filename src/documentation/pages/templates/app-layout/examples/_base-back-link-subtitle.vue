<template lang="pug">
  <ComponentExample title="Base with back link and subtitle" id="base-back-link-subtitle" padding="-p--0" :tabs="exampleTabs">
    chi-main(backlink="Back link", title="App title", subtitle="App subtitle" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      <AppLayoutFooter />
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Use the <code>subtitle=""</code> attribute to display a subtitle next to the title of the application layout.
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppLayoutFooter from './_app-layout-footer.vue';
import { _getBaseHtmlBlueprintFooter, _getBaseWebComponentFooter } from './utilities';

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
export default class BaseSubtitle extends Vue {
  // Computed Property
  get hasThemeChangedToCenturyLink() {
    return this.$store.state.themes.theme === 'centurylink';
  }

  @Watch('hasThemeChangedToCenturyLink')
  onDataChanged(isThemeCenturyLink: boolean) {
    this._createSnippets(isThemeCenturyLink);
  }

  created(){
    this._createSnippets();
  }

  _createSnippets(isThemeCenturyLink: boolean = false) {
    this.$data.codeSnippets.webcomponent = `<chi-main backlink="Back link" title="App title" subtitle="App subtitle">
  <!-- App content goes here -->
  ${_getBaseWebComponentFooter(isThemeCenturyLink)}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs" aria-hidden="true"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -m--0 -br--1 -pr--2">App title</div>
        <div class="-text--md -pl--2">App subtitle</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- App content goes here -->
  </div>
  ${_getBaseHtmlBlueprintFooter(isThemeCenturyLink)}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
  }
}
</script>
