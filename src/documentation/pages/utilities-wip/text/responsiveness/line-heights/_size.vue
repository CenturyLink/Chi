<template lang="pug">
  ComponentExample(title="{size}" :titleSize="'h4'" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li(v-for="size in sizes") <code>{{ size }}</code> - use to set <code>line-height</code> {{ size === 0 ? 'set to' : 'to' }} <code>{{ size !== 0 ? `$base-unit * ${size}` : size }}</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size',
      sizes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
})
export default class Size extends Vue {}
</script>
