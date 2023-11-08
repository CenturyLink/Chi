<template lang="pug">
  <ComponentExample title="Additional Styles" id="additional-styles" :tabs="exampleTabs">
    .-d--flex(slot="example")
      chi-dropdown(position='bottom' button='Primary' color='primary')
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 1
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 3
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 4
      chi-dropdown(position='bottom' button='Primary outline' color='primary' variant='outline').-ml--2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 1
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 3
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 4
      chi-dropdown(position='bottom' button='Primary flat' color='primary' variant='flat').-ml--2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 1
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 3
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 4
      chi-dropdown(position='bottom' button='Flat' variant='flat').-ml--2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 1
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 3
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 4
      chi-dropdown(position='bottom' button='Disabled' disabled).-ml--2
        a.chi-dropdown__menu-item(href='#' slot="menu") Item 1

    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
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

declare const chi: any;

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'webcomponent',
          label: 'Web Component'
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: `<!-- Primary button -->
<chi-dropdown position='bottom' button='Primary' color='primary'>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>

<!-- Primary outline button -->
<chi-dropdown position='bottom' button='Primary outline' color='primary' variant='outline'>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>

<!-- Primary flat button -->
<chi-dropdown position='bottom' button='Primary flat' color='primary' variant='flat'>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>

<!-- Base flat button -->
<chi-dropdown position='bottom' button='Flat' variant='flat'>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>

<!-- Disabled button -->
<chi-dropdown position='bottom' button='Disabled' disabled>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>`,
        htmlblueprint: `<!-- Primary button -->
<div class="chi-dropdown">
  <button id="dropdown-styles-1" class="chi-button -primary chi-dropdown__trigger">Dropdown</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<!-- Primary outline button -->
<div class="chi-dropdown">
  <button id="dropdown-styles-2" class="chi-button -primary -outline chi-dropdown__trigger">Dropdown</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<!-- Primary flat button -->
<div class="chi-dropdown">
  <button id="dropdown-styles-3" class="chi-button -primary -flat chi-dropdown__trigger">Dropdown</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<!-- Base flat button -->
<div class="chi-dropdown">
  <button id="dropdown-styles-4" class="chi-button -flat chi-dropdown__trigger">Dropdown</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<!-- Disabled button -->
<div class="chi-dropdown">
  <button id="dropdown-styles-4" class="chi-button chi-dropdown__trigger" disabled>Dropdown</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>

<script>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<\/script>`
      }
    };
  }
})
export default class AdditionalStyles extends Vue {

}
</script>
