<template lang="pug">
  div
    h4 Base
    table.chi-table.-bordered.-mb--3
      thead
        tr
          th
            div Class
          th
            div Value
      tbody
        tr(v-for="opacity in values")
          td.-text(width='40%')
            code {{ `-opacity--${opacity.class}` }}
          td
            code {{ `opacity: ${opacity.value};` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class BreakpointsBase extends Vue {
  opacities = [0, 1, 2, 3, 4, 5];

  get values() {
    return this.opacities.map(elem => { return { value: elem * 2 / 10, class: (elem * 20).toString() }; });
  }
}
</script>
