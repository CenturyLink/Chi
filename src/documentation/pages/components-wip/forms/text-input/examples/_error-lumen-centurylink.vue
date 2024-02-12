<template lang="pug">
  <ComponentExample title="Error" id="error-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | Use the <code>danger</code> state to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
    template(#example)
      .chi-grid
        .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
          .chi-form__item
            chi-label(for="example__danger") Name
            chi-text-input(
              id="example__danger"
              state="danger"
              )
            .chi-label.-status.-danger Please enter a name.
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
        webcomponent: `<div class="chi-form__item">
  <chi-label for="example__danger">Name</chi-label>
  <chi-text-input id="example__danger" state="danger"></chi-text-input>
  <div class="chi-label -status -danger">Please enter a name.</div>
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <label class="chi-label" for="example__danger">Name</label>
  <input type="text" class="chi-input -danger" id="example__danger">
  <div class="chi-label -status -danger">Please enter a name.</div>
</div>`,
      },
    };
  },
})
export default class ErrorLumenCenturyLink extends Vue {}
</script>
