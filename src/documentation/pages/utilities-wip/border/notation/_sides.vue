<template lang="pug">
  ComponentExample(title="{sides}" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li(v-for="side in sides") <code>{{ side.charAt(0) }}</code> - use to apply <code>border-{{ side }}</code>
      li(v-for="side in axisSide") <code>{{ side }}</code> - use to apply <code>border-{{ side === 'x' ? 'left' : 'top' }}</code> and <code>border-{{ side === 'x' ? 'right' : 'bottom' }}</code>
      li blank - leave blank to apply <code>border</code> to all 4 sides.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'sides-notation-border',
      sides: ['top', 'bottom', 'left', 'right'],
      axisSide: ['x', 'y']
    };
  }
})
export default class Sides extends Vue {}
</script>
