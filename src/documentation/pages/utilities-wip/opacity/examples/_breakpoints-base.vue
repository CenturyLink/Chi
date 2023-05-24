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
        tr(v-for="opacity in opacities")
          td.-text(width='40%')
            code {{ `-opacity--${opacity.class}` }}
          td
            code {{ `opacity: ${opacity.value};` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class BreakpointsBase extends Vue {
  opacities = [
    { value: 0, class: 0 },
    { value: .2, class: 20 },
    { value: .4, class: 40 },
    { value: .6, class: 60 },
    { value: .8, class: 80 },
    { value: 1, class: 100 },
  ];
}
</script>
