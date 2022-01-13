<template lang="pug">
  <ComponentExample title="Sizes" id="sizes" padding="-p--0" :tabs="exampleTabs">
    p.-text(slot="example-description")
      | Icons support the following sizes:
      | <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, <code>xxl</code>.
      | By default, icons render at 16x16px (<code>sm</code>). Two alternate small values are available for
      | specific app scenarios. Use <code>sm--2</code> for displaying 20px icons within a 40px container
      | (e.g. large button), and <code>sm--3</code> for displaying 24px icons within a 48px container.
    .-p--3(slot="example")
      .chi-grid.-align-items--end
        each size in ['xs', 'sm', 'sm--2', 'sm--3', 'md', 'lg', 'xl', 'xxl']
          div.-p--2.-m--1
            chi-icon(icon="atom", size=size)
            p.-text.-text--center= size
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre>
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
          id: 'webcomponent',
          label: 'Web component',
        },
        {
          active: false,
          id: 'htmlblueprint',
          label: 'HTML blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: `<!-- -xs : 12x12px -->
<chi-icon icon="atom" size="xs"></chi-icon>
<!-- -sm : 16x16px -->
<chi-icon icon="atom" size="sm"></chi-icon>
<!-- -sm--2 : 20x20px -->
<chi-icon icon="atom" size="sm--2"></chi-icon>
<!-- -sm--3 : 24x24px -->
<chi-icon icon="atom" size="sm--3"></chi-icon>
<!-- -md : 32x32px -->
<chi-icon icon="atom" size="md"></chi-icon>
<!-- -lg : 64x64px -->
<chi-icon icon="atom" size="lg"></chi-icon>
<!-- -xl : 96x96px -->
<chi-icon icon="atom" size="xl"></chi-icon>
<!-- -xxl : 128x128px -->
<chi-icon icon="atom" size="xxl"></chi-icon>`,
        htmlblueprint: `<!-- -xs : 12x12px -->
<i class="chi-icon icon-atom -xs" aria-hidden="true"></i>
<!-- -sm : 16x16px -->
<i class="chi-icon icon-atom -sm" aria-hidden="true"></i>
<!-- -sm--2 : 20x20px -->
<i class="chi-icon icon-atom -sm--2" aria-hidden="true"></i>
<!-- -sm--3 : 24x24px -->
<i class="chi-icon icon-atom -sm--3" aria-hidden="true"></i>
<!-- -md : 32x32px -->
<i class="chi-icon icon-atom -md" aria-hidden="true"></i>
<!-- -lg : 64x64px -->
<i class="chi-icon icon-atom -lg" aria-hidden="true"></i>
<!-- -xl : 96x96px -->
<i class="chi-icon icon-atom -xl" aria-hidden="true"></i>
<!-- -xxl : 128x128px -->
<i class="chi-icon icon-atom -xxl" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Sizes extends Vue {}
</script>
