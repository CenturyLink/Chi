<template lang="pug">
  <ComponentExample title="Example" id="example" :tabs="exampleTabs" :showSnippetTabs="false">
    .-position--relative(style='height:20rem' slot="example")
      <div v-for="index in indexes" :key="index.key" v-if="index && index.value.color !== ''" :class="['-position--absolute -z--' + index.key + ' ' + index.value.color + ' -text--center -text--white -text--bold']" :style="'width:11rem; height:11rem; top:' + index.value.margin + 'rem; left:' + index.value.margin + 'rem; line-height:11rem;'">-z--{{index.key}}</div>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: {
    indexes: Array
  },
  data: () => {
    return {
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

  generateHtml() {
    const iteration = this.$props.indexes.filter(({value}) => value.color !== '').map(({ key, value }) => {
      return (value.color && `  <div class="-position--absolute -z--${key} ${value.color}">-z--${key}</div>`)
    }).join('\n');
    
      return (
        `<div class="-position--relative">
${iteration}
</div>`
      )
}
}
</script>
