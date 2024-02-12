<template lang="pug">
  <ComponentExample titleSize="h2" title="Icon buttons" id="icon-button-lumen-centurylink" :tabs="exampleTabs">
    template(#example-description)
      p.-text
      | For interfaces with limited space, an Icon button can
      | be used for common actions such as editing, deleting, closing, etc.
    template(#example)
      chi-button(type='icon' alternative-text='Edit' ref='edit' data-tooltip='Edit')
        chi-icon(icon='edit')
      chi-button.-ml--2(variant='flat' type='icon' alternative-text='Edit' ref='editFlat' data-tooltip='Edit')
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
export default class IconButtonLumenCenturyLink extends Vue {
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
    webcomponent: `<!-- base -->
<chi-button type="icon" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- flat -->
<chi-button variant="flat" type="icon" alternative-text="Edit" data-tooltip="Edit">
  <chi-icon icon="edit"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
    htmlblueprint: `<!-- base -->
<button class="chi-button -icon" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- flat -->
<button class="chi-button -icon -flat" aria-label="Edit" data-tooltip="Edit">
  <div class="chi-button__content">
    <i class="chi-icon icon-edit" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
  }
  tooltip: any;
  tooltipFlat: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.edit as HTMLElement);
    this.tooltipFlat = chi.tooltip(this.$refs.editFlat as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
    this.tooltipFlat.dispose();
  }
}
</script>
