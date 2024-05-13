<template lang="pug">
<ComponentExample title="Help" id="help" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use attribute <code>infoIcon</code> and <code>infoIconMessage</code> to include a help icon that displays helpful information in a popover.
  template(#example)
    chi-label(for="input-2", info-icon, info-icon-message="Changed helpful information") Label
    input#input-4-control.-sr--only

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<chi-label info-icon info-icon-message="Changed helpful information">Label</chi-label>`,
        htmlblueprint: `<div class="chi-label__wrapper">
  <label class="chi-label">Label</label>
  <div class="chi-label__help">
    <div class="chi-button -icon -xs -flat" id="example__help-button" aria-label="Help" data-target="#example__help-popover">
      <div class="chi-button__content">
        <i class="chi-icon icon-circle-info-outline" aria-hidden="true"></i>
      </div>
    </div>
    <section class="chi-popover chi-popover--bottom" id="example__help-popover" aria-modal="true" role="dialog">
      <div class="chi-popover__content">
        <p class="chi-popover__text">Helpful information goes here.</p>
      </div>
    </section>
  </div>
</div>

<script>chi.popover(document.getElementById('example__help-button'));<\/script>`,
      },
    };
  },
})
export default class Help extends Vue {}
</script>
