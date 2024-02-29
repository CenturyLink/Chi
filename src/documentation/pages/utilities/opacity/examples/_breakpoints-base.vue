<template lang="pug">
  div
    <TitleAnchor title="Base" id="breakpoints-base" titleSize="h4"/>
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
            code {{ `-opacity--${ opacity.class }` }}
          td
            code {{ `opacity: ${ opacity.value };` }}
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      opacities: [
        { value: 0, class: 0 },
        { value: 0.2, class: 20 },
        { value: 0.4, class: 40 },
        { value: 0.6, class: 60 },
        { value: 0.8, class: 80 },
        { value: 1, class: 100 },
      ],
    };
  },
})
export default class BreakpointsBase extends Vue {}
</script>
