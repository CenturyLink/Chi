<template lang="pug">
<ComponentExample titleSize="h3" title="Floating icon buttons" id="floating-icon-lumen-centurylink" :tabs="exampleTabs">
  template(#example)
    .-d--flex
      div.-pr--2
        chi-button(color='primary' type='float' size='xl' alternative-text='Chat with Support' ref='chat' data-tooltip='Chat with Support')
          chi-icon(icon='chat')
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
export default class FloatingIconLumenCenturyLink extends Vue {
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
    webcomponent: `<chi-button type="float" color="primary" size="xl" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>`,
    htmlblueprint: `<button class="chi-button -primary -xl -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>`,
  }
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.chat as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
