<template lang="pug">
  ComponentExample(title="{sides}" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li(v-for="side in sides") <code>{{ side === 'top' ? 't' : side === 'bottom' ? 'b' : side === 'right' ? 'r' : 'l' }}</code> - use to apply <code>margin-{{ side }}</code> or <code>padding-{{ side }}</code>
      li(v-for="side in axisSide") <code>{{ side }}</code> - use to apply <code>margin-{{ side === 'x' ? 'left' : 'top' }}</code> and <code>margin-{{ side === 'x' ? 'right' : 'bottom' }}</code> or <code>padding-{{ side === 'x' ? 'left' : 'top' }}</code> and <code>padding-{{ side === 'x' ? 'right' : 'bottom' }}</code>
      li blank - leave blank to apply <code>margin</code> or <code>padding</code> to all 4 sides.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'sides',
      sides: ['top', 'bottom', 'right', 'left'],
      axisSide: ['x', 'y']
    };
  }
})
export default class Sides extends Vue {}
</script>
