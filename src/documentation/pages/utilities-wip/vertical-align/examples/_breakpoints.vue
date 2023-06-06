<template lang="pug">
  div
    <TitleAnchor title="Target all breakpoints" id="breakpoints-base-vertical" />
    p.-text
      | Vertical-align utility classes with no breakpoint defined apply to all screen sizes.
    table.chi-table.-bordered.-mt--3.-mb--3
      thead
        tr
          th
            div Class
          th
            div Value
      tbody
        tr(v-for="value in values")
          td.-text(width='40%')
            code {{`-vertical-align--${ value }`}}
          td
            code {{`vertical-align: ${ value };`}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      values: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'],
    };
  },
})
export default class Breakpoints extends Vue {}
</script>
