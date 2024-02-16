<template lang="pug">
<ComponentExample title="Tooltip on disabled buttons" id="disabled" :tabs="exampleTabs">
  template(#example)
    span#tooltip-disabled-button(data-tooltip='Tooltip message for a disabled button' ref="disabled")
      button(disabled).chi-button Hover me to see tooltip
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    .p--text(class="chi-tab__description")
      | When a button element is in disabled state, <code>mouseenter</code> and <code>mouseleave</code> events
      | are not being triggered. Wrap the disabled button in a <code>span</code> element, providing the attribute <code>data-tooltip=""</code>
      | to achieve the same behavior.
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Disabled extends Vue {
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
    vue: `<ChiTooltip message="Tooltip message for a disabled button">
  <span>
    <button class="chi-button" disabled>Hover me to see tooltip</button>
  </span>
</ChiTooltip>`,
    htmlblueprint: `<span data-tooltip="Tooltip message for a disabled button" id="tooltip-disabled-button">
  <button class="chi-button" disabled>Hover me to see tooltip</button>
</span>

<script>chi.tooltip(document.getElementById('tooltip-disabled-button'));<\/script>`,
  }
  mounted() {
    chi.tooltip(this.$refs.disabled);
  }
}
</script>
