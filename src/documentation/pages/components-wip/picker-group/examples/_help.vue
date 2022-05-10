<template lang="pug">
  <ComponentExample title="Help" id="help" :tabs="exampleTabs">
    p.-text(slot="example-description") Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover. 
      | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
    fieldset(slot="example")
      .chi-label__wrapper
        legend.chi-label Select an option
        .chi-label__help
          button.chi-button.-icon.-xs.-flat(aria-label="Help" data-target="#example__help-popover" ref="helpButton")
            i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          section.chi-popover.chi-popover--top(id="example__help-popover" aria-modal="true" role="dialog")
            .chi-popover__content
              p.chi-popover__text
                | Helpful information goes here.
      .chi-picker-group
        .chi-picker-group__content
          template(v-for="item in pickers")
            input.chi-picker__input(type='radio', name='example__help', :id="`example__help_${item}`")
            label(:for="`example__help_${item}`") Option {{ item }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      pickers: [1, 2, 3],
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
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
export default class Help extends Vue {
  helpButton: any;

  created() {
    this._setCodeSnippets();
  }

  mounted() {
    this.helpButton = chi.popover(this.$refs.helpButton as HTMLElement);
  }

  _setCodeSnippets() {
    let pickerInputs = '';

    this.$data.pickers.forEach((option: number) => {
      pickerInputs += `
      <input class="chi-picker__input" type="radio" name="example__help" id="example__help_${option}">
      <label for="example__help_${option}">Option ${option}</label>`;
    });

    this.$data.codeSnippets.htmlblueprint = `<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-picker-group">
    <div class="chi-picker-group__content">${pickerInputs}
    </div>
  </div>
</fieldset>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`;
  }

  beforeDestroy() {
    this.helpButton.dispose();
  }
}
</script>
