<template lang="pug">
<ComponentExample :title="title" :id="`align-content-${id}`" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
  div(slot="example", v-html="getSnippet('codeSnippetPrintable', id)")

  pre(class="language-html" slot="code-default")
      code(v-highlight="getSnippet('codeSnippet', id)" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

type SnippetsProps = {
  [key: string]: (type: string) => void;
};

const snippets: SnippetsProps = {
  codeSnippetPrintable: (type: string) => {
    return `<div class="-mb--2 -d--flex -show--example -bg--grey-10" style="height: 7rem;">
  <div class="-text -p--2">Item</div>
  <div class="-text -p--2 -align-self--${type}">Aligned Item</div>
  <div class="-text -p--2">Item</div>
</div>`;
  },

  codeSnippet: (type: string) => {
    return `<div class="-d--flex">
  <div>Item</div>
  <div class="-align-self--${type}">Aligned Item</div>
  <div>Item</div>
</div>`;
  }
};

@Component({
  data: () => {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }]
    };
  },
  methods: {
    getSnippet(snippet: string, type: string) {
      return snippets[snippet](type);
    }
  }
})
export default class AlignSelfExample extends Vue {
  @Prop() id?: string;
  @Prop() title?: string;
}
</script>
