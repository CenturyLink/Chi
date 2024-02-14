<template lang="pug">
  <ComponentExample title="Help" id="help" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use <code>chi-label__help</code> to include a help icon that displays helpful information about an input in a popover.
        | A help icon must be contained within an icon button to ensure it receives focus when a user tabs through a form.
    template(#example)
      .chi-form__item(style="max-width:20rem")
        .chi-label__wrapper
          label(class="chi-label" for="example-he1") Label
          .chi-label__help
            button(class="chi-button -icon -xs -flat" ref="helpButton" aria-label="Help" data-target="#example__help-popover")
              i(class="chi-icon icon-circle-info-outline" aria-hidden="true")
            section(class="chi-popover chi-popover--top -animated" id="example__help-popover" aria-modal="true" role="dialog" aria-hidden="true" x-placement="top")
              .chi-popover__content
                p(class="chi-popover__text") Helpful information goes here.
        select(class="chi-select" id="example-he1")
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
    htmlblueprint: `<div class="chi-form__item">
  <div class="chi-label__wrapper">
    <label class="chi-label" for="example-he1">Label</label>
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
  <select class="chi-select" id="example-he1">
    <option value="">- Select -</option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`,
  }
  popover: any;

  mounted() {
    this.popover = chi.popover(this.$refs.helpButton as HTMLElement);
  }

  beforeDestroy() {
    this.popover.dispose();
  }
}
</script>
