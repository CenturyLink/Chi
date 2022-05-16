<template lang="pug">
  <ComponentExample title="Header Small + Footer Small" id="header_footer_small_lumen_centurylink" :tabs="exampleTabs">
    p.-text(slot="example-description") Reduce the size of the header and footer by applying the class <code>-sm</code> to each element.
    .chi-card(style="max-width:20rem;" slot="example")
      .chi-card__header.-sm
        .chi-card__title Title
      .chi-card__content
        .chi-card__caption
          | Aenean pretium massa sed vehicula porta. Phasellus id metus felis.
          | Ut felis magna, facilisis ut malesuada nec.
      .chi-card__footer.-sm
        a.-text(href="#exampleLink") Action
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-card">
  <div class="chi-card__header -sm">
    <div class="chi-card__title">Title</div>
  </div>
  <div class="chi-card__content">
    <div class="chi-card__caption">Aenean pretium massa sed vehicula porta. Phasellus id metus felis. Ut felis magna, facilisis ut malesuada nec.</div>
  </div>
  <div class="chi-card__footer -sm">
    <a class="-text" href="#">Action</a>
  </div>
</div>`
      }
    };
  }
})
export default class HeaderFooterSmallLumenCenturylink extends Vue {}
</script>
