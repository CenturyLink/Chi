<template>
  <ComponentExample title="Sizes" id="sizes" :tabs="exampleTabs">
    <p class="-text" slot="example-description">
      File inputs support sizes:
      <span v-html="getSizesByTheme()"></span>. The default size is
      <code>-md</code>.
    </p>
    <div slot="example">
      <div
        v-for="(size, index) in sizes[$store.state.themes.theme]"
        class="-p--2"
        :key="index"
      >
        <p class="-text--bold -mt--0">-{{ size }}</p>
        <input
          :class="`chi-file-input -${size}`"
          type="file"
          :id="`example-file-${size}`"
          aria-label="Choose file"
        /><label :for="`example-file-${size}`">No file chosen</label>
      </div>
    </div>
    <pre class="language-html" slot="code-webcomponent">
    <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
    <code v-highlight="getHtmlBlueprintByTheme()" class="html"></code>
    </pre>
  </ComponentExample>
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
