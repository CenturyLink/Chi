<template lang="pug">
<ComponentExample padding="-p--0" title="Text transform" id="text-transform" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Change text transform to lowercase, uppercase, or capitalize.
  template(#example)
    .-m--3
      p.-text(v-for="({ name, value }) in transforms", :class="`-text--${ name }`") This text will {{ value }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Transform extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  transforms = [
    { name: 'lowercase', value: 'render as lowercase' },
    { name: 'uppercase', value: 'render as uppercase' },
    { name: 'capitalize', value: 'render as capitalize' },
    { name: 'capitalize-fl', value: 'convert UPPERCASE TEXT to lowercase and capitalize the first letter' },
    { name: 'italic', value: 'render as italic' },
    { name: 'no-transform', value: 'render with no transform' },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.transforms.map(({ name, value }) => `<p class="-text--${name}">This text will ${value}</p>`).join('\n');
  }
}
</script>
