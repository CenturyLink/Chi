<template lang="pug">
fragment
  UtilityExample(title="Brand complimentary", id="icon-color-brand-complimentary", titleSize="h3", padding='0')
    p.-text(slot="example-description")
      | More icon colors that can be used to compliment the primary brand palette.
    div(slot="example")
      .chi-grid.-no-gutter
        .chi-col.-w--12-text--center.-p--1.-d--flex.-justify-content--center
          each color in ['icon--navy', 'icon--orange']
            i(class=`chi-icon icon-atom -md -${color} -m--1`, aria-hidden='true')
    <pre class="language-html" slot="code-example">
      <code v-highlight="$data.codeSnippet" class="html"></code>
    </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from "vue-fragment";

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {
        codeSnippet: `<i class="chi-icon icon-atom -md -icon--navy" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--orange" aria-hidden="true"></i>`,
      }
    }
  })

  export default class IconColorBrandComplimentary extends Vue {}
</script>
