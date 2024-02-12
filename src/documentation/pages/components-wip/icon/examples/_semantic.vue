<template lang="pug">
<ComponentExample title="Semantic" titleSize="h4" id="semantic" padding="-p--0" :tabs="exampleTabs">
  template(#example-description)
    p.-text
      | Use semantic colors to communicate meaning to users. Examples include displaying alerts,
      | form field validation, user status, application state and more. Use green (success) for positive,
      | blue (info) for informative, red (danger) for negative, yellow (warning) for needs attention,
      | and grey (muted) for neutral. Semantic colors should never be used for decorative purposes.
  template(#example)
    .chi-grid
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        div(v-for="color in colors")
          div(:class="`chi-icon -${color} -m--1`")
            svg
              use(xlink:href='#icon-atom')
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
          active: true,
          id: 'webcomponent',
          label: 'Web Component',
        },
        {
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        },
      ],
      colors: ['icon--success', 'icon--info', 'icon--warning', 'icon--danger', 'icon--muted'],
      codeSnippets: {
        webcomponent: `<chi-icon icon="atom" color="success"></chi-icon>
<chi-icon icon="atom" color="info"></chi-icon>
<chi-icon icon="atom" color="warning"></chi-icon>
<chi-icon icon="atom" color="danger"></chi-icon>
<chi-icon icon="atom" color="muted"></chi-icon>`,
        htmlblueprint: `<i class="chi-icon icon-atom -icon--success" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--info" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--warning" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--danger" aria-hidden="true"></i>
<i class="chi-icon icon-atom -icon--muted" aria-hidden="true"></i>`,
      },
    };
  },
})
export default class Semantic extends Vue {}
</script>
