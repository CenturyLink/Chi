<template lang="pug">
  <ComponentExample title="With Icons" titleSize="h4" id="checkboxes_icons" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    .chi-col.-w--10.-w-sm--6.-w-md--7.-w-lg--5.-w-xl--3(slot="example")
      .chi-dropdown__menu.-active
        .chi-dropdown__menu-item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox1b")
            label(for="checkbox1b", class="chi-checkbox__label")
              i.chi-icon.icon-logo-centurylink(aria-hidden="true")
              | Item 1
        .chi-dropdown__menu-item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox2b", disabled)
            label(for="checkbox2b", class="chi-checkbox__label")
              i.chi-icon.icon-logo-centurylink(aria-hidden="true")
              | Item 2
        .chi-dropdown__menu-item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox3b", checked)
            label(for="checkbox3b", class="chi-checkbox__label")
              i.chi-icon.icon-logo-centurylink(aria-hidden="true")
              | Item 3
        .chi-dropdown__menu-item
          .chi-checkbox
            input(type="checkbox", class="chi-checkbox__input", id="checkbox4b")
            label(for="checkbox4b", class="chi-checkbox__label")
              i.chi-icon.icon-logo-centurylink(aria-hidden="true")
              | Item 4
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<div class="chi-dropdown__menu">
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox1">
    <label class="chi-checkbox__label" for="checkbox1">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 1
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox2" disabled>
    <label class="chi-checkbox__label" for="checkbox2">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 2
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox3" checked>
    <label class="chi-checkbox__label" for="checkbox3">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 3
    </label>
  </div>
</div>
<div class="chi-dropdown__menu-item">
  <div class="chi-checkbox">
    <input class="chi-checkbox__input" type="checkbox" id="checkbox4">
    <label class="chi-checkbox__label" for="checkbox4">
      <i class="chi-icon icon-logo-centurylink" aria-hidden="true"></i>
      Item 4
    </label>
  </div>
</div>
</div>`
      }
    };
  }
})
export default class CheckboxesIcons extends Vue {}
</script>
