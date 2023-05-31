<template lang="pug">
  div
    <TitleAnchor title="Responsive" id="opacity-responsive" titleSize="h2"/>
    p.-text
      | Responsive opacity classes can be defined using the format <code>-opacity[-{breakpoint}]--{value}</code> and
      | <code>-opacity-hover[-{breakpoint}]--{value}</code>.
      | Breakpoints supported are <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.

    <TitleAnchor title="Target all breakpoints" id="opacity-target-all" titleSize="h3"/>
    p.-text
      | Opacity utility classes with no breakpoint defined apply to all screen sizes.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Responsive extends Vue {}
</script>
