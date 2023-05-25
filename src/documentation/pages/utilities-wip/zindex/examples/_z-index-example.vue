<template lang="pug">
  <ComponentExample title="Example" :tabs="exampleTabs" :showSnippetTabs="false" id="z-index-example">
    .-position--relative(style='height:20rem' slot="example")
      <div v-for="value in zIndexValues" :key="value.key" v-if="value.color" :class="generatedClass(value)" :style="generatedStyle(value)">-z--{{value.key}}</div>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IZIndex } from '~/models/models';
import { zIndexValues } from '~/fixtures/fixtures';

@Component({
  data: () => {
    return {
      zIndexValues,
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
    };
  }
})
export default class ZIndexExample extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    }
  }

  generatedClass(index: IZIndex) {
    return `-position--absolute -z--${index.key} ${index.color} -text--center -text--white -text--bold`
  }

  generatedStyle(index: IZIndex) {
    return `width:11rem; height:11rem; top:${index.margin}rem; left:${index.margin}rem; line-height:11rem;`
  }

  generateHtml() {
    const newIndexes = zIndexValues.filter(({color}) => color !== '').map(({ key, color }) => {
      return (`  <div class="-position--absolute -z--${key} ${color}">-z--${key}</div>`)
    }).join('\n');
    
      return (
        `<div class="-position--relative">
${newIndexes}
</div>`
      )
  }
}
</script>
