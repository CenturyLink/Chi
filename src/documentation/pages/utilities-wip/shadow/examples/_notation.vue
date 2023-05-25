<template lang="pug">
  .-pt--3
    <TitleAnchor title="Notation" id="notation" />
    p.-text(slot="example-description")
      | Shadow utility classes can be defined using the format <code>-s[-{breakpoint}]--{size}</code>.

    <TitleAnchor title="{size}" id="size" titleSize="h4" />
      ul.-text(slot="example-description")
        li(v-for="size in sizes") <code>{{ size.class }}</code> - use to set <code>box-shadow</code> to <code>{{ size.value }}</code>
    
    <TitleAnchor title="{breakpoint}" id="breakpoint" titleSize="h4" />
      p.-text(slot="example-description")
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text(slot="example-description")
        li(v-for="breakpoint in breakpoints") 
          <template v-if="breakpoint.class === 'blank'">
            <p class="-m--0">{{ breakpoint.class }} - leave blank to apply <code>shadow</code> to {{ breakpoint.value }} breakpoints.</p>
          </template>
          <template v-else>
            <p class="-m--0"><code>{{ breakpoint.class }}</code> - use to apply <code>shadow</code> to {{ breakpoint.value }} breakpoints.</p>
          </template>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { sizes, breakpoints } from '~/fixtures/fixtures';

@Component({
   data: () => {
    return {
      sizes,
      breakpoints
    };
  }
})
export default class Notation extends Vue {}
</script>