<template lang="pug">
  <ComponentExample title="Base with help icon" id="base_with_help_icon" :tabs="exampleTabs">
  chi-main(title='Page title' slot="example")
    chi-button#help-icon__help-button(type='icon' size='sm' variant='flat' alternative-text='Help' slot='help-icon' @click="togglePopover")
      chi-icon(icon='circle-question-outline')
    chi-popover(ref="popover" position='right-start' variant='text' arrow reference='#help-icon__help-button' slot='help-icon')
      | Popover content.
    .-d--flex.-align-items--center.-justify-content--center(style='height:10rem;') Page content goes here
    div(v-html="footerTemplate" slot="footer")

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
      footerTemplate: generateExampleFooter('help-icon-language-dropdown-button').htmlblueprint,
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
        webcomponent: `<chi-main title="Page title">
  <chi-button id="example__help-button" type="icon" size="sm" variant="flat" alternative-text="Help" slot="help-icon">
    <chi-icon icon="circle-question-outline"></chi-icon>
  </chi-button>
  <chi-popover id="example__help-popover" position="right-start" variant="text" arrow reference="#example__help-button" slot="help-icon">
    Popover content.
  </chi-popover>
  <!-- Page content goes here -->
  ${generateExampleFooter().webcomponent}
</chi-main>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  document.querySelector("#example__help-button")
    .addEventListener("click", function() {
      var popoverElem = document.querySelector("#example__help-popover");
      popoverElem.toggle();
    });
<\/script>`,
        htmlblueprint: `<div class="chi-main">
  <div class="chi-main__header">
    <div class="chi-main__header-start">
      <div class="chi-main__title">
        <div class="chi-main__title-heading">
          Page title
          <div class="chi-button -icon -flat -sm" id="example__help-button"  data-position="right-start" data-target="#example__help-popover" aria-label="Help" slot="help-icon">
            <div class="chi-button__content">
              <i class="chi-icon icon-circle-question-outline" aria-hidden="true"></i>
            </div>
          </div>
          <section class="chi-popover chi-popover--right-start" id="example__help-popover" aria-modal="true" role="dialog">
            <div class="chi-popover__content">
              <p class="chi-popover__text">Popover content.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="chi-main__content">
    <!-- Page content goes here -->
  </div>
  ${generateExampleFooter().htmlblueprint}
</div>

<script>
  chi.dropdown(document.getElementById('language-dropdown-button'));
  chi.popover(document.getElementById('example__help-button'));
<\/script>`
      }
    };
  }
})
export default class HelpIcon extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('help-icon-language-dropdown-button'));
  }

  togglePopover() {
    (this.$refs.popover as any).toggle();
  }
}
</script>
