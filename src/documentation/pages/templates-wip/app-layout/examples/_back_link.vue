<template lang="pug">
  <ComponentExample title="Base with back link" id="base_with_back_link" :tabs="exampleTabs">
    chi-main(backlink='Back link' title='Page title' slot="example")
      .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
      div(v-html="footerTemplate" slot="footer")

    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>backlink=""</code> attribute to display a link above the title of the application layout.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
import { generateExampleFooter } from './_base.vue';

declare const chi: any;

@Component({
  data: () => {
    return {
      footerTemplate: generateExampleFooter('back-link-language-dropdown-button').htmlblueprint,
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
        webcomponent: `<chi-main backlink="Back link" title="Page title">
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <a class="chi-link" href="#">
        <div class="chi-link__content">
          <i class="chi-icon icon-chevron-left -xs"></i>
          <span class="-text--md">Back link</span>
        </div>
      </a>
      <div class="chi-main__title">
        <div class="chi-main__title-heading">Page title</div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${generateExampleFooter().htmlblueprint}
</div>

<script>chi.dropdown(document.getElementById('language-dropdown-button'));<\/script>`
      }
    };
  }
})
export default class BackLink extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('back-link-language-dropdown-button'));
  }
}
</script>
