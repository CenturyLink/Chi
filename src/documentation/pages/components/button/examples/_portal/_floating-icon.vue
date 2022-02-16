<template lang="pug">
  <ComponentExample titleSize="h4" title="Floating icon buttons" id="floating-icon-portal" :tabs="exampleTabs">
    .chi-form__item(slot="example")
      .-d--flex
        div.-pr--2
          chi-button(color='primary' type='float' size='lg' alternative-text='Chat with Support' ref='chat' data-tooltip='Chat with Support')
            chi-icon(icon='chat')
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
        webcomponent: `<chi-button type="float" color="primary" size="lg" alternative-text="Chat with Support" data-tooltip="Chat with Support">
  <chi-icon icon="chat"></chi-icon>
</chi-button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
        htmlblueprint: `<button class="chi-button -primary -lg -float" aria-label="Chat with Support" data-tooltip="Chat with Support">
  <div class="chi-button__content">
    <i class="chi-icon icon-chat" aria-hidden="true"></i>
  </div>
</button>

<!-- Tooltip -->
<script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`,
      },
    };
  },
})
export default class FloatingIconPortal extends Vue {
  tooltip: any;

  mounted() {
    this.tooltip = chi.tooltip(this.$refs.chat as HTMLElement);
  }

  beforeDestroy() {
    this.tooltip.dispose();
  }
}
</script>
