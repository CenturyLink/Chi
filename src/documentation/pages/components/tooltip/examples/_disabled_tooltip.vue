<template lang="pug">
  <ComponentExample title="Tooltip on disabled buttons" id="disabledButton" padding="-p--0" :tabs="exampleTabs">
    .-p--3(slot="example")
      span#tooltip-disabled-button(data-tooltip='Tooltip message for a disabled button')
        button(disabled).chi-button Hover me to see tooltip
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .p--text(class="chi-tab__description")
        | When a button element is in disabled state, <code>mouseenter</code> and <code>mouseleave</code> events
        | are not being triggered. Wrap the disabled button in a <code>span</code> element, providing the attribute <code>data-tooltip=""</code>
        | to achieve the same behavior.
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: true,
          id: 'vue',
          label: 'Vue',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        vue: `<ChiTooltip message="Tooltip message for a disabled button">
  <span>
    <button class="chi-button" disabled>Hover me to see tooltip</button>
  </span>
</ChiTooltip>`,
        htmlblueprint: `<span data-tooltip="Tooltip message for a disabled button" id="tooltip-disabled-button"><button class="chi-button" disabled>Hover me to see tooltip</button></span>

<script>chi.tooltip(document.getElementById('tooltip-disabled-button'));<\/script>`,
      },
    };
  },
})
export default class DisabledTooltip extends Vue {
  mounted() {
    setTimeout(() => {
      chi.tooltip(document.querySelectorAll('[data-tooltip]'));
    }, 1000);
  }
}
</script>
