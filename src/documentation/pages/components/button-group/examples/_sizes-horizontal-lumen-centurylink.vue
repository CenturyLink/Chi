<template lang="pug">
<ComponentExample titleSize="h4" title="Horizontal" id="sizes-horizontal-lumen-centurylink" :tabs="exampleTabs">
  template(#example)
    div(v-for="size in sizes")
      p.-text--bold -{{size}}
      .-d--flex.-flex--wrap
        .chi-button-group
          button(:class="`chi-button -${size}`"  v-for="item in Array(3).fill(0)") Button
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class SizesHorizontalLumenCenturyLink extends Vue {
  exampleTabs = [
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
  ];
  sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<!-- xs -->
<div class="chi-button-group">
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
  <button class="chi-button -xs">Button</button>
</div>
<!-- sm -->
<div class="chi-button-group">
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
  <button class="chi-button -sm">Button</button>
</div>
<!-- md -->
<div class="chi-button-group">
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
  <button class="chi-button -md">Button</button>
</div>
<!-- lg -->
<div class="chi-button-group">
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
  <button class="chi-button -lg">Button</button>
</div>
<!-- xl -->
<div class="chi-button-group">
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
  <button class="chi-button -xl">Button</button>
</div>`,
  };
}
</script>
