<template lang="pug">
  <ComponentExample titleSize="h4" title="Required" id="required" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>required</code> boolean attribute to indicate which pickers must be completed before submitting a form.
    <Wrapper slot="example">
      fieldset
        legend.chi-label
          | Select options
          abbr.chi-label__required(title="Required field") *
        each i in [1, 2]
          .chi-picker
            input(type="checkbox", class="chi-picker__input", name=`unique-name-mre`, id=`unique-id-mre${i}`, required=(i === 1))
            label(for=`unique-id-mre${i}`)
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
  <legend class="chi-label">
    Select options
    <abbr class="chi-label__required" title="Required field">*</abbr>
  </legend>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre1" required>
    <label for="unique-id-mre1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mre" type="checkbox" id="unique-id-mre2">
    <label for="unique-id-mre2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Required extends Vue {}
</script>
