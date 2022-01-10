<template lang="pug">
  <ComponentExample title="Data-target" id="data_target" :tabs="exampleTabs">
    p.-text(slot="example-description") Dropdown referenced by a <code>data-target</code> attribute in the activator.
    <Wrapper slot="example">
      button.chi-button.chi-dropdown__trigger(id="dropdown-2" data-target="#dropdown-2-menu") Dropdown component
      p.-text There is no need for proximity between elements.
      #dropdown-2-menu.chi-dropdown__menu
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        a.chi-dropdown__menu-item(href='#exampleLink') Item 4
    </Wrapper>
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <Wrapper slot="code-htmlblueprint">
      <JSNeeded />
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
        htmlblueprint: `<button id="dropdown-2" class="chi-button chi-dropdown__trigger" data-target="#dropdown-2-menu">Dropdown component</button>
<p class="-text">There is no need for proximity between elements.</p>
<div class="chi-dropdown__menu" id="dropdown-2-menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>

<\script>chi.dropdown(document.getElementById('dropdown-2'));<\/script>`
      }
    };
  }
})
export default class DataTarget extends Vue {
  mounted() {
    chi.dropdown(document.getElementById('dropdown-2'));
  }
}
</script>
