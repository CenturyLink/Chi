<template lang="pug">
  <ComponentExample padding="-p--0" title="Text weight" id="text-weight" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text weight to thin, normal, semi-bold, bold, bolder, or boldest.
    .-m--3(slot="example")
      p.-text(v-for="textSize of textSizes", :class="`-text--${ textSize }`") {{`This text will render as ${ textSize }`}}
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
    };
  },
})
export default class Weight extends Vue {
  textSizes = [ 'thin', 'normal', 'semi-bold', 'bold', 'bolder', 'boldest' ]
  codeSnippets = {
    htmlblueprint: this.textSizes
      .map(textSize => `<p class="-text--${ textSize }">This text will render as ${ textSize }</p>`)
      .join('\n')
  }
}
</script>
