<template lang="pug">
<ComponentExample titleSize="h4" title="Help" id="help" :tabs="exampleTabs" padding="-p--4">
  template(#example-description)
    p.-text
      | Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover.
      | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
  template(#example)
    fieldset
      .chi-label__wrapper
        legend.chi-label Select options
        .chi-label__help
          button.chi-button.-icon.-xs.-flat(ref="button" aria-label="Help" data-target="#example__help-popover")
            i.chi-icon.icon-circle-info-outline(aria-hidden="true")
          section.chi-popover.chi-popover--top(id="example__help-popover" aria-modal="true" role="dialog")
            .chi-popover__content
              p.chi-popover__text
                | Helpful information goes here.
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-mhe`, id=`unique-id-mhe${i}`)
          label(for=`unique-id-mhe${i}`)
            = 'Option ' + `${i}`
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Help extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select options</legend>
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
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mhe" type="checkbox" id="unique-id-mhe1">
    <label for="unique-id-mhe1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mhe" type="checkbox" id="unique-id-mhe2">
    <label for="unique-id-mhe2">Option 2</label>
  </div>
</fieldset>

<script>
  chi.popover(document.getElementById('example__help-button'));
<\/script>`,
  }
  mounted() {
    chi.popover(this.$refs.button);
  }
}
</script>
