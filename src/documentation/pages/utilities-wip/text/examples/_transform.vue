<template lang="pug">
  <ComponentExample padding="-p--0" title="Text transform" id="text-transform" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text transform to lowercase, uppercase, or capitalize.
    .-m--3(slot="example")
      p.-text.-text--lowercase This text will render as lowercase
      p.-text.-text--uppercase This text will render as uppercase
      p.-text.-text--capitalize This text will render as capitalize
      p.-text.-text--capitalize-fl This text will convert UPPERCASE TEXT to lowercase and capitalize the first letter
      p.-text.-text--no-transform This text will render with no transform
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Transform extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: '<p class="-text--lowercase">This text will render as lowercase</p>\n' +
        '<p class="-text--uppercase">This text will render as uppercase</p>\n' +
        '<p class="-text--capitalize">This text will render as capitalize</p>\n' +
        '<p class="-text--capitalize-fl">This text will convert UPPERCASE TEXT to lowercase and capitalize the first letter</p>\n' +
        '<p class="-text--no-transform">This text will render with no transform</p>'
    };
  }
}
</script>
