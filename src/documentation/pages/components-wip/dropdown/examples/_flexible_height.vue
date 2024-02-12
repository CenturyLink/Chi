<template lang="pug">
  <ComponentExample title="Flexible height" titleSize="h4" id="flexible_height" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    template(#example-description)
      p.-text Add the class <code>-h--auto</code> to set menu item height to auto.
    template(#example)
      .chi-dropdown__menu.-active(style="width:10rem")
        a.chi-dropdown__menu-item(href="#exampleLink") Item 1
        .chi-dropdown__menu-item.-h--auto.-py--1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        a.chi-dropdown__menu-item(href="#exampleLink") Item 2
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
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`,
      },
    };
  },
})
export default class FlexibleHeight extends Vue {}
</script>
