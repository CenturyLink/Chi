<template lang="pug">
  <ComponentExample titleSize="h2" title="Icon buttons" id="icon-buttons-portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | For interfaces with limited space, an Icon button can
      | be used for common actions such as editing, deleting, closing, etc.
    template(#example)
      .-d--flex
        chi-button.-ml--2(variant='flat' type='icon' alternative-text='Edit' ref="edit" data-tooltip='Edit')
          chi-icon(icon='edit')
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
export default class IconButtonPortal extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: `<chi-button variant="flat" type="icon" alternative-text="Button action" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
    htmlblueprint: `<button class="chi-button -icon -flat" aria-label="Button action" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
  }
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.edit as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
