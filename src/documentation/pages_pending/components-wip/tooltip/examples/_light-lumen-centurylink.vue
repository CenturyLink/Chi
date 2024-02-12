<template lang="pug">
  <ComponentExample title="Light" id="light-lumen-centurylink" padding="-p--0" :tabs="exampleTabs">
    template(#example-description)
      p.-text
        | Use light tooltips for rendering tooltips on dark backgrounds.
    template(#example)
      .-bg--black
        .-p--3
          button.-outline.-light(data-tooltip='Your tooltip text on a button' data-tooltip-color='light' ref="light").chi-button Hover me to see tooltip
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-vue)
      Copy(lang="html" :code="codeSnippets.vue" class="html")
    template(#code-htmlblueprint)
      .p--text(class="chi-tab__description")
        | To use, apply the <code>data-tooltip-color="light"</code> attribute to the Tooltip trigger element.
      <JSNeeded />
      Copy(lang="html" :code="codeSnippets.htmlblueprint")

  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class LightLumenCenturyLink extends Vue {
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
    vue: `<ChiTooltip message="Your tooltip text on a button" color="light">
  <button class="chi-button -outline -light">Hover me to see tooltip</button>
</ChiTooltip>`,
    htmlblueprint: `<button id="tooltip-2" class="chi-button -outline -light" data-tooltip="Your tooltip text on a button" data-tooltip-color="light">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('tooltip-2'));<\/script>`,
  }
  mounted() {
    chi.tooltip(this.$refs.light);
  }
}
</script>
