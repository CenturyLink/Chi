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
import { Component, Vue } from 'vue-property-decorator';
import AppLayoutFooter from './_app-layout-footer.vue';
import { _getFooterLinksList, _getLanguagesList } from './utilities';
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
  created() {
    this._createSnippets();
  }
  _createSnippets() {
    this.$data.codeSnippets.webcomponent = `<chi-main title="App title">
  <!-- App content goes here -->
  <footer class="chi-footer" slot="footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${_getLanguagesList()}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${_getFooterLinksList()}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>
`
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
  <footer class="chi-footer">
    <div class="chi-footer__content">
      <div class="chi-footer__internal">
        <div class="chi-footer__internal-content -mw--1200">
          <div class="chi-dropdown chi-footer__language">
            <a class="chi-button -icon -flat -light -sm chi-dropdown__trigger" id="language-dropdown-button" data-position="top-start" aria-label="Select your preferred language">
              <div class="chi-button__content">
                <i class="chi-icon icon-globe-network" aria-hidden="true"></i>
                <span>English</span>
              </div>
            </a>
            <div class="chi-dropdown__menu -w--sm -text--body">
              ${_getLanguagesList()}
            </div>
          </div>
          <div class="chi-footer__links">
            <ul>
              ${_getFooterLinksList()}
            </ul>
            <div class="chi-footer__copyright">&copy; 2021 Lumen Technologies. All Rights Reserved. Lumen is a registered trademark in the United States, EU and certain other countries.</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>
`
  }
}
</script>
