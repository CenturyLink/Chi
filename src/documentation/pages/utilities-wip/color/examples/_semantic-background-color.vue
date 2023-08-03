<template lang="pug">
  div
    h4 Semantic
    p.-text
      | Use semantic background-colors to communicate meaning to users. Examples include displaying alerts, form field
      | validation, user status, application state and more. Use green (success) for positive, blue (info)
      | for informative, red (danger) for negative, yellow (warning) for needs attention, and grey (muted)
      | for neutral. Semantic colors should never be used for decorative purposes.
    <TableComponent title="Color Class" :data="colors" :getContent="getContent" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITableColumn, ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@Component({
  data: () => {
    return {
      colors: [
        COLORS.SUCCESS,
        COLORS['SUCCESS-LIGHT'],
        COLORS['SUCCESS-LIGHTER'],
        COLORS.INFO,
        COLORS['INFO-LIGHT'],
        COLORS['INFO-LIGHTER'],
        COLORS.WARNING,
        COLORS['WARNING-LIGHT'],
        COLORS['WARNING-LIGHTER'],
        COLORS.DANGER,
        COLORS['DANGER-LIGHT'],
        COLORS['DANGER-LIGHTER'],
        COLORS.MUTED,
        COLORS['MUTED-LIGHT'],
        COLORS['MUTED-LIGHTER']
      ]
    }
  }
})

export default class SemanticBackgroundColor extends Vue {
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
