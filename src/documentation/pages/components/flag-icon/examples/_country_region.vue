<template lang="pug">
  <ComponentExample title="Country/Region" id="country_region" padding="-p--0" :tabs="exampleTabs">
    div(slot="example")
       section.chi-table.-bordered
        div
          table
            thead
              tr
                th
                  div Icon
                th
                  div Name
                th
                  div Class
            tbody
              each val, type in {ar:'Argentina', au:'Australia', br:'Brazil', co:'Colombia', de:'Germany', hk:'Hong Kong', in:'India', jp:'Japan', mx:'Mexico', sg:'Singapore', gb:'United Kingdom', us:'United States'}
                tr
                  td.-w--20
                    i(class=`chi-flag-icon icon-${type}`, aria-hidden='true')
                  td
                    p.-m--0=val
                  td
                    code=`icon--${type}`
    div(slot="code-webcomponent")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
      </pre>
    div(slot="code-htmlblueprint")
      <pre class="language-html">
        <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
      </pre>          
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      string: 'String',
      exampleTabs: [
        {
          disabled: true,
          id: 'webcomponent',
          label: 'Web component'
        },
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML blueprint'
        }
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `<i class="chi-flag-icon icon-ar" aria-hidden="true"></i>
<i class="chi-flag-icon icon-au" aria-hidden="true"></i>
<i class="chi-flag-icon icon-br" aria-hidden="true"></i>
<i class="chi-flag-icon icon-co" aria-hidden="true"></i>
<i class="chi-flag-icon icon-de" aria-hidden="true"></i>
<i class="chi-flag-icon icon-hk" aria-hidden="true"></i>
<i class="chi-flag-icon icon-in" aria-hidden="true"></i>
<i class="chi-flag-icon icon-jp" aria-hidden="true"></i>
<i class="chi-flag-icon icon-mx" aria-hidden="true"></i>
<i class="chi-flag-icon icon-sg" aria-hidden="true"></i>
<i class="chi-flag-icon icon-gb" aria-hidden="true"></i>
<i class="chi-flag-icon icon-us" aria-hidden="true"></i>`
      }
    };
  }
})
export default class CountryRegion extends Vue {
  mounted() {}
}
</script>

<style scoped>
  section.chi-table.-bordered table {
    border-collapse: collapse;
    margin: 0 auto;
  }
  section.chi-table.-bordered table td {
    padding: 1rem;
    border: .0625rem solid #d0d4d9;
  }
  section.chi-table.-bordered table tr:first-child th {
    border-top: 0;
  }
  section.chi-table.-bordered table tr td:first-child,
  section.chi-table.-bordered table tr th:first-child {
    border-left: 0;
  }
  section.chi-table.-bordered table tr:last-child td {
    border-bottom: 0;
  }
  section.chi-table.-bordered table tr td:last-child,
  section.chi-table.-bordered table tr th:last-child {
    border-right: 0;
  }
</style>
