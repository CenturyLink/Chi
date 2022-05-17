<template lang="pug">
  ComponentExample(title="{property}" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li <code>m</code> - use to apply <code>margin</code>
      li <code>p</code> - use to apply <code>padding</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'property',
    };
  }
})
export default class Property extends Vue {}
</script>
