<template lang="pug">
<ComponentExample title="Error" id="error" :tabs="exampleTabs">
  template(#example-description)
    p.-text Use the <code>danger</code> state to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger inputs must include an error message explaining the
      | failure and/or how to correct it.
  template(#example)
    .chi-grid
      .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
        .chi-form__item
          chi-search-input(
            id="example-danger"
            state="danger"
            value="Unknown item"
            helper-message="Item not found")
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
  <chi-search-input id="example__danger" value="Unknown item" state="danger" helper-message="Item not found"></chi-text-input>
</div>`,
        vue: `<div class="chi-form__item">
  <ChiSearchInput value="Unknown item" state="danger" helper-message="Optional helper message" />
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -danger" type="search" value="Unknown item" aria-label="search input" />
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
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Item not found
  </div>
</div>`,
      },
    };
  },
})
export default class Error extends Vue {}
</script>
