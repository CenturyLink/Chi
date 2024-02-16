<template lang="pug">
<ComponentExample title="Data-target" id="data_target" :tabs="exampleTabs">
  template(#example-description)
    p.-text Dropdown referenced by a <code>data-target</code> attribute in the activator.
  template(#example)
    button.chi-button.chi-dropdown__trigger(id="dropdown-2" data-target="#dropdown-2-menu") Dropdown component
    p.-text There is no need for proximity between elements.
    #dropdown-2-menu.chi-dropdown__menu
      a.chi-dropdown__menu-item(href='#exampleLink') Item 1
      a.chi-dropdown__menu-item(href='#exampleLink') Item 2
      a.chi-dropdown__menu-item(href='#exampleLink') Item 3
      a.chi-dropdown__menu-item(href='#exampleLink') Item 4

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    <JSNeeded />
    Copy(lang="html" :code="codeSnippets.htmlblueprint")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

declare const chi: any;

@NuxtComponent({})
export default class DataTarget extends Vue {
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ]
  codeSnippets = {
    webcomponent: ``,
    htmlblueprint: `<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<\script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`,
  }
  mounted() {
    chi.dropdown(document.getElementById('dropdown-2'));
  }
}
</script>
