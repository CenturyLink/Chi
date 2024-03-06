<template lang="pug">
<ComponentExample title="Example" :tabs="exampleTabs" :showSnippetTabs="false" id="z-index-example">
  template(#example)
    .-position--relative(style='height:20rem')
      template(v-for="value in zIndexValues")
        <div v-if="value.color" :class="generatedClass(value)" :style="generatedStyle(value)">-z--{{value.key}}</div>

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';
import { type IZIndex } from '~/models/models';
import { zIndexValues } from '~/fixtures/fixtures';

@NuxtComponent({})
export default class ZIndexExample extends Vue {
  zIndexValues = zIndexValues;
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generatedClass(index: IZIndex) {
    return `-position--absolute -z--${index.key} ${index.color} -text--center -text--white -text--bold`;
  }

  generatedStyle(index: IZIndex) {
    return `width:11rem; height:11rem; top:${index.margin}rem; left:${index.margin}rem; line-height:11rem;`;
  }

  generateHtml() {
    const newIndexes = this.zIndexValues
      .filter(({ color }) => color !== '')
      .map(({ key, color }) => {
        return `  <div class="-position--absolute -z--${key} ${color}">-z--${key}</div>`;
      })
      .join('\n');

    return `<div class="-position--relative">
${newIndexes}
</div>`;
  }
}
</script>
