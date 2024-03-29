<template lang="pug">
<ComponentExample title="Icon" id="icon_trigger" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | There is an available property, <code>icon</code>, which allows adding an icon as the dropdown trigger.
  template(#example)
    .chi-dropdown
      button#example__dropdown-icon.chi-button.chi-dropdown__trigger.chi-dropdown__icon(aria-label="More options" icon-tooltip-message="More options" :variant="selectedTheme === 'portal' ? 'flat' : ''")
        .chi-button__content
          i.chi-icon.icon-more-vert(aria-hidden="true")
      .chi-dropdown__menu
        a.chi-dropdown__menu-item Item 1
        a.chi-dropdown__menu-item Item 2
        a.chi-dropdown__menu-item Item 3
        a.chi-dropdown__menu-item Item 4
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
declare const chi: any;

export default {
  setup() {
    const selectedTheme = useSelectedTheme();
    const exampleTabs = [
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

    const codeSnippets = {
      webcomponent: `<chi-dropdown icon="more-vert" icon-tooltip-message="More options">
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,
      htmlblueprint: `<div class="chi-dropdown">
  <button id="example__dropdown-icon" class="chi-button chi-dropdown__trigger chi-dropdown__icon" 
  aria-label="More options" data-tooltip="More options"> 
    <div class="chi-button__content">
      <i class="chi-icon icon-more-vert" aria-hidden="true"></i>
    </div>
  </button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item">Item 1</a>
    <a class="chi-dropdown__menu-item">Item 2</a>
    <a class="chi-dropdown__menu-item">Item 3</a>
    <a class="chi-dropdown__menu-item">Item 4</a>
  </div>
</div>

<\script>
  chi.dropdown(document.getElementById('example__dropdown-icon'));
  chi.tooltip(document.querySelectorAll('[data-tooltip]'));
<\/script>`
    }

    onMounted(() => {
      chi.dropdown(document.getElementById('example__dropdown-icon'));
      chi.tooltip(document.querySelectorAll('[data-tooltip]'));
    });

    return {
      exampleTabs,
      codeSnippets,
      selectedTheme
    };
  }
}
</script>