<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  <Wrapper slot='example'>
    input#unique-id-di1.chi-file-input(
      type='file',
      aria-label='Choose file',
      disabled
    )
    label(for='unique-id-di1') No file chosen
  </Wrapper>
  <pre class="language-html" slot='code-webcomponent'>
    <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
  </pre>
  .chi-tab__description.-text--grey(slot='code-htmlblueprint')
    | This HTML Blueprint requires JavaScript to update the label
    | content once a file or files have been selected.
    | You may use your own JavaScript solution, or use Chi's example below.
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
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
        webcomponent: ``,
        htmlblueprint: `<input type="file" class="chi-file-input" id="unique-id-di1" aria-label="Choose file" disabled>
<label for="unique-id-di1">No file chosen</label>

<script>
var inputFiles = document.querySelectorAll('input[type="file"].chi-file-input');

Array.prototype.forEach.call(inputFiles, function(input) {
  var label = input.nextElementSibling;

  input.addEventListener('change', function(e) {
    var fileName = '';

    if (this.files && this.files.length > 1) {
      fileName = this.files.length + ' files selected';
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) {
      label.innerHTML = fileName;
    }
  });
});
<\/script>`
      }
    };
  }
})
export default class Disabled extends Vue {
  mounted() {}
}
</script>
