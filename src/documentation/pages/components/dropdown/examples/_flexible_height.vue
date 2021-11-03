<template lang="pug">
  div
    <ComponentExample title="Flexible height" titleSize="h4" id="flexible_height" :tabs="exampleTabs" backgroundColor="#eee">
      div(slot="example-description")
        p.-text Add the class <code>-h--auto</code> to set menu item height to auto.
      div(slot="example")
        .chi-dropdown__menu.-active(style="width:10rem")
          a.chi-dropdown__menu-item(href="#exampleLink") Item 1
          .chi-dropdown__menu-item.-h--auto.-py--1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          a.chi-dropdown__menu-item(href="#exampleLink") Item 2
      div(slot="code-webcomponent")
        <pre class="language-html">
          <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
        </pre>
      div(slot="code-htmlblueprint")
        <pre class="language-html">
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
        htmlblueprint: `<div class="chi-dropdown__menu" style="width:10rem">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <div class="chi-dropdown__menu-item -h--auto -py--1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
</div>`
      }
    };
  }
})
export default class FlexibleHeight extends Vue {
  mounted() {}
}
</script>
