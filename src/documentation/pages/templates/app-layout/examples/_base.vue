<template lang="pug">
  <ComponentExample title="Base" id="base" padding="-p--0" :tabs="exampleTabs">
    chi-main(title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      <AppLayoutFooter />
    <Wrapper slot="code-webcomponent">
      .p--text.chi-tab__description
        | Use the <code>title=""</code> attribute to display a title above the application layout.
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
export default class Base extends Vue {
  // Computed Property
  get hasThemeChangedToCenturyLink() {
    return this.$store.state.themes.theme === 'centurylink';
  }

  @Watch('hasThemeChangedToCenturyLink')
  onDataChanged(isThemeCenturyLink: boolean) {
    this._createSnippets(isThemeCenturyLink);
  }

  created() {
    this._createSnippets();
  }

  _createSnippets(isThemeCenturyLink: boolean = false) {
    this.$data.codeSnippets.webcomponent = `<chi-main title="App title">
  <!-- App content goes here -->
  ${_getBaseWebComponentFooter(isThemeCenturyLink)}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -text--navy -m--0 -pr--2">App title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- App content goes here -->
  </div>
  ${_getBaseHtmlBlueprintFooter(isThemeCenturyLink)}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
  }
}
</script>
