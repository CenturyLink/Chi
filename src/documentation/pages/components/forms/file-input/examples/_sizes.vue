<template lang="pug">
  ComponentExample(title="Sizes" id="sizes" :tabs="exampleTabs")
    p.-text(slot="example-description")
      | File inputs support sizes:
      span(v-html="getSizesByTheme()")
      | . The default size is <code>-md</code>.
    div(slot="example")
      .-p--2(
        v-for="(size, index) in sizes[$store.state.themes.theme]"
        :key="index"
        )
        p.-text--bold.-mt--0
          | -{{ size }}
        input(
          :class="`chi-file-input -${size}`"
          type="file"
          :id="`example-file-${size}`"
          aria-label="Choose file"
          )
        label(:for="`example-file-${size}`")
          | No file chosen
    pre.language-html(slot="code-webcomponent")
      code.html(v-highlight="$data.codeSnippets.webcomponent")
    pre.language-html(slot="code-htmlblueprint")
      code.html(v-highlight="getHtmlBlueprintByTheme()")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const SIZES_PORTAL = ['xs', 'sm', 'md', 'lg'];
const SIZES_LUMEN_CENTURYLINK = ['xs', 'sm', 'md', 'lg', 'xl'];

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``
      },
      sizes: {
        portal: SIZES_PORTAL,
        centurylink: SIZES_LUMEN_CENTURYLINK,
        lumen: SIZES_LUMEN_CENTURYLINK
      }
    };
  }
})
export default class SizesLumenCenturyLink extends Vue {
  getHtmlBlueprintByTheme() {
    const sizes = this.$data.sizes[this.$store.state.themes.theme];

    return sizes
      .map((size: string) => {
        return `
<!-- -${size} -->
<input type="file" class="chi-file-input -${size}" id="example-file-input_${size}" aria-label="Choose file">
<label for="example-file-input_${size}">No file chosen</label>
`;
      })
      .join('');
  }

  getSizesByTheme() {
    const sizes = this.$data.sizes[this.$store.state.themes.theme];

    return sizes
      .map((size: string) => {
        return `<code>-${size}</code>`;
      })
      .join();
  }
}
</script>
