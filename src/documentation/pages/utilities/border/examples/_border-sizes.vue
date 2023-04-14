<template lang="pug">
fragment
  UtilityExample(title="Border Sides", id="border-sides")
    p.-text(slot="example-description")
      | Control an element's border size by adjusting the size from <code>0</code> - <code>4</code>.
    .-p--1(slot="example")
      .chi-grid.-text.-no-gutter.-text--center
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--0.-bg--grey-10 -b--0
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--1.-bg--grey-10 -b--1
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--2.-bg--grey-10 -b--2
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--3.-bg--grey-10 -b--3
        .chi-col.-w--6.-w-md--3.-w-xl--2
          .-m--1.-p--1.-py--5.-b--4.-bg--grey-10 -b--4
    <pre class="language-html" slot="code-example">
      <code v-highlight="$data.codeSnippet" class="html"></code>
    </pre>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Fragment } from 'vue-fragment'

  @Component({
    components: {
      Fragment
    },
    data: ()=> {
      return {
        codeSnippet: `<div class="-b--0"></div>
<div class="-b--1"></div>
<div class="-b--2"></div>
<div class="-b--3"></div>
<div class="-b--4"></div>`,
      }
    }
  })

  export default class BorderSizes extends Vue {}
</script>
