<template lang="pug">
  <ComponentExample title="Example" id="example" :tabs="exampleTabs" :showSnippetTabs="false">
  <Wrapper slot="example">
    .-position--relative(style='height:20rem')
      <div v-for="index in indexes" :key="index.key" v-if="index && index.value.color !== ''" :class="['-position--absolute -z--' + index.key + ' ' + index.value.color + ' -text--center -text--white -text--bold']" :style="'width:11rem; height:11rem; top:' + index.value.margin + 'rem; left:' + index.value.margin + 'rem; line-height:11rem;'">-z--{{index.key}}</div>
    </Wrapper>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
      codeSnippets: {
        htmlblueprint: `<div class="-position--relative">
  <div class="-position--absolute -z--0  -bg--black">-z--0</div>
  <div class="-position--absolute -z--10 -bg--danger">-z--10</div>
  <div class="-position--absolute -z--20 -bg--warning">-z--20</div>
  <div class="-position--absolute -z--30 -bg--success">-z--30</div>
  <div class="-position--absolute -z--40 -bg--green-40">-z--40</div>
  <div class="-position--absolute -z--50 -bg--grey-20">-z--50</div>
  <div class="-position--absolute -z--60 -bg--grey-10">-z--60</div>
  <div class="-position--absolute -z--70 -bg--primary">-z--70</div>
</div>`
      }
    };
  }
})

export default class Example extends Vue {}
</script>
