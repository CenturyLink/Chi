<template lang="pug">
  ComponentExample(title="{breakpoint}" :id="id" :noExample="true")
    template(slot="no-example")
      p.-text
        | Optionally, include -{breakpoint} to apply the utility behaviour to some breakpoints. As a mobile-first library,
        | any applying to smaller breakpoints will also modify larger ones unless another class overrides this behaviour.
      ul.-text
        li blank - leave blank to apply <code>shadow</code> to all breakpoints.
        li(v-for="breakpoint in breakpoints") <code>{{ breakpoint }}</code> - use to apply <code>shadow</code> to {{ breakpoint }} {{ breakpoint !== 'xl' ? 'and larger' : '' }} breakpoints.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'breakpoints',
      breakpoints: ['sm', 'md', 'lg', 'xl']
    };
  }
})
export default class Breakpoint extends Vue {}
</script>
