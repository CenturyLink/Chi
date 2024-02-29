<template lang="pug">
p.-text.-mb--3
  | Chi supports the latest, stable versions of all major browsers, including
  | Chrome, Firefox, Microsoft Edge, Safari, and Opera.
  | Chi uses <a href="https://github.com/postcss/autoprefixer" target="_blank" rel="noopener">Autoprefixer</a> to improve CSS support in older
  | browser versions and <a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener">Normalize.css</a> for CSS resets.

.-mb--6(style="overflow-x:auto;")
  table.chi-table.-lg.-bordered.-text--center(aria-label='Supported browsers for Mac and Windows')
    thead
      tr
        th(v-for="header in tableHeaders").-text--center {{ header }}
    tbody
      tr
        td.-text--left
          | Mac
        td(v-for="line1 in lines1")
          i(:class="line1 ? 'chi-icon icon-check -icon--success' : ''")

      tr
        td.-text--left
          | Windows
        td(v-for="line2 in lines2")
          i(:class="line2 ? 'chi-icon icon-check -icon--success' : ''")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class BrowserSupport extends Vue {
  tableHeaders = ['', 'Chrome 45+', 'Firefox 43+', 'Edge 15+', 'Safari 9+', 'Opera 30+'];
  lines1 = [true, true, false, true, true];
  lines2 = [true, true, true, false, true];
}
</script>
