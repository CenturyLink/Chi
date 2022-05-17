<template lang="pug">
  ComponentExample(title="{size}" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li <code>0</code> - use to eliminate existing <code>border</code> and set to <code>0</code>
      li(v-for="size in sizes") <code>{{ size }}</code> - use to set <code>border</code> to <code>{{ size }}px</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size-notation-border',
      sizes: [1, 2, 3, 4],
    };
  }
})
export default class Size extends Vue {}
</script>
