<template lang="pug">
  <ComponentExample title="Light" id="base" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Use light tooltips for rendering tooltips on dark backgrounds. 
    .-bg--black(slot="example")
      .-p--3
        button.-outline.-light(data-tooltip='Your tooltip text on a button' data-tooltip-color='light').chi-button Hover me to see tooltip
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
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
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'vue',
          label: 'Vue',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        vue: `<ChiTooltip message="Your tooltip text on a button">
  <button class="chi-button">Hover me to see tooltip</button>
</ChiTooltip>`,
        htmlblueprint: `<button id="tooltip-2" class="chi-button -outline -light" data-tooltip="Your tooltip text on a button" data-tooltip-color="light">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-2'));<\/script>`,
      },
    };
  },
})
export default class LightTooltip extends Vue {
  mounted() {
    setTimeout(function() {
      chi.tooltip(document.querySelectorAll('[data-tooltip]'));
    }, 1000);
  }
}
</script>
