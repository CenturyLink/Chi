<template lang="pug">
  ComponentExample(:id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    template(slot="example")
      p.-text.-m--3(v-for="size in sizes" :class="size")
        | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacus lacus, dictum quis mauris vel,
        | commodo condimentum odio. Praesent lacus metus, vehicula at orci ac, fringilla mollis mauris.
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'sizes-example',
      sizes: ['-text-md--lg', 'text-xl--xs', '-text-lg--xl'],
      codeSnippets: ``
    };
  }
})
export default class Example extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.codeSnippets += `<p class="${size}"></p>\n`;
    });
  }
}
</script>
