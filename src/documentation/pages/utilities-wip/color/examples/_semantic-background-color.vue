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
        {
          name: 'success',
          value: COLORS.SUCCESS,
        },
        {
          name: 'success-light',
          value: COLORS['SUCCESS-LIGHT'],
        },
        {
          name: 'success-lighter',
          value: COLORS['SUCCESS-LIGHTER'],
        },
        {
          name: 'info',
          value: COLORS.INFO,
        },
        {
          name: 'info-light',
          value: COLORS['INFO-LIGHT'],
        },
        {
          name: 'info-lighter',
          value: COLORS['INFO-LIGHTER'],
        },
        {
          name: 'warning',
          value: COLORS.WARNING,
        },
        {
          name: 'warning-light',
          value: COLORS['WARNING-LIGHT'],
        },
        {
          name: 'warning-lighter',
          value: COLORS['WARNING-LIGHTER'],
        },
        {
          name: 'danger',
          value: COLORS.DANGER,
        },
        {
          name: 'danger-light',
          value: COLORS['DANGER-LIGHT'],
        },
        {
          name: 'danger-lighter',
          value: COLORS['DANGER-LIGHTER'],
        },
        {
          name: 'muted',
          value: COLORS.MUTED,
        },
        {
          name: 'muted-light',
          value: COLORS['MUTED-LIGHT'],
        },
        {
          name: 'muted-lighter',
          value: COLORS['MUTED-LIGHTER'],
        }
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
