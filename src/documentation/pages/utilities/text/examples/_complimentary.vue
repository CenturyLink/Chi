<template lang="pug">
<ComponentExample padding="-p--0" title="Brand complimentary" id="brand-complimentary" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | More text colors that can be used to compliment the primary brand palette.
  template(#example)
    .chi-grid.-no-gutter
      .chi-col.-w--12.-p--1.-d--flex.-justify-content--center.-flex--wrap
        .-p--1.-p-sm--2.-text--center(v-for="className in ['navy', 'orange']")
          p.-text(:class="`-text--${className}`") -text--{{ className }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Complimentary extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    htmlblueprint: `<p class="-text--navy">-text--navy</p>
<p class="-text--orange">-text--orange</p>`,
  };
}
</script>
