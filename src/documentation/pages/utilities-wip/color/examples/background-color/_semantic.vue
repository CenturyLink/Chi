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
      id: 'semantic-example-background-color',
      colors: [
        '#007E44',
        '#DBFAEE',
        '#F1FEF8',
        '#0075C9',
        '#F5F9FC',
        '#E0F3FF',
        '#A15C00',
        '#FAECD9',
        '#FFF8ED',
        '#D62015',
        '#FFE8E5',
        '#FFF5F5',
        '#53565A',
        '#EDF0F2',
        '#F8F9F9'
      ],
      table: {
        head: ['Color Class', 'Value', 'Result'],
        body: [
          { data: ['-bg--success', 'background-color:#007E44'] },
          { data: ['-bg--success-light', 'background-color:#DBFAEE'] },
          { data: ['-bg--success-lighter', 'background-color:#F1FEF8'] },
          { data: ['-bg--info', 'background-color:#0075C9'] },
          { data: ['-bg--info-light', 'background-color:#F5F9FC'] },
          { data: ['-bg--info-lighter', 'background-color:#E0F3FF'] },
          { data: ['-bg--warning', 'background-color:#A15C00'] },
          { data: ['-bg--warning-light', 'background-color:#FAECD9'] },
          { data: ['-bg--warning-lighter', 'background-color:#FFF8ED'] },
          { data: ['-bg--danger', 'background-color:#D62015'] },
          { data: ['-bg--danger-light', 'background-color:#FFE8E5'] },
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
export default class Semantic extends Vue {}
</script>
