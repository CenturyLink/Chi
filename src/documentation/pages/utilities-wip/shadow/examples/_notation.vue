<template lang="pug">
  .-pt--3
    <TitleAnchor title="Notation" id="notation" />
    p.-text
      | Shadow utility classes can be defined using the format <code>-s[-{breakpoint}]--{size}</code>.

    <TitleAnchor title="{size}" id="size" titleSize="h4" />
      ul.-text
        li(v-for="size in this.sizes") <code>{{ size.class }}</code> - use to set <code>box-shadow</code> to <code>{{ size.value }}</code>
    
    <TitleAnchor title="{breakpoint}" id="breakpoint" titleSize="h4" />
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li
          | blank - leave blank to apply <code>shadow</code> to all breakpoints.
        li(v-for="breakpoint in this.breakpoints") 
          | <code>{{ breakpoint.class }}</code> - use to apply <code>shadow</code> to {{ breakpoint.value }} breakpoints.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { IBreakpoint, ISize } from '~/models/models';

@Component({})

export default class Notation extends Vue {
  sizes: ISize[] = [
    { class: 0, value: 'none' },
    { class: 1, value: '1px' },
    { class: 2, value: '4px' },
    { class: 3, value: '6px' },
    { class: 4, value: '8px' },
    { class: 5, value: '12px' },
  ];

  breakpoints: IBreakpoint[] = [
    { class: 'sm', value: 'sm and larger' },
    { class: 'md', value: 'md and larger' },
    { class: 'lg', value: 'lg and larger' },
    { class: 'xl', value: 'xl' },
  ];
}
</script>