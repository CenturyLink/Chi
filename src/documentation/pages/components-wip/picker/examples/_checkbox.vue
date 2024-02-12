<template lang="pug">
<ComponentExample title="Checkbox" id="checkbox" :tabs="exampleTabs" padding="-p--4">
  template(#example)
    fieldset
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-sch`, id=`unique-id-sch${i}`, checked=(i === 1))
          label(for=`unique-id-sch${i}`)
            div.chi-form__item.-row
              span.chi-picker__checkbox
              span.chi-picker__label
                = 'Option ' + `${i}`
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Legend</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sch" type="checkbox" id="unique-id-sch1" />
    <label for="unique-id-sch1">
      <div class="chi-form__item -row">
        <span class="chi-picker__checkbox"></span>
        <span class="chi-picker__label">Option 1</span>
      </div>
    </label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-sch" type="checkbox" id="unique-id-sch2" />
    <label for="unique-id-sch2">
      <div class="chi-form__item -row">
        <span class="chi-picker__checkbox"></span>
        <span class="chi-picker__label">Option 2</span>
      </div>
    </label>
  </div>
</fieldset>`,
      },
    };
  },
})
export default class Checkbox extends Vue {}
</script>
