<template lang="pug">
<ComponentExample title="End" id="align-content-end" titleSize="h4" padding="-p--3" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example)
    .-mb--2.-d--flex.-flex--wrap.-align-content--end.-show--example.-bg--grey-10(style="height:12rem;")
      .-text.-p--2(v-for="i in 20" ) Item
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-d--flex -align-content--end -flex--wrap">
  <div>Item</div>
</div>`,
      },
    };
  },
})
export default class End extends Vue {}
</script>
