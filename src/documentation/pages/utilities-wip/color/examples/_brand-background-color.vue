<template lang="pug">
  div
    h4 Brand
    p.-text More background-colors that can be used to compliment the primary brand palette.
    section.chi-table.-bordered.-mt--3.-mb--3
      table.-text(cellpadding='0', cellspacing='0')
        thead
          tr
            th
              div Color Class
            th
              div Value
            th
              div Result
        tbody
          tr(v-for="color in colors")
            td(width='25%')
              code {{ `-bg--${ color.name }` }}
            td(width='35%')
              code {{ `background-color: ${color.value}` }}
            td(width='40%')
              .-text.-b--1(:style='`background-color:${color.value}; height:15px;`')
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
