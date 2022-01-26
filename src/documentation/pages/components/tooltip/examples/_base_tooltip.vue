<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    button(data-tooltip='Your tooltip text on a button' slot="example").chi-button Hover me to see tooltip
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .p--text(class="chi-tab__description")
        | To render a tooltip, apply the <code>data-tooltip</code> attribute to an element. Then
        | initialize it with the chi.tooltip factory method.
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
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        vue: `<ChiTooltip message="Your tooltip text on a button">
  <button class="chi-button">Hover me to see tooltip</button>
</ChiTooltip>`,
        htmlblueprint: `<button id="tooltip-1" class="chi-button" data-tooltip="Your tooltip text on a button">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-1'));<\/script>
`,
      },
    };
  },
})
export default class Base extends Vue {
  mounted() {
    chi.tooltip(document.querySelectorAll('[data-tooltip]'));
  }
}
</script>
