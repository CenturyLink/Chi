<template lang="pug">
UtilityExample(title="Semantic", id="icon-color-semantic", titleSize="h3", padding='0')
  p.-text(slot="example-description")
    | Use semantic text colors to communicate meaning to users. Examples include displaying alerts, form field
    | validation, user status, application state and more. Use green (success) for positive, blue (info)
    | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
    | for neutral. Semantic colors should never be used for decorative purposes.
  div(slot="example")
    .chi-grid.-no-gutter
      .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
        each color in ['icon--success', 'icon--info', 'icon--warning', 'icon--danger', 'icon--muted']
          i(class=`chi-icon icon-atom -md -${color} -m--1`, aria-hidden='true')
  <pre class="language-html" slot="code-example">
    <code v-highlight="$data.codeSnippet" class="html"></code>
  </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    data: ()=> {
      return {
        codeSnippet: `<i class="chi-icon icon-atom -md -icon--success" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--info" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--warning" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--danger" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--muted" aria-hidden="true"></i>`,
      }
    }
  })

  export default class IconColorSemantic extends Vue {}
</script>
