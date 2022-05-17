<template lang="pug">
  ComponentExample(title="{size}" :titleSize="'h4'" :id="id" :noExample="true")
    template(slot="no-example")
      ul.-text
        li(v-for="size in sizes") <code>{{ size }}</code> - use to apply an <code>{{ setSizeName(size) }}</code> size to <code>text</code>
      ul.-text
        li(v-for="head in heads") <code>{{ head }}</code> - use to apply an <code>{{ head }}</code> size to <code>text</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'size',
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      heads: ['h6', 'h5', 'h4', 'h3', 'h2', 'h1']
    };
  }
})
export default class Size extends Vue {
  setSizeName(size: string) {
    return size === 'xs'
      ? 'x-small'
      : size === 'sm'
      ? 'small'
      : size === 'md'
      ? 'medium'
      : size === 'lg'
      ? 'large'
      : 'x-large';
  }
}
</script>
