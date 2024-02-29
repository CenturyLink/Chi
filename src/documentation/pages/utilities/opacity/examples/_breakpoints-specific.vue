<template lang="pug">
  div
    <TitleAnchor title="Base" id="specific-base" titleSize="h4"/>
    table.chi-table.-bordered.-mb--3
      thead
        tr
          th
            div Class
          th
            div Value
      tbody
          tr(v-for="size in sizes")
            td.-text(width="40%")
              code {{ `-opacity-${ size }--60` }}
            td.-text 60% opacity on <code>{{ size }}</code> and up.
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl'],
    };
  },
})
export default class BreakpointsSpecific extends Vue {}
</script>
