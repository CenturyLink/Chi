<template lang="pug">
  <ComponentExample titleSize="h2" title="Sizes" id="sizes-portal" :tabs="exampleTabs">
    template(#example-description)
      p.-text(class="-mb--3 -text")
        | Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), and Large (lg).
        | The default size is <code>md</code>.
    template(#example)
      div(v-for="size in sizes")
        p.-text--bold.-pl--2 {{size}}
        div(class=`chi-col -w--12 -pb--2 -mr--0 -d--flex`)
          .-pr--2
            chi-button(:size='size', color='primary') Button
          .-pr--2
            chi-button(:size='size') Button
          .-pr--2
            chi-button(:size='size' variant='flat' type='icon' alternative-text='Button action' :ref="`Button-${size}`" data-tooltip='Button action' data-position='bottom')
              chi-icon(icon='atom')
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class SizesPortal extends Vue {
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
  sizes: ['xs', 'sm', 'md', 'lg']
  codeSnippets = {
    webcomponent: `<!-- xs -->
<chi-button color="primary" size="xs">Button</chi-button>
<chi-button size="xs">Button</chi-button>
<chi-button type="icon" variant="flat" size="xs" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button color="primary" size="sm">Button</chi-button>
<chi-button size="sm">Button</chi-button>
<chi-button type="icon" variant="flat" size="sm" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button color="primary" size="md">Button</chi-button>
<chi-button size="md">Button</chi-button>
<chi-button type="icon" variant="flat" size="md" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button color="primary" size="lg">Button</chi-button>
<chi-button size="lg">Button</chi-button>
<chi-button type="icon" variant="flat" size="lg" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
    htmlblueprint: `<!-- xs -->
<button class="chi-button -primary -xs">Button</button>
<button class="chi-button -xs">Button</button>
<button class="chi-button -flat -xs -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -primary -sm">Button</button>
<button class="chi-button -sm">Button</button>
<button class="chi-button -flat -sm -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -primary -md">Button</button>
<button class="chi-button -md">Button</button>
<button class="chi-button -flat -md -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -primary -lg">Button</button>
<button class="chi-button -lg">Button</button>
<button class="chi-button -flat -lg -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
  }
  tooltipTexts: any[] = [];
  sizes = ['xs', 'sm', 'md', 'lg'];

  mounted() {
    this.sizes.forEach((size: string) => {
      this.tooltipTexts.push(chi.tooltip(this.$refs[`Button-${size}`] as HTMLElement));
    });
  }

  beforeDestroy() {
    this.tooltipTexts.forEach((tooltipText: any) => {
      tooltipText[0].dispose();
    });
  }
}
</script>
