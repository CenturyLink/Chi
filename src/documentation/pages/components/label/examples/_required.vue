<template lang="pug">
<ComponentExample title="Required / Optional" id="required" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use attribute <code>required</code> or <code>optional</code> if you need to indicate required / optional fields.
  template(#example)
    chi-label(for="input-2", required) Label
    input#input-2-control.-sr--only
    chi-label(for="input-3", optional) Label
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
        webcomponent: `<!-- Required -->
<chi-label required>Label</chi-label>

<!-- Optional -->
<chi-label optional>Label</chi-label>`,
        htmlblueprint: `<!-- Required -->
<label class="chi-label">
  Label
  <abbr class="chi-label__required" aria-label="Required field">*</abbr>
</label>

<!-- Optional -->
<label class="chi-label">
  Label
  <abbr class="chi-label__optional" aria-label="Optional field">(optional)</abbr>
</label>`,
      },
    };
  },
})
export default class Required extends Vue {}
</script>
