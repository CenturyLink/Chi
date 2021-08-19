<template lang="pug">
  .chi-grid__container
    nav.docs-tabs
      ul.chi-tabs#viewtabs
        li
          a Examples
        li
          a Properties
        li
          a Accessibility
        //- - var tabNumber = 0
        //- each title, tab in tabs
        //-   if tabNumber == 0
        //-     li.-active
        //-       a(href=`#${title}`) #{tab}
        //-   else
        //-     li
        //-       a(href=`#${title}`) #{tab}
        //-   - tabNumber++
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Themes } from '~/models/models';

declare const chi: any;

@Component({})
export default class BaseExample extends Vue {
  theme: Themes = this.$store.state.themes.theme;

  mounted() {
    // const accordionBase = document.getElementById('example-base');

    // chi.accordion(accordionBase);
  }
}
</script>
