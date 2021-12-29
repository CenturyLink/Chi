<template lang="pug">
  <ComponentExample titleSize="h4" title="Checked" id="checked" :tabs="exampleTabs" padding="-p--4">
    p.-text(slot="example-description")
      | Use the <code>checked</code> boolean attribute to set the default value of
      | a picker input to true.
    <Wrapper slot="example">
      fieldset
        legend.chi-label Select options
        each i in [1, 2]
          .chi-picker
            input(type="checkbox", class="chi-picker__input", name=`unique-name-mch`, id=`unique-id-mch${i}`, checked=(i === 1))
            label(for=`unique-id-mch${i}`)
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
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch1" checked>
    <label for="unique-id-mch1">Option 1</label>
  </div>
  <div class="chi-picker">
    <input class="chi-picker__input" name="unique-name-mch" type="checkbox" id="unique-id-mch2">
    <label for="unique-id-mch2">Option 2</label>
  </div>
</fieldset>`
      }
    };
  }
})
export default class Checked extends Vue {}
</script>
