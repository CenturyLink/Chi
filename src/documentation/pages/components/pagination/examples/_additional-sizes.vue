<template lang="pug">
  <ComponentExample title="Additional Sizes" id="additional_sizes" :tabs="exampleTabs" padding="-p--0">
    p.-text(slot="example-description")
      | Pagination supports the following sizes: <code>xs</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, and <code>xl</code>.
    <Wrapper slot="example">
      .chi-grid.-no-gutter
        .chi-col.-w--12.-w-md--6
          .-p--3
            each size in ['xs', 'sm', 'md', 'lg', 'xl']
              p.-text--bold=`-${size}`
              chi-pagination(pages="5", current-page="3", size=size)
        .chi-col.-w--12.-w-md--6
          .-p--3.-bg--black
              each size in ['xs', 'sm', 'md', 'lg', 'xl']
                p.-text--bold.-text--white=`-${size}`
                chi-pagination(pages="5", current-page="3", size=size, inverse)
    </Wrapper>
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
     <Wrapper slot="code-vue">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.vue" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
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
          id: 'vue',
          label: 'Vue'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- For light backgrounds -->
<chi-pagination pages="5" current-page="3" size="xs"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="sm"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="md"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="lg"></chi-pagination>
<chi-pagination pages="5" current-page="3" size="xl"></chi-pagination>

<!-- For dark backgrounds -->
<chi-pagination pages="5" current-page="3" size="xs" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="sm" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="md" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="lg" inverse></chi-pagination>
<chi-pagination pages="5" current-page="3" size="xl" inverse></chi-pagination>`,
        htmlblueprint: `<!-- For light backgrounds -->
<!-- sm -->
<nav class="chi-pagination" role="navigation" aria-label="Pagination">
  <div class="chi-pagination__content">
    <div class="chi-pagination__start"></div>
    <div class="chi-pagination__center">
      <div class="chi-pagination__button-group chi-button-group">
        <button class="chi-button -icon -flat -sm" aria-label="Previous page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
          </div>
        </button>
        <button class="chi-button -flat -sm" aria-label="Page 1" type="button">1</button>
        <button class="chi-button -flat -sm" aria-label="Page 2" type="button">2</button>
        <button class="chi-button -flat -sm -active" aria-label="Page 3" type="button">3</button>
        <button class="chi-button -flat -sm" aria-label="Page 4" type="button">4</button>
        <button class="chi-button -flat -sm" aria-label="Page 5" type="button">5</button>
        <button class="chi-button -icon -flat -sm" aria-label="Next page" type="button">
          <div class="chi-button__content">
            <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
          </div>
        </button>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- xl -->
  <nav class="chi-pagination" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -xl" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -xl" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -xl" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -xl -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -xl" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -xl" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -xl" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- For dark backgrounds -->
  <!-- sm -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light -sm" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light -sm" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light -sm" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -sm -active" aria-label="Page 2" type="button">3</button>
          <button class="chi-button -flat -light -sm" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light -sm" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light -sm" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- md -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- lg -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light -lg" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light -lg" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light -lg" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -lg -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light -lg" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light -lg" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light -lg" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>

  <!-- xl -->
  <nav class="chi-pagination -inverse" role="navigation" aria-label="Pagination">
    <div class="chi-pagination__content">
      <div class="chi-pagination__start"></div>
      <div class="chi-pagination__center">
        <div class="chi-pagination__button-group chi-button-group">
          <button class="chi-button -icon -flat -light -xl" aria-label="Previous page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-left" aria-hidden="true"></i>
            </div>
          </button>
          <button class="chi-button -flat -light -xl" aria-label="Page 1" type="button">1</button>
          <button class="chi-button -flat -light -xl" aria-label="Page 2" type="button">2</button>
          <button class="chi-button -flat -light -xl -active" aria-label="Page 3" type="button">3</button>
          <button class="chi-button -flat -light -xl" aria-label="Page 4" type="button">4</button>
          <button class="chi-button -flat -light -xl" aria-label="Page 5" type="button">5</button>
          <button class="chi-button -icon -flat -light -xl" aria-label="Next page" type="button">
            <div class="chi-button__content">
              <i class="chi-icon icon-chevron-right" aria-hidden="true"></i>
            </div>
          </button>
        </div>
      </div>
      <div class="chi-pagination__end"></div>
    </div>
  </nav>`,
        vue: `<!-- For light backgrounds -->
<ChiPagination :pages="5" :currentPage="3" size="xs" />
<ChiPagination :pages="5" :currentPage="3" size="sm" />
<ChiPagination :pages="5" :currentPage="3" size="md" />
<ChiPagination :pages="5" :currentPage="3" size="lg" />
<ChiPagination :pages="5" :currentPage="3" size="xl" />

<!-- For dark backgrounds -->
<ChiPagination :pages="5" :currentPage="3" size="xs" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="sm" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="md" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="lg" :inverse="true" />
<ChiPagination :pages="5" :currentPage="3" size="xl" :inverse="true" />`
      }
    };
  }
})
export default class AdditionalSizes extends Vue {}
</script>