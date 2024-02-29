<template lang="pug">
<ComponentExample title="Divider" id="divider" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
  template(#example-description)
    p.-text
      | Several menu items can be arranged together by using a divider. Use the <code>chi-divider</code> component.
  template(#example)
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3
      .chi-dropdown__menu.-active
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink') Item 4
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
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`,
      },
    };
  },
})
export default class Divider extends Vue {}
</script>
