<template lang="pug">
  <ComponentExample title="Checkbox" id="checkbox" :tabs="exampleTabs" padding="-p--4">
    fieldset(slot="example")
      legend.chi-label Legend
      each i in [1, 2]
        .chi-picker
          input(type="checkbox", class="chi-picker__input", name=`unique-name-sch`, id=`unique-id-sch${i}`, checked=(i === 1))
          label(for=`unique-id-sch${i}`)
            div.chi-form__item.-row
              span.chi-picker__checkbox
              span.chi-picker__label
                = 'Option ' + `${i}`
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
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
</fieldset>`
      }
    };
  }
})
export default class Checkbox extends Vue {}
</script>
