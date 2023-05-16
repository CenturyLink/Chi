<template lang="pug">
  div
    h2 Notation
    p.-text
      | Spacing utility classes can be defined using the format <code>-{property}{sides}[-{breakpoint}]--{size}</code>.
    h4 {property}
    ul.-text
      li <code>m</code> - use to apply <code>margin</code>
      li <code>p</code> - use to apply <code>padding</code>
    h4 {sides}
    ul.-text
      li <code>t</code> - use to apply <code>margin-top</code> or <code>padding-top</code>
      li <code>b</code> - use to apply <code>margin-bottom</code> or <code>padding-bottom</code>
      li <code>l</code> - use to apply <code>margin-left</code> or <code>padding-left</code>
      li <code>r</code> - use to apply <code>margin-right</code> or <code>padding-right</code>
      li <code>x</code> - use to apply <code>margin-left</code> and <code>margin-right</code> or <code>padding-left</code> and <code>padding-right</code>
      li <code>y</code> - use to apply <code>margin-top</code> and <code>margin-bottom</code> or <code>padding-top</code> and <code>padding-bottom</code>
      li blank - leave blank to apply <code>margin</code> or <code>padding</code> to all 4 sides.
    h4 {breakpoint}
    p.-text
      | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
      | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
    ul.-text
      li blank - leave blank to apply <code>margin</code> or <code>padding</code> to all breakpoints.
      li <code>sm</code> - use to apply <code>margin</code> or <code>padding</code> to sm and larger breakpoints.
      li <code>md</code> - use to apply <code>margin</code> or <code>padding</code> to md and larger breakpoints.
      li <code>lg</code> - use to apply <code>margin</code> or <code>padding</code> to lg and larger breakpoints.
      li <code>xl</code> - use to apply <code>margin</code> or <code>padding</code> to xl breakpoints.
    h4 {size}
    ul.-text
      li <code>0</code> - use to eliminate existing <code>margin</code> or <code>padding</code> and set to <code>0</code>
      li <code>1</code> - use to set <code>margin</code> or <code>padding</code> to <code>$base-unit</code>
      li(v-for="index in 9") <code>{{index + 1}}</code> - use to set <code>margin</code> or <code>padding</code> to <code>$base-unit * {{index + 1}}</code>
      li <code>auto</code> - use to set <code>margin</code> to <code>auto</code> value
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})

export default class Notation extends Vue {}
</script>
