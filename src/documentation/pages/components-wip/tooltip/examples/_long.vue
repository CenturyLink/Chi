<template lang="pug">
<ComponentExample title="Long Tooltips" id="long" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Long Tooltips will be truncated on the fourth line. To display text beyond four lines,
      | use the <a href="/components/popover">Popover</a> component
  template(#example)
    button(data-tooltip='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et interdum purus. ' +
    'Curabitur varius libero, vel hendrerit enim tincidunt sit amet. Ut eros purus, semper nec ipsum et, ' +
      'maximus faucibus suscipit nibh.' ref="long").chi-button.-mr--2.-mb--2.-mb-md--0 Hover me to see tooltip
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class Long extends Vue {
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
  ];
  codeSnippets = {
    webcomponent: ``,
    vue: `<ChiTooltip message="Lorem ipsum...">
  <button class="chi-button">Hover me to see tooltip</button>
</ChiTooltip>`,
    htmlblueprint: `<button class="chi-button" data-tooltip="Lorem ipsum...">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('data-tooltip'));<\/script>`,
  };
  mounted() {
    chi.tooltip(this.$refs.long);
  }
}
</script>
