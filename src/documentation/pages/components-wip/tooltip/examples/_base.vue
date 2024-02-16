<template lang="pug">
<ComponentExample title="Base" id="base" :tabs="exampleTabs">
  template(#example)
    button(data-tooltip='Your tooltip text on a button' ref="base").chi-button Hover me to see tooltip
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    .p--text(class="chi-tab__description")
      | To render a tooltip, apply the <code>data-tooltip</code> attribute to an element. Then
      | initialize it with the chi.tooltip factory method.
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Base extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'vue',
      label: 'Vue',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    vue: `<ChiTooltip message="Your tooltip text on a button">
  <button class="chi-button">Hover me to see tooltip</button>
</ChiTooltip>`,
    htmlblueprint: `<button id="tooltip-1" class="chi-button" data-tooltip="Your tooltip text on a button">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-1'));<\/script>
`,
  }
  mounted() {
    chi.tooltip(this.$refs.base);
  }
}
</script>
