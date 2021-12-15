<template lang="pug">
  <ComponentExample title="Truncate long menu-items" titleSize="h4" id="truncate_long_menu_items" :tabs="exampleTabs" additionalClasses="-bg--grey-20">
    p.-text(slot="example-description") 
      | Wrap the menu-item content in a div with the class <code>-flex--ellipsis</code> to truncate long strings.
    .chi-dropdown__menu.-active(style="width:10rem" slot="example")
      a.chi-dropdown__menu-item(href='#exampleLink') Item 1
      a.chi-dropdown__menu-item(href='#exampleLink') Item 2
      a.chi-dropdown__menu-item(id='example-truncated-menu-item' href='#exampleLink' data-tooltip='Item 3 with truncated longer text')
        .-flex--ellipsis Item 3 with truncated longer text
      a.chi-dropdown__menu-item(href='#exampleLink') Item 4
    <Wrapper slot="code-webcomponent">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    </Wrapper>
    <Wrapper slot="code-htmlblueprint">
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
    </Wrapper>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const chi: any;

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
        htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">
    <div class="-flex--ellipsis" data-tooltip="Item 3 with truncated longer text">Item 3 with truncated longer text</div>
  </a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<!-- Tooltip for truncated text -->
<\script>chi.tooltip(document.querySelectorAll('[data-tooltip]'));<\/script>`
      }
    };
  }
})
export default class TruncateLongMenuItems extends Vue {
  mounted() {
    chi.tooltip(document.getElementById('example-truncated-menu-item'));
  }
}
</script>
