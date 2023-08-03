<template lang="pug">
  div
    h4 Target specific breakpoints
    p.-text To target a specific breakpoint, add the breakpoint abbreviation to the class.
    <TableComponent :data="values" :columns="columns" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from '~/models/models';

const sizes = ['sm', 'md', 'lg', 'xl']
const colors = ['none', 'primary', 'secondary', 'white', 'black', 'muted', 'grey', 'grey-20', 'grey-30', 'success', 'info', 'warning', 'danger']

@Component({
  data: () => {
    return {
      columns: [
        {
          title: 'Color Class',
          key: 'class',
          width: '40%'
        },
        {
          title: 'Value',
          key: 'value',
          width: ''
        }
      ]
    };
  }
})
export default class TargetSpecificBreakpoints extends Vue {
  get values() {
    return sizes.map(size => colors.map(color => { return { name: `${ size }--${color}`, value: size } })).flat()
  }

  getContent(column: ITableColumn, content: ITableContent) {
    switch (column.key) {
      case 'class':
        return `<code>-bg--${content.name}</code>`;
      case 'value':
        return `<div class="-text">Visible only from <code>${content.value}</code></div>`;
      default:
        return '';
    }
  }
}
</script>
