<template lang="pug">
  <ComponentExample title="Sizes" id="sizes_portal" :tabs="exampleTabs">
    p.-text(slot="example-description") 
      | Phone input supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code> (default), and <code>lg</code>.
    <Wrapper slot="example">
      div(style="max-width: 18rem;")
        .-mb--2.chi-form__item
          chi-label(for="phone-input-portal-xs") xs
          chi-phone-input(id="phone-input-portal-xs" size="xs")
        .-mb--2.chi-form__item
          chi-label(for="phone-input-portal-sm") sm
          chi-phone-input(id="phone-input-portal-sm" size="sm")
        .-mb--2.chi-form__item
          chi-label(for="phone-input-portal-md") md
          chi-phone-input(id="phone-input-portal-md" size="md")
        .-mb--2.chi-form__item
          chi-label(for="phone-input-portal-lg") lg
          chi-phone-input(id="phone-input-portal-lg" size="lg")
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
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
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- xs -->
<chi-label for="phone-input-xs">xs</chi-label>
<chi-phone-input id="phone-input-xs" size="xs"></chi-phone-input>  
<!-- sm -->
<chi-label for="phone-input-sm">sm</chi-label>
<chi-phone-input id="phone-input-sm" size="sm"></chi-phone-input>    
<!-- md -->
<chi-label for="phone-input-md">md</chi-label>
<chi-phone-input id="phone-input-md" size="md"></chi-phone-input>
<!-- lg -->
<chi-label for="phone-input-lg">lg</chi-label>
<chi-phone-input id="phone-input-lg" size="lg"></chi-phone-input>`,
        htmlblueprint: ``
      }
    };
  }
})
export default class SizesPortal extends Vue {}
</script>
