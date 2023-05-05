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
    return `<div class="-mb--2 -d--flex -align-content--${type} -flex--wrap -show--example -bg--grey-10" style="height:12rem;">
      ${[...new Array(19)]
        .map(() => `<div class="-text -p--2">Item</div>`)
        .join('')}
    </div>`;
  },

  codeSnippet: (type: string) => {
    return `<div class="-d--flex -align-content--${type} -flex--wrap">
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
export default class AlignContentExample extends Vue {
  @Prop() id?: string;
  @Prop() title?: string;
}
</script>
