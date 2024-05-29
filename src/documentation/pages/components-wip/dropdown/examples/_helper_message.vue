<template lang="pug">
<ComponentExample title="Error and helper message" id="error-helper-message" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use the state <code>danger</code> to provide feedback to users when input data fails to validate.
      | To meet accessibility requirements, danger states must include an error message explaining the
      | failure and/or how to correct it.
      | Other allowed states are <code>warning</code>, <code>info</code> and <code>success</code>.
  template(#example)
    .-d--flex
      <ClientOnly>
        chi-dropdown(
          position='bottom'
          button='Dropdown with error'
          state='danger'
          helper-message="Helpful info for the user"
        )
          a.chi-dropdown__menu-item(href='#' slot="menu") Item 1
          a.chi-dropdown__menu-item(href='#' slot="menu") Item 2
          a.chi-dropdown__menu-item(href='#' slot="menu") Item 3
          a.chi-dropdown__menu-item(href='#' slot="menu") Item 4
      </ClientOnly>
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class HelperMessage extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: `<chi-dropdown
  position='bottom'
  button='Dropdown with error'
  state='danger'
  helper-message='Helpful info for the user'
>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 1</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 2</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 3</a>
  <a class='chi-dropdown__menu-item' href='#' slot="menu">Item 4</a>
</chi-dropdown>`,
    htmlblueprint: `<div class="chi-dropdown">
  <button class="chi-button chi-dropdown__trigger -b--danger -fluid">
    Dropdown with error
  </button>
  <div class="chi-label -status -danger">
    <i class="chi-icon icon-circle-warning" aria-hidden="true"></i>
    Helpful info for the user
  </div>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
    <a class="chi-dropdown__menu-item" href="#">Item 4</a>
  </div>
</div>
${'<script'}>chi.dropdown(document.querySelectorAll('.chi-dropdown .chi-button'));<${'/script>'}`,
  };
}
</script>
