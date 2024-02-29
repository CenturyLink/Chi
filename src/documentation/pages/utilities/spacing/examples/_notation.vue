<template lang="pug">
  div
    <TitleAnchor title="Notation" id="notation" />
    p.-text
      | Spacing utility classes can be defined using the format <code>-{property}{sides}[-{breakpoint}]--{size}</code>.
    <TitleAnchor title="{property}" id="property" titleSize="h4" />
    ul.-text
      li <code>m</code> - use to apply <code>margin</code>
      li <code>p</code> - use to apply <code>padding</code>
    <TitleAnchor title="{sides}" id="sides" titleSize="h4" />
    ul.-text
      li(v-for="side in sides") <code>{{ side.class }}</code> - use to apply <code>margin-{{ side.value }}</code> or <code>padding-{{ side.value }}</code>
      li <code>x</code> - use to apply <code>margin-left</code> and <code>margin-right</code> or <code>padding-left</code> and <code>padding-right</code>
      li <code>y</code> - use to apply <code>margin-top</code> and <code>margin-bottom</code> or <code>padding-top</code> and <code>padding-bottom</code>
      li blank - leave blank to apply <code>margin</code> or <code>padding</code> to all 4 sides.
    <TitleAnchor title="{breakpoint}" id="breakpoint" titleSize="h4" />
    p.-text
      | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
      | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
    ul.-text
      li blank - leave blank to apply <code>margin</code> or <code>padding</code> to all breakpoints.
      li(v-for="breakpoint in breakpoints") <code>{{ breakpoint.class }}</code> - use to apply <code>margin</code> or <code>padding</code> to {{ breakpoint.value }} breakpoints.
    <TitleAnchor title="{size}" id="size" titleSize="h4" />
    ul.-text
      li <code>0</code> - use to eliminate existing <code>margin</code> or <code>padding</code> and set to <code>0</code>
      li <code>1</code> - use to set <code>margin</code> or <code>padding</code> to <code>$base-unit</code>
      li(v-for="index in 9") <code>{{index + 1}}</code> - use to set <code>margin</code> or <code>padding</code> to <code>$base-unit * {{index + 1}}</code>
      li <code>auto</code> - use to set <code>margin</code> to <code>auto</code> value
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Notation extends Vue {
  sides = [
    {
      class: 't',
      value: 'top',
    },
    {
      class: 'b',
      value: 'bottom',
    },
    {
      class: 'l',
      value: 'left',
    },
    {
      class: 'r',
      value: 'right',
    },
  ];

  breakpoints = [
    { class: 'sm', value: 'sm and larger' },
    { class: 'md', value: 'md and larger' },
    { class: 'lg', value: 'lg and larger' },
    { class: 'xl', value: 'xl' },
  ];
}
</script>
