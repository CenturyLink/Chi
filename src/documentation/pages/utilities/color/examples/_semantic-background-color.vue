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
import { Vue } from 'vue-facing-decorator';
import { type ITableColumn, type ITableContent } from '~/models/models';
import { generateBasicUtilitiesColorContent } from '~/utilities/utilities';
import { COLORS } from '~/constants/constants';

@NuxtComponent({})
export default class SemanticBackgroundColor extends Vue {
  colors = [
    COLORS.SUCCESS,
    COLORS.SUCCESS_LIGHT,
    COLORS.SUCCESS_LIGHTER,
    COLORS.INFO,
    COLORS.INFO_LIGHT,
    COLORS.INFO_LIGHTER,
    COLORS.WARNING,
    COLORS.WARNING_LIGHT,
    COLORS.WARNING_LIGHTER,
    COLORS.DANGER,
    COLORS.DANGER_LIGHT,
    COLORS.DANGER_LIGHTER,
    COLORS.MUTED,
    COLORS.MUTED_LIGHT,
    COLORS.MUTED_LIGHTER,
  ];
  getContent(column: ITableColumn, content: ITableContent) {
    return generateBasicUtilitiesColorContent(column, content);
  }
}
</script>
