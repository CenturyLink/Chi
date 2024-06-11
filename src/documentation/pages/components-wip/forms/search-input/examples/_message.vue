<template lang="pug">
<ComponentExample title="Message" id="message" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the <code>helper-message</code> attribute to provide users with additional information,
      | validation feedback, and other helpful information.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
            chi-search-input(id='example__message' helper-message='Optional helper message')
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-vue)
    Copy(lang="html" :code="codeSnippets.vue" class="html")
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
          id: 'vue',
          label: 'Vue',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-search-input helper-message="Optional helper message"></chi-search-input>
</div>`,
        vue: `<div class="chi-form__item">
  <ChiSearchInput helper-message="Optional helper message" />
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input" type="search" aria-label="search input" />
    <button class="chi-button -icon -flat -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -sm" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
  <div class="chi-label -status">Optional helper message</div>
</div>`,
      },
    };
  },
})
export default class Message extends Vue {}
</script>
