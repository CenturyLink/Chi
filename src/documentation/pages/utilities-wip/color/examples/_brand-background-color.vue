<template lang="pug">
  div
    h4 Brand
    p.-text More background-colors that can be used to compliment the primary brand palette.
    <DataTable title="Color Class" :data="colors" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class BrandBackgroundColor extends Vue {
  get theme() {
    return this.$store.state.themes.theme;
  }
  get isNotCenturylink() {
    return this.theme !== 'centurylink';
  }
  get colors() {
    return [
      {
        name: 'primary',
        value: this.isNotCenturylink ? '#0075C9' : '#0047BB',
      },
      {
        name: 'secondary',
        value: this.isNotCenturylink ? '#38C6F4' : '#48D597',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'white',
        value: '#FFFFFF',
      }
    ]
  }
}
</script>
