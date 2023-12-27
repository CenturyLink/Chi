<template lang="pug">
  div
    h2 Notation
    p.-text
      | Border utility classes can be defined using the format <code>-b{sides}[-{breakpoint}]--{size}</code>.

    h4 {sides}
    ul.-text
      li(v-for="side in sides") <code>{{ side.value }}</code> - use to apply <code>{{ side.name }}</code>
      li <code>x</code> - use to apply <code>border-left</code> and <code>border-right</code>
      li <code>y</code> - use to apply <code>border-top</code> and <code>border-bottom</code>
      li blank - leave blank to apply <code>border</code> to all 4 sides.

    h4 {breakpoint}
    p.-text
      | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
      | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
    ul.-text
      li blank - leave blank to apply <code>border</code> to all breakpoints.
      li(v-for="breakpoint in breakpoints") <code>{{ breakpoint }}</code> - use to apply <code>border</code> to {{ breakpoint }} {{ `${breakpoint === 'xl' ? '' : 'and larger'}` }} breakpoints.

    h4 {size}
    ul.-text
      li <code>0</code> - use to eliminate existing <code>border</code> and set to <code>0</code>
      li(v-for="index in 4" :key="index") <code>{{ index }}</code> - use to set <code>border</code> to <code>{{ index }}px</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      breakpoints: ['sm', 'md', 'lg', 'xl'],
      sides: [
        {
          value: 't',
          name: 'border-top'
        },
        {
          value: 'b',
          name: 'border-bottom'
        },
        {
          value: 'l',
          name: 'border-left'
        },
        {
          value: 'r',
          name: 'border-right'
        }
      ]
    };
  }
})

export default class Notation extends Vue {}
</script>
