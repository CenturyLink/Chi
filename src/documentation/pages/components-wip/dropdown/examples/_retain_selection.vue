<template lang="pug">
<ComponentExample title="Retain selection" id="retain_selection" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | There is an available property, <code>retain-selection</code>, which allows retaining the selected item in the dropdown 
      | as active and see the selected item when the dropdown is closed.
  template(#example)
    .chi-dropdown(ref="dropdownElement")
      button#example__dropdown-retain-selection.chi-button.chi-dropdown__trigger.-d--flex.-justify-content--between(style="width: 180px;") {{ selectedItem }}
      .chi-dropdown__menu
        a.chi-dropdown__menu-item(v-for="item in items" :key="item" :class="{'-active': selectedItem === item}" @click="onChange") {{ item }}
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
    const dropdownElement = ref(null);
    const items = ref(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const selectedItem = ref(items.value[0]);

    function onChange(e: any) {
      selectedItem.value = e.target.text;
      if (dropdownElement.value) {
        dropdownElement.value.hide();
      }
    };

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
      webcomponent: `<chi-dropdown button="Dropdown, click me" retain-selection>
  <a class="chi-dropdown__menu-item" slot="menu">Item 1</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 2</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 3</a>
  <a class="chi-dropdown__menu-item" slot="menu">Item 4</a>
</chi-dropdown>`,
      htmlblueprint: `<div class="chi-dropdown">
  <button id="example__dropdown-retain-selection" style="width: 180px;"
  class="chi-button chi-dropdown__trigger -d--flex -justify-content--between">Dropdown, click me</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item">Item 1</a>
    <a class="chi-dropdown__menu-item">Item 2</a>
    <a class="chi-dropdown__menu-item">Item 3</a>
    <a class="chi-dropdown__menu-item">Item 4</a>
  </div>
</div>

<\script>
  chi.dropdown(document.getElementById('example__dropdown-retain-selection'));
  <!-- Include your custom logic here to retain dropdown selection -->
<\/script>`
    }

    onMounted(() => {
      chi.dropdown(document.getElementById('example__dropdown-retain-selection'));
    });

    return {
      dropdownElement,
      items,
      selectedItem,
      onChange,
      exampleTabs,
      codeSnippets,
    };
  }
}
</script>
