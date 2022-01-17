<template lang="pug">
  <ComponentExample title="Floating labels" id="floating-labels-portal" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Floating labels are a solution to keep the placeholder visible when no label is attached to the select.
    <Wrapper slot="example">
      .chi-col.-w--12.-p--2
        .chi-input__wrapper.-floating-label(id="floating-label-md" style="max-width:20rem")
          select(class="chi-select -md" id="floating-label-select-md")
            option
            option Option 1
            option Option 2
            option Option 3
          label(for="floating-label-select-md") Placeholder text
        
      .chi-col.-w--12.-p--2
        .chi-input__wrapper.-floating-label(id="floating-label-lg" style="max-width:20rem")
          select(class="chi-select -lg" id="floating-label-select-lg")
            option
            option Option 1
            option Option 2
            option Option 3
          label(for="floating-label-select-lg") Placeholder text
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>   
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

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
        htmlblueprint: `<div id="floating-label-md" class="chi-input__wrapper -floating-label">
  <select class="chi-select -md" id="floating-label-portal-select-md">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-md">Placeholder text</label>
</div>

<div id="floating-label-lg" class="chi-input__wrapper -floating-label">
  <select class="chi-select -lg" id="floating-label-portal-select-lg">
    <option></option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <label for="floating-label-portal-select-lg">Placeholder text</label>
</div>

<script>chi.floatingLabel(document.querySelectorAll('.-floating-label'));<\/script>`
      }
    };
  }
})
export default class FloatingLabelsPortal extends Vue {
  mounted() {
    chi.floatingLabel(document.querySelectorAll('.-floating-label'));
  }
}
</script>
