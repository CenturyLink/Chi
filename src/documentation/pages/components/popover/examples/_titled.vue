<template lang="pug">
  <ComponentExample title="Titled" id="titled" :tabs="exampleTabs">
    .-position--relative(style="height: 87px;" slot="example")      
      chi-popover(active, title="Popover title", variant="text", prevent-auto-hide)
        | Popover content
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Use the <code>title</code> attribute to display a title.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
      .chi-tab__description
        | Add <code>chi-popover__header</code> and <code>chi-popover__title</code> to display a title.
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
        webcomponent: `<chi-popover title="Popover title" variant="text" active>
  Popover content
</chi-popover>`,
        htmlblueprint: `<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <header class="chi-popover__header">
    <h2 class="chi-popover__title">Popover Title</h2>
  </header>
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`
      }
    };
  }
})
export default class Titled extends Vue {}
</script>
