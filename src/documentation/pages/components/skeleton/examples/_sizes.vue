<template lang="pug">
<ComponentExample title="Sizes" id="sizes" additionalClasses="-p-lg--6" :tabs="exampleTabs">
  template(#example)
    each size in ['xs', 'sm', 'md', 'lg', 'xl']
      .-text--bold.-mt--2= '-' + size
      .chi-grid.-mt--2
        .chi-col.-w--3
          div(class=`chi-skeleton -${size}`)
        .chi-col.-w--3
          div(class=`chi-skeleton -rounded -${size}`)
        .chi-col.-w--2
          div(class=`chi-skeleton -circle -${size}`)
        .chi-col.-w--2
          div(class=`chi-skeleton -square -${size}`)
        .chi-col.-w--2
          div(class=`chi-skeleton -square -rounded -${size}`)

  template(#code-webcomponent)
    Copy(lang="html" :code="codeSnippets.webcomponent" class="html")
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
          disabled: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<!-- -xs-->
<div class="chi-skeleton -xs"></div>
<div class="chi-skeleton -rounded -xs"></div>
<div class="chi-skeleton -circle -xs"></div>
<div class="chi-skeleton -square -xs"></div>
<div class="chi-skeleton -square -rounded -xs"></div>

<!-- -sm-->
<div class="chi-skeleton -sm"></div>
<div class="chi-skeleton -rounded -sm"></div>
<div class="chi-skeleton -circle -sm"></div>
<div class="chi-skeleton -square -sm"></div>
<div class="chi-skeleton -square -rounded -sm"></div>

<!-- -md-->
<div class="chi-skeleton -md"></div>
<div class="chi-skeleton -rounded -md"></div>
<div class="chi-skeleton -circle -md"></div>
<div class="chi-skeleton -square -md"></div>
<div class="chi-skeleton -square -rounded -md"></div>

<!-- -lg-->
<div class="chi-skeleton -lg"></div>
<div class="chi-skeleton -rounded -lg"></div>
<div class="chi-skeleton -circle -lg"></div>
<div class="chi-skeleton -square -lg"></div>
<div class="chi-skeleton -square -rounded -lg"></div>

<!-- -xl-->
<div class="chi-skeleton -xl"></div>
<div class="chi-skeleton -rounded -xl"></div>
<div class="chi-skeleton -circle -xl"></div>
<div class="chi-skeleton -square -xl"></div>
<div class="chi-skeleton -square -rounded -xl"></div>`,
      },
    };
  },
})
export default class Sizes extends Vue {}
</script>
