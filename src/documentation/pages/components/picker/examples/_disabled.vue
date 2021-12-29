<template lang="pug">
  <ComponentExample titleSize="h4" title="Disabled" id="disabled" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>disabled</code> boolean attribute to prevent users from interacting with a picker input.
      | Disabled inputs are not submitted with the form and can not receive any browsing events such as mouse clicks or focus.
    <Wrapper slot="example">
      fieldset
        legend.chi-label Select options
        each i in [1, 2, 3]
          .chi-picker
            input(type="checkbox", class="chi-picker__input", name=`unique-name-mdi`, id=`unique-id-mdi${i}`, disabled=(i === 3))
            label(for=`unique-id-mdi${i}`)
              = 'Option ' + `${i}`
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<fieldset>
  <legend class="chi-label">Select options</legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi1">
    <label for="unique-id-mdi1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi2">
    <label for="unique-id-mdi2">Option 2</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mdi" type="checkbox" id="unique-id-mdi3" disabled>
    <label for="unique-id-mdi3">Option 3</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Disabled extends Vue {}
</script>
