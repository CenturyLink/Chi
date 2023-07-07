<template lang="pug">
  div
    <ComponentExample title="Justify content" id="justify-content" titleSize="h3" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use justify-content utilities to alter the alignment of flex items on the main axis.
    .-p--3(slot="example")
      .-mb--2.-d--flex.-show--example.-bg--grey-10(v-for="type in types" :class="'-justify-content--' + type")
        .-text.-p--2 Item 1
        .-text.-p--2 Item 2
        .-text.-p--2 Item 3
    <pre class="language-html" slot="code-htmlblueprint">
    <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
    </ComponentExample>
    <SpecificBreakpoints/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SpecificBreakpoints from './_specific-breakpoints.vue';

@Component({
  components: {
    SpecificBreakpoints,
  },
  data: () => {
    return {
      types: ['start', 'end', 'center', 'between', 'around'],
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-d--flex -justify-content--start"/>
<div class="-d--flex -justify-content--end"/>
<div class="-d--flex -justify-content--center"/>
<div class="-d--flex -justify-content--between"/>
<div class="-d--flex -justify-content--around"/>`
      }
    };
  }
})
export default class JustifyContent extends Vue {}
</script>

