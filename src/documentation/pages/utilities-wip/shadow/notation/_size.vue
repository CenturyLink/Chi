<template lang="pug">
  ComponentExample(title="{size}" :id="id" :noExample="true")
    template(slot="no-example")
      ul.-text
        li(v-for="size in sizes") <code>{{ size }}</code> - use to set <code>box-shadow</code> to <code>{{ size === 0 ? 'none' : size === 5 ? '12px' : size === 1 ? '1px' : `${size * 2}px` }}</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size',
      sizes: [0, 1, 2, 3, 4, 5]
    };
  }
})
export default class Size extends Vue {}
</script>
