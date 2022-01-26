<template lang="pug">
  <ComponentExample title="Long Tooltips" id="long" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Long Tooltips will be truncated on the fourth line. To display text beyond four lines,
      | use the <a href="../../components/popover">Popover</a> component
    button(data-tooltip='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et interdum purus. ' +
    'Curabitur varius libero, vel hendrerit enim tincidunt sit amet. Ut eros purus, semper nec ipsum et, ' +
    'maximus faucibus suscipit nibh.' slot="example").chi-button.-mr--2.-mb--2.-mb-md--0 Hover me to see tooltip
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      .p--text(class="chi-tab__description")
        | To render a tooltip, apply the <code>data-tooltip</code> attribute to an element. Then
        | initialize it with the chi.tooltip factory method.
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
      codeSnippets: {
        webcomponent: ``,
        vue: `<ChiTooltip message="Lorem ipsum...">
  <button class="chi-button">Hover me to see tooltip</button>
</ChiTooltip>`,
        htmlblueprint: `<button class="chi-button" data-tooltip="Lorem ipsum...">Hover me to see tooltip</button>

<script>chi.tooltip(document.getElementById('data-tooltip'));<\/script>`,
      },
    };
  },
})
export default class Long extends Vue {
  mounted() {
    chi.tooltip(document.querySelectorAll('[data-tooltip]'));
  }
}
</script>
