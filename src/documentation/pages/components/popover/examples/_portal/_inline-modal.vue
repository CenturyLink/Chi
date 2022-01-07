<template lang="pug">
  <ComponentExample title="Inline Modal" id="inline-modal_portal" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Use Inline Modals to imitate the style of a Modal and the behavior of a Popover. This is useful for advanced
      | filtering in Data Tables.
    div.-position--relative(slot="example" style="height: 106px;")
      chi-popover#example-modal-popover(
        modal
        closable
        title="Popover title"
        active
        prevent-auto-hide)
        | Popover content
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>modal</code> attribute to style a Popover as an inline Modal.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <pre class="language-html" slot='code-htmlblueprint'>
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
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
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-popover title="Popover title" modal closable active>Popover content</chi-popover>`,
        htmlblueprint: `<!-- Put the following code anywhere in the DOM, e.g. at the end of the DOM -->
<section class="chi-popover -modal -active" aria-modal="true" role="dialog" aria-label="Popover title">
  <button class="chi-button -xs -icon -close" aria-label="Close">
    <div class="chi-button__content">
      <i class="chi-icon icon-x" aria-hidden="true"></i>
    </div>
  </button>
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`
      }
    };
  }
})
export default class InlineModalPortal extends Vue {}
</script>
