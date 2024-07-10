<template lang="pug">
ComponentExample(title="Sizes" id="sizes" :tabs="exampleTabs")
  template(#example-description)
    p.-text
      | File inputs support sizes:
      span(v-html="getSizesByTheme()")
      | . The default size is <code>-md</code>.
  template(#example)
    .-p--2(
      v-for="(size, index) in sizes[selectedTheme]"
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
  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent")
  template(#code-htmlblueprint)
    Copy(lang="html" :code="getHtmlBlueprintByTheme()")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

const SIZES_PORTAL = ['xs', 'sm', 'md', 'lg'];
const SIZES_LUMEN_CENTURYLINK = ['xs', 'sm', 'md', 'lg', 'xl'];

@NuxtComponent({})
export default class SizesLumenCenturyLink extends Vue {
  selectedTheme = useSelectedTheme();
  exampleTabs = [
    {
      disabled: true,
      id: 'webcomponent',
      label: 'Web Component',
    },
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  codeSnippets = {
    webcomponent: ``,
  };
  sizes = {
    portal: SIZES_PORTAL,
    centurylink: SIZES_LUMEN_CENTURYLINK,
    lumen: SIZES_LUMEN_CENTURYLINK,
    portalrebrand24: SIZES_PORTAL,
    lumenrebrand24: SIZES_LUMEN_CENTURYLINK
  };
  theme = useSelectedTheme();

  getHtmlBlueprintByTheme() {
    const sizes = this.sizes[this.theme.toLowerCase()];

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
    const sizes = this.sizes[this.theme.toLowerCase()];

    return sizes
      .map((size: string) => {
        return `<code>-${size}</code>`;
      })
      .join();
  }
}
</script>
