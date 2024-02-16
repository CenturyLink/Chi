<template lang="pug">
<ComponentExample title="Sizes" id="sizes_lumen_centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Phone input supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, and <code>xl</code>.
  template(#example)
    div(style="max-width: 18rem;")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-xs") xs
        chi-phone-input(id="phone-input-xs" size="xs")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-sm") sm
        chi-phone-input(id="phone-input-sm" size="sm")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-md") md
        chi-phone-input(id="phone-input-md" size="md")
      .-mb--2.chi-form__item
        chi-label(for="phone-input-lg") lg
        chi-phone-input(id="phone-input-lg" size="lg")
      .chi-form__item
        chi-label(for="phone-input-xl") xl
        chi-phone-input(id="phone-input-xl" size="xl")
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          disabled: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
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
<chi-phone-input id="phone-input-lg" size="lg"></chi-phone-input>
<!-- xl -->
<chi-label for="phone-input-xl">xl</chi-label>
<chi-phone-input id="phone-input-xl" size="xl"></chi-phone-input>`,
        htmlblueprint: ``,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue { }
</script>
