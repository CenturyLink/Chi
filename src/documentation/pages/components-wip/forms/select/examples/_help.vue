<template lang="pug">
<ComponentExample title="Help" id="help" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use <code>chi-label</code>'s attributes <code>infoIcon</code> and <code>infoIconMessage</code> to include a help icon that displays helpful information in a popover.
  template(#example)
    .chi-form__item(style="max-width:20rem")
      chi-label(for="example__help" info-icon info-icon-message="Helpful information goes here.") Label
      select(class="chi-select" id="example__help")
        option(value="") - Select -
        option Option 1
        option Option 2
        option Option 3
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
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<div class="chi-form__item">
  <chi-label for="example__help" info-icon info-icon-message="Helpful information goes here.">Label</chi-label>
  <select class="chi-select" id="example__help">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>`,
    htmlblueprint: `<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example__help">Label</label>
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
  <select class="chi-select" id="example__help">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`,
  };
  popover: any;

  mounted() {
    this.popover = chi.popover(this.$refs.helpButton as HTMLElement);
  }

  beforeDestroy() {
    this.popover.dispose();
  }
}
</script>
