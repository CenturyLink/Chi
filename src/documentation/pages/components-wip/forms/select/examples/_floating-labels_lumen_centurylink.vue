<template lang="pug">
<ComponentExample title="Floating labels" id="floating-labels-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Floating labels are a solution to keep the placeholder visible when no label is attached to the select.
      | Chi only supports floating labels on <code>-lg</code> and <code>-xl</code> selects.
  template(#example)
    .chi-col.-w--12.-p--2(v-for="size in sizes")
      .chi-input__wrapper.-floating-label(style="max-width:20rem" :ref="`label-${size}`")
        select(:class="`chi-select -${size}`" :id="`floating-label-select-${size}`")
          option
          option Option 1
          option Option 2
          option Option 3
        label(:for="`floating-label-select-${size}`") Placeholder text

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class FloatingLabelsLumenCenturyLink extends Vue {
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
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-lg">Placeholder text</label>
</div>

<div id="floating-label-xl" class="chi-input__wrapper -floating-label">
  <select class="chi-select -xl" id="floating-label-select-xl">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-select-xl">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`,
  };
  floatingLabels: any[] = [];
  sizes = ['lg', 'xl'];

  mounted() {
    this.sizes.forEach((size: string) => {
      this.floatingLabels.push(chi.floatingLabel(this.$refs[`label-${size}`]));
    });
  }

  beforeDestroy() {
    this.floatingLabels.forEach((floatingLabel: any) => {
      floatingLabel[0].dispose();
    });
  }
}
</script>
