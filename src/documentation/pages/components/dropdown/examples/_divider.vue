<template lang="pug">
  <ComponentExample title="Divider" id="divider" :tabs="exampleTabs" backgroundColor="#eee">
    div(slot="example-description")
      p.-text 
        | Several menu items can be arranged together by using a divider. Use the <code>chi-divider</code> component.
    .chi-col.-w--7.-w-sm--4.-w-md--5.-w-lg--3(slot="example")
      .chi-dropdown__menu.-active
        a.chi-dropdown__menu-item(href='#exampleLink') Item 1
        a.chi-dropdown__menu-item(href='#exampleLink') Item 2
        a.chi-dropdown__menu-item(href='#exampleLink') Item 3
        .chi-divider
        a.chi-dropdown__menu-item(href='#exampleLink') Item 4
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
        htmlblueprint: `<div class="chi-dropdown__menu">
  <a class="chi-dropdown__menu-item" href="#">Item 1</a>
  <a class="chi-dropdown__menu-item" href="#">Item 2</a>
  <a class="chi-dropdown__menu-item" href="#">Item 3</a>
  <div class="chi-divider"></div>
  <a class="chi-dropdown__menu-item" href="#">Item 4</a>
</div>`
      }
    };
  }
})
export default class Divider extends Vue {
  mounted() {}
}
</script>
