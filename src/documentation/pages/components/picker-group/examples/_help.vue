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
            input.chi-picker__input(type='radio', name='unique-name-he', :id="`unique-id-he${item}`")
            label(:for="`unique-id-he${item}`") Option {{ item }}
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
        htmlblueprint: `<fieldset>
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
    <div class="chi-picker-group__content">
      <input class="chi-picker__input" type="radio" name="unique-name-he" id="unique-id-he1">
      <label for="unique-id-he1">Option 1</label>
      <input class="chi-picker__input" type="radio" name="unique-name-he" id="unique-id-he2">
      <label for="unique-id-he2">Option 2</label>
      <input class="chi-picker__input" type="radio" name="unique-name-he" id="unique-id-he3">
      <label for="unique-id-he3">Option 3</label>
    </div>
  </div>
</fieldset>

<script>
  chi.popover(document.getElementById('example__help-button'));
<\/script>`
      }
    };
  }
})
export default class Help extends Vue {
  helpButton: any;

  mounted() {
    this.helpButton = chi.popover(this.$refs.helpButton as HTMLElement);
  } 

  beforeDestroy() {
    this.helpButton.dispose();
  }
}
</script>
