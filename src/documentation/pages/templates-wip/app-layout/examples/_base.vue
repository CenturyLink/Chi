<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs" padding="0">
    chi-main(title='Page title' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(slot="footer")
        div(v-html="footers.lumen" v-if="['lumen', 'portal'].includes($store.state.themes.theme)")
        div(v-html="footers.centurylink" v-if="$store.state.themes.theme === 'centurylink'")
        div(v-html="footers.brightspeed" v-if="$store.state.themes.theme === 'brightspeed'")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
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
import {
  generateAllExampleFooters,
  generateExampleFooter
} from '~/pages/templates-wip/app-layout/examples/_footer.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footers: generateAllExampleFooters('language-dropdown-button'),
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: '',
        htmlblueprint: ''
      }
    };
  }
})
export default class Base extends Vue {
  mounted() {
    const languageDropdown = document.getElementById('base-language-dropdown-button');

    if (languageDropdown) {
      chi.dropdown(languageDropdown);
    }

    this._setCodeSnippets();
  }

  updated() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    const footerTemplate = generateExampleFooter(this.$store.state.themes.theme);

    this.$data.codeSnippets.webcomponent = `<chi-main title="Page title">
  <!-- Page content goes here -->
  ${footerTemplate}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`;
    this.$data.codeSnippets.htmlblueprint = `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${footerTemplate}
</div>

${this.$store.state.themes.theme === 'centurylink' ? '' : '<script>chi.dropdown(document.getElementById(\'language-dropdown-button\'));<\/script>'}`;
  }
}
</script>
