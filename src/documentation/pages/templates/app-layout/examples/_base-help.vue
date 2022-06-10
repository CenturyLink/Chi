<template lang="pug">
  <ComponentExample title="Base with help icon" id="base-help" padding="-p--0" :tabs="exampleTabs">
    chi-main(title="App title" slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style="height:10rem;")
        | App content goes here
      chi-button(id='example__help-button2' type='icon' size='sm' variant='flat' alternative-text="Help" slot="help-icon" class="-ml--1"  @click="$refs.example__help_popover2.toggle()")
        chi-icon(icon='circle-question-outline')
      chi-popover(id='example__help-popover2' ref='example__help_popover2' position='top' variant='text' arrow reference='#example__help-button2')
        | Popover content.
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
import { Component, Vue, Watch } from 'vue-property-decorator';
import AppLayoutFooter from './_app-layout-footer.vue';
import { BASE_HELP_LANGUAGES, FOOTER_LINKS } from './fixtures';
import { _getBaseWebComponentFooter, _getBaseHtmlBlueprintFooter } from './utilities';

@Component({
  components: {
    AppLayoutFooter
  },
  data: () => {
    return {
      languages: BASE_HELP_LANGUAGES,
      footerLinks: FOOTER_LINKS,
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
export default class BaseHelp extends Vue {
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
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon" class="-ml--1">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
    Popover content.
  </chi-popover>
  <!-- App content goes here -->
  ${_getBaseWebComponentFooter(isThemeCenturyLink)}
</chi-main>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="-text--h3 -text--boldest -m--0 -pr--2">
          App title
          <div class="chi-button -icon -flat -sm" id="example__help-button" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--top" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- App content goes here -->
  </div>
  ${_getBaseHtmlBlueprintFooter(isThemeCenturyLink)}
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`;
  }
}
</script>
