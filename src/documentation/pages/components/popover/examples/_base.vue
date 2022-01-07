<template lang="pug">
  <ComponentExample title="Base" id="base" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Popover components are absolutely positioned. For this example we have forced a relative position.
    div.-position--relative(style="height: 53px;" slot="example")
      chi-popover(active, variant="text", prevent-auto-hide)
        | Popover content
    <Wrapper slot='code-webcomponent'>
      .chi-tab__description
        | Remove the <code>active</code> attribute to hide the popover.
        | Use the <code>variant="text"</code> attribute to display text content in a <code>&lt;p&gt;</code>.
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot='code-htmlblueprint'>
      .chi-tab__description
        | Remove the <code>-active</code> class to hide the popover.    
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
          label: 'Web component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<chi-popover variant="text" active>
  Popover content
</chi-popover>`,
        htmlblueprint: `<section class="chi-popover -active" aria-label="Popover Title" aria-modal="true" role="dialog">
  <div class="chi-popover__content">
    <p class="chi-popover__text">Popover content</p>
  </div>
</section>`
      }
    };
  }
})
export default class Base extends Vue {}
</script>
