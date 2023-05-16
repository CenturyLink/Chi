<template lang="pug">
  .chi-grid__container.-pt--3
    <ComponentExample title="Notation" id="supportedValues" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | Shadow utility classes can be defined using the format <code>-s[-{breakpoint}]--{size}</code>.
    </ComponentExample>

    <Size />
    <Breakpoint />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Size from './_size.vue'
import Breakpoint from './_breakpoint.vue'

@Component({
  components: {
    Size,
    Breakpoint
  }
})
export default class Notation extends Vue {}
</script>
