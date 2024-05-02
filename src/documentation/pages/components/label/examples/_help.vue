<template lang="pug">
<ComponentExample title="Help" id="help" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use attribute <code>infoIcon</code> and <code>infoIconMessage</code> to include a help icon that displays helpful information in a popover.
  template(#example)
    chi-label(for="input-2", info-icon) Label
    input#input-2-control.-sr--only
    chi-label(for="input-2", info-icon, info-icon-message="Changed helpful information") Label
    input#input-3-control.-sr--only

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
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
        webcomponent: `<!-- Info Icon -->
<chi-label info-icon>Label</chi-label>

<!-- Info Icon Message -->
<chi-label info-icon, info-icon-message="Changed helpful information">Label</chi-label>`,
        htmlblueprint: `<label class="chi-label">
  Label
  <div class="chi-label__help">
    <chi-button id="example__help-button" type="icon" size="xs" variant="flat" alternative-text="Help">
      <chi-icon icon="circle-info-outline"></chi-icon>
    </chi-button>
    <chi-popover id="example__help-popover" position="top" variant="text" arrow reference="#example__help-button">
      Helpful information goes here.
    </chi-popover>
  </div>
</label>`,
      },
    };
  },
})
export default class Help extends Vue {}
</script>
