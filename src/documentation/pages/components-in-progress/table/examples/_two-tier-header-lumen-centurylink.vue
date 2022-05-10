<template lang="pug">
  <ComponentExample title="Two tier table header" id="two-tier-header-lumen-centurylink" :tabs="exampleTabs">
    table.chi-table(slot="example")
      colgroup
        col
      colgroup(span='2' v-for="index in 2" :key="index")
      colgroup
        col
      thead
        tr
          th.-sorted.-descending
            div Location
          th(colspan='2', scope='colgroup') High Utilization
          th(colspan='2', scope='colgroup') Elevated Utilization
          th.-sorted.-descending
            div Highest %
        tr
          td.-th(scope='col')
          th.-sorted.-descending(scope='col' v-for="index in 4" :key="index")
            div {{ index % 2 === 0 ? '%' : 'Total' }}
          td.-th(scope='col')
      tbody
        tr(v-for="(row, index) in rows" :key="index")
          td.-text--normal(scope='row') {{ row.cell1 }}
          td {{ row.cell2 }}
          td {{ row.cell3 }}
          td {{ row.cell4 }}
          td {{ row.cell5 }}
          td {{ row.cell6 }}
    <pre class="language-html" slot="code-webcomponent">
      <code v-highlight="$data.codeSnippets.webcomponent" class="html"></code>
    </pre> 
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      rows: [
        {
          cell1: 'Location 1',
          cell2: '3',
          cell3: '98%',
          cell4: '—',
          cell5: '—',
          cell6: '98%'
        },
        {
          cell1: 'Location 2',
          cell2: '1',
          cell3: '98%',
          cell4: '3',
          cell5: '67%',
          cell6: '98%'
        },
        {
          cell1: 'Location 3',
          cell2: '—',
          cell3: '—',
          cell4: '2',
          cell5: '66%',
          cell6: '66%'
        },
        {
          cell1: 'Location 4',
          cell2: '—',
          cell3: '—',
          cell4: '1',
          cell5: '66%',
          cell6: '66%'
        }
      ],
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
        htmlblueprint: `<table class="chi-table">
    <colgroup>
        <col />
    </colgroup>
    <colgroup span="2"></colgroup>
    <colgroup span="2"></colgroup>
    <colgroup>
        <col />
    </colgroup>
    <thead>
        <tr>
            <th class="-sorted -descending">
                <div>Location</div>
            </th>
            <th colspan="2" scope="colgroup">High Utilization</th>
            <th colspan="2" scope="colgroup">Elevated Utilization</th>
            <th class="-sorted -descending">
                <div>Highest %</div>
            </th>
        </tr>
        <tr>
            <td class="-th" scope="col"></td>
            <th class="-sorted -descending" scope="col">
                <div>Total</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>%</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>Total</div>
            </th>
            <th class="-sorted -descending" scope="col">
                <div>%</div>
            </th>
            <td class="-th" scope="col"></td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="-text--normal" scope="row">Location 1</td>
            <td>3</td>
            <td>98%</td>
            <td>—</td>
            <td>—</td>
            <td>98%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 2</td>
            <td>1</td>
            <td>98%</td>
            <td>3</td>
            <td>67%</td>
            <td>98%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 3</td>
            <td>—</td>
            <td>—</td>
            <td>2</td>
            <td>66%</td>
            <td>66%</td>
        </tr>
        <tr>
            <td class="-text--normal" scope="row">Location 4</td>
            <td>—</td>
            <td>—</td>
            <td>1</td>
            <td>66%</td>
            <td>66%</td>
        </tr>
    </tbody>
</table>`
      }
    };
  }
})
export default class TwoTierHeaderLumenCenturyLink extends Vue {}
</script>
