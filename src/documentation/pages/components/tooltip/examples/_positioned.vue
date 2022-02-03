<template lang="pug">
  <ComponentExample title="Positioning" id="positioned" :tabs="exampleTabs">
    div(slot="example")
      span(v-for="tooltipButton in tooltipButtons")
        button(:data-tooltip="tooltipButton.dataTooltip" :data-position="tooltipButton.position" :ref="`data-tooltip-${tooltipButton.position}`").chi-button.-mr--2.-mb--2.-mb-md--0 {{ tooltipButton.text}}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .p--text(class="chi-tab__description")
        | By default, tooltip is positioned on top of the element. To alter position, use
        | the <code>data-position</code> attribute. Valid values are <code>top</code>,
        | <code>right</code>, <code>bottom</code>, <code>left</code>. You can pass an array
        | of Elements and initialize all at once.
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
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      tooltipButtons: [
        {
          text: "Top Tooltip",
          dataTooltip: "Your top tooltip text",
          position: "top"
        },
        {
          text: "Right Tooltip",
          dataTooltip: "Your right tooltip text",
          position: "right"
        },
        {
          text: "Bottom Tooltip",
          dataTooltip: "Your bottom tooltip tex",
          position: "bottom"
        },
        {
          text: "Left Tooltip",
          dataTooltip: "Your left tooltip text",
          position: "left"
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        vue: `<ChiTooltip message="Your top tooltip text" position="top">
  <button class="chi-button">Top Tooltip</button>
</ChiTooltip>
<ChiTooltip message="Your right tooltip text" position="right">
  <button class="chi-button">Right Tooltip</button>
</ChiTooltip>
<ChiTooltip message="Your bottom tooltip text" position="bottom">
  <button class="chi-button">Bottom Tooltip</button>
</ChiTooltip>
<ChiTooltip message="Your left tooltip text" position="left">
  <button class="chi-button">Left Tooltip</button>
</ChiTooltip>`,
        htmlblueprint: `<button class="chi-button" data-tooltip="Your top tooltip text">Top Tooltip</button>
<button class="chi-button" data-tooltip="Your right tooltip text" data-position="right">Right Tooltip</button>
<button class="chi-button" data-tooltip="Your bottom tooltip text" data-position="bottom">Bottom Tooltip</button>
<button class="chi-button" data-tooltip="Your left tooltip text" data-position="left">Left Tooltip</button>

<script>chi.tooltip(document.getElementById('data-tooltip'));<\/script>
`,
      },
    };
  },
})
export default class Positioning extends Vue {
  mounted() {
    this.$data.tooltipButtons.forEach((tooltip: { position: string; }) => {
      chi.tooltip(this.$refs[`data-tooltip-${tooltip.position}`]);
    });
  }
}
</script>
