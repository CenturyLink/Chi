<template lang="pug">
  div
    <TitleAnchor title="Hover" id="specific-hover" titleSize="h4"/>
    table.chi-table.-bordered.-mb--3
      thead
        tr
          th
            div Class
          th
            div Value
      tbody
          tr(v-for="size in sizes")
            td.-text(width='40%')
              code {{ `-opacity-hover-${ size }--60` }}
            td.-text 60% opacity on hover on <code>{{ size }}</code> and up.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      sizes: ['sm', 'md', 'lg', 'xl'],
    };
  },
})
export default class BreakpointsSpecificHover extends Vue {}
</script>
