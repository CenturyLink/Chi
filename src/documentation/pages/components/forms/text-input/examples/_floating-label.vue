<template lang="pug">
  <ComponentExample title="Floating Label" id="floating-label" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use floating labels to keep the placeholder visible when no label is attached to the input.
      | <strong>Note:</strong> Chi only supports floating labels on <code>-md</code>, <code>-lg</code> and <code>-xl</code> inputs.
    .chi-grid(slot="example")
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-grid
          div(class=`chi-col -w--12 -mb--2` v-for="size in sizes")
            .chi-input__wrapper.-floating-label(:ref="`floating-label-${size}`")
              input(type="text", :class="`chi-input -${size}`", :id="`floating-label-${size}`")
              label(:for="`floating-label-${size}`") Placeholder text
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

@Component({
  data: () => {
    return {
      sizes: ['md', 'lg', 'xl'],
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
        htmlblueprint: `<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -md" type="text" id="floating-label-md">
  <label for="floating-label-md">Placeholder text</label>
</div>

<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -lg" type="text" id="floating-label-lg">
  <label for="floating-label-lg">Placeholder text</label>
</div>

<div class="chi-input__wrapper -floating-label">
  <input class="chi-input -xl" type="text" id="floating-label-xl">
  <label for="floating-label-xl">Placeholder text</label>
</div>

<script>
  chi.floatingLabel(document.querySelectorAll('.-floating-label'));
<\/script>`
      }
    };
  }
})
export default class FloatingLabel extends Vue {
  mounted() {
    this.$data.sizes.forEach((size: string) => {
      chi.floatingLabel(this.$refs[`floating-label-${size}`]);
    });
  }
}
</script>
