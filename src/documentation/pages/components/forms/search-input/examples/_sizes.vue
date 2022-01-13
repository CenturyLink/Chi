<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Search input supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code>,
        |  <code>lg</code>, <code>xl</code>.
        | The default size is <code>md</code>.
    .-p--3(slot="example")
      .chi-grid
      each size in ['xs', 'sm', 'md', 'lg', 'xl']
        .chi-col.-w--12.-w-sm--8.-w-md--6.-w-lg--5
          p.-text.-text--bold= size
          .chi-form__item
            chi-search-input(size=`${size}` value="Sample Text")
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-vue">
      <code v-highlight="$data.codeSnippets.vue" class="html"></code>
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
          active: true,
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: false,
          id: 'vue',
          label: 'Vue',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<div class="chi-form__item">
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
