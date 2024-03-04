<template lang="pug">
<ComponentExample title="Sizes" id="sizes-lumen-centurylink" :tabs="exampleTabs">
  template(#example-description)
    p.-text Search input supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
      |  <code>lg</code>, <code>xl</code>.
      | The default size is <code>md</code>.
  template(#example)
    .-p--0
      .chi-grid(v-for="size in sizes")
        .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
          p.-text.-text--bold {{size}}
          .chi-form__item
            chi-search-input(:size='size' value="Sample Text")
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
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
  <chi-search-input size="xs" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="sm" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="md" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="lg" value="Sample Text"></chi-search-input>
</div>
<div class="chi-form__item">
  <chi-search-input size="xl" value="Sample Text"></chi-search-input>
</div>`,
        vue: `<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="xs" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="sm" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="md" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="lg" />
</div>
<div class="chi-form__item">
  <ChiSearchInput value="Sample Text" size="xl" />
</div>`,
        htmlblueprint: `<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -xs" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -xs -bg--none" aria-label="Search">
      <div class="chi-button__content">
        <i class="chi-icon icon-search" aria-hidden="true"></i>
      </div>
    </button>
    <button class="chi-button -icon -close -xs" aria-label="Close">
      <div class="chi-button__content">
        <i class="chi-icon icon-x" aria-hidden="true"></i>
      </div>
    </button>
  </div>
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -sm" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -sm -bg--none" aria-label="Search">
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
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -md" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -md -bg--none" aria-label="Search">
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
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -lg" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -lg -bg--none" aria-label="Search">
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
</div>
<div class="chi-form__item">
  <div class="chi-input__wrapper -icon--right">
    <input class="chi-input chi-search__input -xl" type="search" value="Sample text" aria-label="search input" />
    <button class="chi-button -icon -flat -xl -bg--none" aria-label="Search">
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
</div>`,
      },
    };
  },
})
export default class SizesLumenCenturyLink extends Vue {}
</script>
