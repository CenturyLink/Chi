<template lang="pug">
<ComponentExample titleSize="h4" title="Auto hide" id="auto-hide" :tabs="exampleTabs">
  p.-text(slot='example-description') 
    | Popovers automatically hide when clicking outside of it or when pressing the ESC key.
  <Wrapper slot="example">
    chi-button#example-6-auto-hide-button.-mr--2.-mb--2.-mb-md--0 Auto hide
    chi-popover#example-6-auto-hide-popover(position="top", title="Popover title", variant="text", arrow, reference="#example-6-auto-hide-button")
      | Click outside. I will disappear!
    chi-button#example-6-no-auto-hide-button.-mr--2.-mb--2.-mb-md--0 No auto hide
    chi-popover#example-6-no-auto-hide-popover(position="top", title="Popover title", variant="text", arrow, prevent-auto-hide, reference="#example-6-no-auto-hide-button")
      | Click outside. I will stay!
  </Wrapper>
  <Wrapper slot='code-webcomponent'>
    .chi-tab__description
      | You can prevent automatic hiding behavior
      | with the <code>prevent-auto-hide</code> attribute.
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
  </Wrapper>
  <Wrapper slot='code-htmlblueprint'>
    <JSNeeded />
    .chi-tab__description
      | You can prevent automatic hiding behavior by
      | setting <code>preventAutoHide</code> to <code>true</code>
    <pre class="language-html">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </Wrapper>
</ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
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
        webcomponent: `<!-- Auto hide -->
<chi-popover id="example-6-popover-auto-hide-popover" position="top" title="Popover title" variant="text" arrow reference="#example-6-auto-hide-button">
  Click outside. I will disappear!
</chi-popover>

<!-- No auto hide -->
<chi-popover id="example-6-popover-no-auto-hide-popover" position="top" title="Popover title" variant="text" arrow prevent-auto-hide reference="#example-6-no-auto-hide-button">
  Click outside. I will stay!
</chi-popover>`,
        htmlblueprint: `<!-- Auto hide -->
<button id='popover-6' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will disappear!</p></div>'>Auto hide</button>
<script>chi.popover(document.getElementById('popover-6'),
  {
    preventAutoHide: false
  });
<\/script>

<!-- No auto hide -->
<button id='popover-6' class="chi-button" data-popover-content='<header class="chi-popover__header"><h2 class="chi-popover__title">Popover title</h2></header><div class="chi-popover__content"><p class="chi-popover__text">Click outside. I will stay!</p></div>'>No auto hide</button>
<script>chi.popover(document.getElementById('popover-6'),
  {
    preventAutoHide: true
  });
<\/script>`,
      },
    };
  },
})
export default class AutoHide extends Vue {
  mounted() {
    const popovers: any = [
      { button: '#example-6-auto-hide-button', popover: '#example-6-auto-hide-popover' },
      { button: '#example-6-no-auto-hide-button', popover: '#example-6-no-auto-hide-popover' },
    ];

    popovers?.forEach((popover: any) => {
      document.querySelector(popover.button).addEventListener('click', function () {
        const popoverElem: any = document.querySelector(popover.popover);

        popoverElem?.toggle();
      });
    });
  }
}
</script>
