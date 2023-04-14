<template lang="pug">
fragment
  UtilityExample(title="Breakpoints", id="breakpoints")
    p.-text(slot="example-description") Target specific breakpoints with responsive classes.
    .-p--1(slot="example")
      .chi-grid.-text.-no-gutter.-text--center
        .chi-col.-w--6.-d--flex
          .-d--flex.-flex--grow1.-align-items--center.-justify-content--center.-m--1.-p--1.-py--5.-bx--0.-by--4.-bx-lg--4.-by-lg--0.-bg--grey-10
            | -bx--0 -by--4<br>-bx-lg--4 -by-lg--0
        .chi-col.-w--6
          .-d--flex.-flex--grow1.-align-items--center.-justify-content--center.-m--1.-p--1.-py--5.-b--0.-b-sm--1.-b-md--2.-b-lg--3.-b-xl--4.-bg--grey-10
            | -b--0 -b-sm--1<br>-b-md--2 -b-lg--3<br>-b-xl--4
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
        codeSnippet: `<div class="-bx--0 -by--4 -bx-lg--4 -by-lg--0"></div>
<div class="-b--0 -b-sm--1 -b-md--2 -b-lg--3 -b-xl--4"></div>`,
      }
    }
  })

  export default class Breakpoints extends Vue {}
</script>
