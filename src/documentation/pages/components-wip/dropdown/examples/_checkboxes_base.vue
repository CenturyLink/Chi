<template lang="pug">
  <ComponentExample title="Base" titleSize="h4" id="checkboxes_base" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example)
      .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
        .chi-dropdown__menu.-active
          .chi-dropdown__menu-item
            .chi-checkbox
              input(type="checkbox", class="chi-checkbox__input", id="checkbox1")
              label(for="checkbox1", class="chi-checkbox__label") Item 1
          .chi-dropdown__menu-item
            .chi-checkbox
              input(type="checkbox", class="chi-checkbox__input", id="checkbox2", disabled)
              label(for="checkbox2", class="chi-checkbox__label") Item 2
          .chi-dropdown__menu-item
            .chi-checkbox
              input(type="checkbox", class="chi-checkbox__input", id="checkbox3", checked)
              label(for="checkbox3", class="chi-checkbox__label") Item 3
          .chi-dropdown__menu-item
            .chi-checkbox
              input(type="checkbox", class="chi-checkbox__input", id="checkbox4")
              label(for="checkbox4", class="chi-checkbox__label") Item 4
    template(#code-webcomponent)
      Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-dropdown__menu">
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox1">
      <label class="chi-checkbox__label" for="checkbox1">Item 1</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox2" disabled>
      <label class="chi-checkbox__label" for="checkbox2">Item 2</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox3" checked>
      <label class="chi-checkbox__label" for="checkbox3">Item 3</label>
    </div>
  </div>
  <div class="chi-dropdown__menu-item">
    <div class="chi-checkbox">
      <input class="chi-checkbox__input" type="checkbox" id="checkbox4">
      <label class="chi-checkbox__label" for="checkbox4">Item 4</label>
    </div>
  </div>
</div>`,
      },
    };
  },
  computed: {
    additionalClasses() {
      return { 'background-color': '#eee' };
    },
  },
})
export default class CheckboxesBase extends Vue {}
</script>
