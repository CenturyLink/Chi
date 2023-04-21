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
    return `<div class="-d--flex -flex--${type} -show--example">
<div class="-text -p--2">Item 1</div>
<div class="-text -p--2">Item 2</div>
<div class="-text -p--2">Item 3</div>
</div>`;
  },

  codeSnippet: (type: string) => {
    return `<div class="-d--flex -flex--${type}">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
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
export default class DirectionExample extends Vue {
  @Prop() id?: string;
  @Prop() title?: string;
}
</script>
