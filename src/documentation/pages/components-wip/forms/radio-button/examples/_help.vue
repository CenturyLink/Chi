<template lang="pug">
<ComponentExample title="Help" id="help" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover.
      | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
  template(#example)
    fieldset
      .chi-label__wrapper
        legend.chi-label Select an option
        .chi-label__help
          chi-button(id="example__help-button" type="icon" variant="flat" size="xs" aria-label="Help" @click="handlerClick")
            chi-icon(icon="circle-info-outline" size="xs" aria-hidden="true")
          chi-popover(ref="popover" id="example__help-popover" variant="text" arrow reference="#example__help-button" position="top")
            | Helpful information goes here
      .chi-form__item.-mb--1
        chi-radio-button(id="example__help_opt_1" label="Option 1" name="example__help-radios")
      .chi-form__item
        chi-radio-button(id="example__help_opt_2" label="Option 2" name="example__help-radios")
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
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      disabled: false,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <chi-button id="example__help-button" type="icon" variant="flat" size="xs" aria-label="Help">
        <chi-icon icon="circle-info-outline" size="xs" aria-hidden="true"></chi-icon>
      </chi-button>
      <chi-popover id="example__help-popover" variant="text" arrow reference="#example__help-button" position="top">
        Helpful information goes here
      </chi-popover>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <chi-radio-button id="example__help_opt_1" label="Option 1" name="radios"></chi-radio-button>
  </div>
  <div class="chi-form__item">
    <chi-radio-button id="example__help_opt_2" label="Option 2" name="radios"></chi-radio-button>
  </div>
</fieldset>

<script>
  var helpButton = document.getElementById("example__help-button");

  helpButton.addEventListener("click", () => {
    var popover = document.getElementById("example__help-popover");

    popover.toggle();
  });
<\/script>`,
    htmlblueprint: `<fieldset>
  <div class="chi-label__wrapper">
    <legend class="chi-label">Select an option</legend>
    <div class="chi-label__help">
      <button class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example___help-popover">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </button>
      <section class="chi-popover chi-popover--top -animated" id="example___help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top">
        <div class="chi-popover__content">
          <p class="chi-popover__text">Helpful information goes here.</p>
        </div>
      </section>
    </div>
  </div>
  <div class="chi-form__item -mb--1">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_1">
      <label class="chi-radio__label" for="example__help_opt_1">Option 1</label>
    </div>
  </div>
  <div class="chi-form__item">
    <div class="chi-radio">
      <input class="chi-radio__input" type="radio" name="radios" id="example__help_opt_2">
      <label class="chi-radio__label" for="example__help_opt_2">Option 2</label>
    </div>
  </div>
</fieldset>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`,
  };

  handlerClick() {
    const popover = this.$refs.popover;

    popover?.toggle();
  }
}
</script>
