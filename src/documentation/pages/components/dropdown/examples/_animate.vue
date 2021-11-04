<template lang="pug">
  <ComponentExample title="Animate" id="animated" :tabs="exampleTabs">
    div(slot="example-description")
      p.-text Triggers can be animated by applying the <code>-animate</code> class.
    .chi-dropdown(slot="example")
      button#dropdown-animate.chi-button.chi-dropdown__trigger.-animate Animated dropdown trigger
      .chi-dropdown__menu
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <JSNeeded slot="tab-description" />
      <pre class="language-html">
      
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>
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
        htmlblueprint: `<div class="chi-dropdown">
  <button id="dropdown-animate" class="chi-button chi-dropdown__trigger -animate">Animated dropdown trigger</button>
  <div class="chi-dropdown__menu">
    <a class="chi-dropdown__menu-item" href="#">Item 1</a>
    <a class="chi-dropdown__menu-item" href="#">Item 2</a>
    <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  </div>
</div>

<\script>chi.dropdown(document.getElementById('dropdown-animate'));<\/script>`
      }
    };
  }
})
export default class Animated extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('dropdown-animate'));
  }
}
</script>
