<template lang="pug">
  .-pt--3
    <TitleAnchor title="Notation" id="notation" />
    p.-text(slot="example-description")
      | Shadow utility classes can be defined using the format <code>-s[-{breakpoint}]--{size}</code>.

    <TitleAnchor title="{size}" id="size" titleSize="h4" />
      ul.-text(slot="example-description")
        li <code>0</code> - use to set <code>box-shadow</code> to <code>none</code>
        li <code>1</code> - use to set <code>box-shadow</code> to <code>1px</code>
        li <code>2</code> - use to set <code>box-shadow</code> to <code>4px</code>
        li <code>3</code> - use to set <code>box-shadow</code> to <code>6px</code>
        li <code>4</code> - use to set <code>box-shadow</code> to <code>8px</code>
        li <code>5</code> - use to set <code>box-shadow</code> to <code>12px</code>
    
    <TitleAnchor title="{breakpoint}" id="breakpoint" titleSize="h4" />
      p.-text(slot="example-description")
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text(slot="example-description")
        li blank - leave blank to apply <code>shadow</code> to all breakpoints.
        li <code>sm</code> - use to apply <code>shadow</code> to sm and larger breakpoints.
        li <code>md</code> - use to apply <code>shadow</code> to ms and larger breakpoints.
        li <code>lg</code> - use to apply <code>shadow</code> to lg and larger breakpoints.
        li <code>xl</code> - use to apply <code>shadow</code> to xl breakpoints.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Notation extends Vue {}
</script>