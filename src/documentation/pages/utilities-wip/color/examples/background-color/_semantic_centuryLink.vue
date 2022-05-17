<template lang="pug">
  ComponentExample(title="Semantic" :id="id" :padding="'-p--0'" :noExample="true")
    template(slot="no-example")
      p.-text Use semantic background-colors to communicate meaning to users. Examples include displaying alerts, form field
        | validation, user status, application state and more. Use green (success) for positive, blue (info)
        | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
        | for neutral. Semantic colors should never be used for decorative purposes.
      CustomTable(:tableData="table" :border="true" :additionalClasses="'-mt--3 -mb--3'")
        template(v-for="color, index in colors" :slot="`customCell-${index}-2`")
          .-text.-b--1(:style="`background-color:${color}; height:15px;`")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'semantic-centurylink-example-background-color',
      colors: [
        '#008000',
        '#CEF2CE',
        '#E6FAE6',
        '#0060FA',
        '#E6F0FF',
        '#F5F8FC',
        '#946300',
        '#F9F5BE',
        '#FDFBD8',
        '#D81820',
        '#FCE8E9',
        '#FFF5F5',
        '#53565A',
        '#EDF0F2',
        '#F8F9F9'
      ],
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [
          { data: ['-bg--success', 'background-color:#008000'] },
          { data: ['-bg--success-light', 'background-color:#CEF2CE'] },
          { data: ['-bg--success-lighter', 'background-color:#E6FAE6'] },
          { data: ['-bg--info', 'background-color:#0060FA'] },
          { data: ['-bg--info-light', 'background-color:#E6F0FF'] },
          { data: ['-bg--info-lighter', 'background-color:#F5F8FC'] },
          { data: ['-bg--warning', 'background-color:#946300'] },
          { data: ['-bg--warning-light', 'background-color:#F9F5BE'] },
          { data: ['-bg--warning-lighter', 'background-color:#FDFBD8'] },
          { data: ['-bg--danger', 'background-color:#D81820'] },
          { data: ['-bg--danger-light', 'background-color:#FCE8E9'] },
          { data: ['-bg--danger-lighter', 'background-color:#FFF5F5'] },
          { data: ['-bg--muted', 'background-color:#53565A'] },
          { data: ['-bg--muted-light', 'background-color:#EDF0F2'] },
          { data: ['-bg--muted-lighter', 'background-color:#F8F9F9'] }
        ],
        config: {
          cells: [
            { hasCode: true, width: '25%' },
            { hasCode: true, width: '35%' },
            { hasCode: false, width: '40%' }
          ]
        }
      }
    };
  }
})
export default class SemanticCenturyLink extends Vue {}
</script>
