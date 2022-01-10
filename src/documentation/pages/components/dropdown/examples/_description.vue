<template lang="pug">
  <ComponentExample title="Description" id="description" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4(slot="example")
      .chi-dropdown__menu.-active.-list
        a.chi-dropdown__menu-item(href='#exampleLink')
          span.chi-dropdown__menu-item_title Item
          span.chi-dropdown__menu-item_text Item description
        a.chi-dropdown__menu-item.-active(href='#exampleLink')
          span.chi-dropdown__menu-item_title Active item
          span.chi-dropdown__menu-item_text Item description
        a.chi-dropdown__menu-item.-disabled(href='#exampleLink')
          span.chi-dropdown__menu-item_title Disabled item
          span.chi-dropdown__menu-item_text Item description
        a.chi-dropdown__menu-item.-hover(href='#exampleLink')
          span.chi-dropdown__menu-item_title Hovered item
          span.chi-dropdown__menu-item_text Item description
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
      string: 'String',
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
        webcomponent: `Web component code snippet`,
        htmlblueprint: `<div class="chi-dropdown__menu -list">
  <a class="chi-dropdown__menu-item" href="#">
    <span class="chi-dropdown__menu-item_title">Item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -active" href="#">
    <span class="chi-dropdown__menu-item_title">Active item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -disabled" href="#">
    <span class="chi-dropdown__menu-item_title">Disabled item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
  <a class="chi-dropdown__menu-item -hover" href="#">
    <span class="chi-dropdown__menu-item_title">Hovered item</span>
    <span class="chi-dropdown__menu-item_text">Item description</span>
  </a>
</div>`
      }
    };
  }
})
export default class Description extends Vue {}
</script>
