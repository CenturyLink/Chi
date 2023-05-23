<template lang="pug">
  div
    h3 Responsive
    p.-text
      | Responsive opacity classes can be defined using the format <code>-opacity[-{breakpoint}]--{value}</code> and
      | <code>-opacity-hover[-{breakpoint}]--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    h4 Target all breakpoints
    p.-text
      | Opacity utility classes with no breakpoint defined apply to all screen sizes.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class OpacityResponsive extends Vue {}
</script>
