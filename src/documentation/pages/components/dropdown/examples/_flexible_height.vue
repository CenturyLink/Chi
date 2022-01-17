<template lang="pug">
  <ComponentExample title="Flexible height" titleSize="h4" id="flexible_height" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    p.-text(slot="example-description") Add the class <code>-h--auto</code> to set menu item height to auto.
    .chi-dropdown__menu.-active(slot="example" style="width:10rem")
      a.chi-dropdown__menu-item(href="#exampleLink") Item 1
      .chi-dropdown__menu-item.-h--auto.-py--1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      a.chi-dropdown__menu-item(href="#exampleLink") Item 2
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
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`
      }
    };
  }
})
export default class FlexibleHeight extends Vue {}
</script>
