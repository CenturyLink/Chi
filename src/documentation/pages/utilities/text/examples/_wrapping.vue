<template lang="pug">
<ComponentExample padding="-p--0" title="Text wrapping" id="text-wrapping" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Prevent text wrapping with nowrap or control overflow with truncate.
  template(#example)
    .-m--3
      p.-text.-text--nowrap(style="width: 11rem; background:#eeeeee;") This text will render without wrapping
      p.-text.-text--truncate(style="width: 11rem;") This text will truncate with an ellipsis
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Wrapping extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    htmlblueprint: `<p class="-text--nowrap">This text will render without wrapping</p>
<p class="-text--truncate">This text will truncate with an ellipsis</p>`,
  };
}
</script>
