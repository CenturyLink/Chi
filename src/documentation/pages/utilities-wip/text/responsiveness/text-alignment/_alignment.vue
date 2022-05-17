<template lang="pug">
  ComponentExample(title="{alignment}" :titleSize="'h4'" :id="id" :noExample="true")
    ul.-text(slot="no-example")
      li(v-for="alignment in alignments") <code>{{ alignment }}</code> - use to set <code>{{ alignment }}</code> the <code>text</code>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'alignments',
      alignments: ['justify', 'center', 'left', 'right']
    };
  }
})
export default class Alignment extends Vue {}
</script>
