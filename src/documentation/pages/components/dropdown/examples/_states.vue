<template lang="pug">
  <ComponentExample title="Menu item states" id="states" :tabs="exampleTabs" backgroundColor="#eee">
    p.-text(slot="example-description")
      | Menu items support the following states: <code>initial</code>, <code>active</code>, <code>disabled</code> and
      | <code>hover</code>.
    .chi-col.-w--12.-w-sm--7.-w-md--8.-w-lg--6.-w-xl--4(slot="example")
      .chi-dropdown__menu.-active
        a.chi-dropdown__menu-item(href='#exampleLink') Item
        a.chi-dropdown__menu-item.-active(href='#exampleLink') Active item
        a.chi-dropdown__menu-item.-disabled(href='#exampleLink') Disabled item
        a.chi-dropdown__menu-item.-hover(href='#exampleLink') Hovered item
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
  <a class="chi-dropdown__menu-item" href="#">Item</a>
  <a class="chi-dropdown__menu-item -active" href="#">Active item</a>
  <a class="chi-dropdown__menu-item -disabled" href="#">Disabled item</a>
  <a class="chi-dropdown__menu-item -hover" href="#">Hovered item</a>
</div>`
      }
    };
  }
})
export default class States extends Vue {}
</script>
