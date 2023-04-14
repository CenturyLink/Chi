<template lang="pug">
UtilityExample(title="Brand", id="icon-color-brand", titleSize="h3", padding='0')
  p.-text(slot="example-description") Brand icon colors reinforce Lumen's brand. Use primary and secondary as accents, and dark, grey, and light as neutrals.
  div(slot="example")
    .chi-grid.-no-gutter
      .chi-col.-w--12.-w-md--6.-p--1.-d--flex.-justify-content--center
        each color in ['icon--dark', 'icon--primary', 'icon--grey']
          i(class=`chi-icon icon-atom -md -${color} -m--1`, aria-hidden='true')
      .chi-col.-w--12.-w-md--6.-bg--black.-p--1.-d--flex.-justify-content--center
        each color in ['icon--secondary', 'icon--light']
          if (color === 'icon--secondary')
            i(class=`chi-icon icon-atom -md -icon--secondary -m--1`, aria-hidden='true')
          else if (color === 'icon--light')
            i(class=`chi-icon icon-atom -md -icon--light -m--1`, aria-hidden='true')
  <pre class="language-html" slot="code-example">
    <code v-highlight="$data.codeSnippet" class="html"></code>
  </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    data: ()=> {
      return {
        codeSnippet: `<!-- For light backgrounds -->
<i class="chi-icon icon-atom -md -icon--dark" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--primary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--grey" aria-hidden="true"></i>
<!-- For dark backgrounds -->
<i class="chi-icon icon-atom -md -icon--secondary" aria-hidden="true"></i>
<i class="chi-icon icon-atom -md -icon--light" aria-hidden="true"></i>`,
      }
    }
  })

  export default class IconColorBrand extends Vue {}
</script>
