<template lang="pug">
  <ComponentExample padding="-p--0" title="Text transform" id="text-transform" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text transform to lowercase, uppercase, or capitalize.
    .-m--3(slot="example")
      p.-text(v-for="({ name, value }) in transforms", :class="`-text--${ name }`") This text will {{ value }}
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
  transforms = [
    { name: 'lowercase', value: 'render as lowercase' },
    { name: 'uppercase', value: 'render as uppercase' },
    { name: 'capitalize', value: 'render as capitalize' },
    { name: 'capitalize-fl', value: 'convert UPPERCASE TEXT to lowercase and capitalize the first letter' },
    { name: 'italic', value: 'render as italic' },
    { name: 'no-transform', value: 'render with no transform' },
  ]

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.transforms
      .map(({ name, value }) => `<p class="-text--${ name }">This text will ${ value }</p>`)
      .join('\n');
  }
}
</script>
