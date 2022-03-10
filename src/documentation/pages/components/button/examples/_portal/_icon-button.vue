<template lang="pug">
  <ComponentExample titleSize="h2" title="Icon buttons" id="icon-buttons-portal" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | For interfaces with limited space, an Icon button can
      | be used for common actions such as editing, deleting, closing, etc.
    .-d--flex(slot="example")
      chi-button.-ml--2(variant='flat' type='icon' alternative-text='Edit' ref="edit" data-tooltip='Edit')
        chi-icon(icon='edit')
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
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
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
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
      },
    };
  },
})
export default class IconButtonPortal extends Vue {
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.edit as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
