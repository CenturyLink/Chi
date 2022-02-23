<template lang="pug">
  <ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
    .p-text(slot="example-description" class="-mb--3 -text")
      | Buttons support the following sizes: Extra Small (xs), Small (sm), Medium (md), Large (lg), and Extra Large (xl).
      | The default size is <code>md</code>.
    div(slot="example" v-for="size in sizes")
      p.-text--bold.-pl--2 {{size}}
      div(class=`chi-col -w--12 -pb--2 -mr--0 -d--flex`)
        chi-button(:size='size') Button
        chi-button.-ml--2(:size='size' type='icon' alternative-text='Button action' data-tooltip='Button action' data-position='bottom')
          chi-icon(icon='atom')
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      codeSnippets: {
        webcomponent: `<!-- xs -->
<chi-button size="xs">Button</chi-button>
<chi-button type="icon" size="xs" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- sm -->
<chi-button size="sm">Button</chi-button>
<chi-button type="icon" size="sm" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- md -->
<chi-button size="md">Button</chi-button>
<chi-button type="icon" size="md" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- lg -->
<chi-button size="lg">Button</chi-button>
<chi-button type="icon" size="lg" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom"></chi-icon>
</chi-button>

<!-- xl -->
<chi-button size="xl">Button</chi-button>
<chi-button type="icon" size="xl" alternative-text="Button action" data-tooltip="Button action" data-position="bottom">
  <chi-icon icon="atom" />
</chi-button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
        htmlblueprint: `<!-- xs -->
<button class="chi-button -xs">Button</button>
<button class="chi-button -xs -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- sm -->
<button class="chi-button -sm">Button</button>
<button class="chi-button -sm -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- md -->
<button class="chi-button -md">Button</button>
<button class="chi-button -md -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- lg -->
<button class="chi-button -lg">Button</button>
<button class="chi-button -lg -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- xl -->
<button class="chi-button -xl">Button</button>
<button class="chi-button -xl -icon" aria-label="Button action" data-tooltip="Button action" data-position="bottom">
  <div class="chi-button__content">
    <i class="chi-icon icon-atom" aria-hidden="true"></i>
  </div>
</button>

<!-- Icon button tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
      },
    };
  },
})
export default class SizesHorizontalLumenCenturyLink extends Vue {}
</script>
