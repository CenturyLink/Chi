<template lang="pug">
  ComponentExample(title="{size}" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li <code>0</code> - use to eliminate existing <code>border</code> and set to <code>0</code>
      li(v-for="size in sizes") use to set <code>margin</code> or <code>padding</code> to <code>$base-unit {{ size > 1 ? `* ${size}` : '' }}</code>
      li <code>auto</code> - use to set <code>margin</code> to <code>auto</code> value
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size',
      sizes: [1, 2, 3, 4, 6, 7, 8, 9, 10]
    };
  }
})
export default class Size extends Vue {}
</script>
