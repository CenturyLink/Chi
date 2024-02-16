<template lang="pug">
<ComponentExample title="Disabled" id="disabled" :tabs="exampleTabs">
  template(#example)
    input#unique-id-di1.chi-file-input(
      type='file',
      aria-label='Choose file',
      disabled
    )
    label(for='unique-id-di1') No file chosen

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")

  template(#code-htmlblueprint)
    .chi-tab__description.-text--grey
      | This HTML Blueprint requires JavaScript to update the label
      | content once a file or files have been selected.
      | You may use your own JavaScript solution, or use Chi's example below.
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
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
<\/script>`,
      },
    };
  },
})
export default class Disabled extends Vue { }
</script>
