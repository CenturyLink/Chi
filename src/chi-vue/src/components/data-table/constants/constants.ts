import { UTILITY_CLASSES } from '@/constants/classes';
import { DataTableExpansionIcons } from '@/constants/types';

export const expansionIcons: DataTableExpansionIcons = {
  portal: {
    expanded: 'minus',
    expandedAll: 'squares-minus-outline',
    collapsed: 'plus',
    collapsedAll: 'squares-plus-outline',
  },
  base: {
    expanded: 'chevron-up',
    expandedAll: 'squares-minus-outline',
    collapsed: 'chevron-right',
    collapsedAll: 'squares-plus-outline',
  },
};

export const alignmentUtilityClasses: {
  left: string;
  center: string;
  right: string;
} = {
  left: UTILITY_CLASSES.JUSTIFY.MD_START,
  center: UTILITY_CLASSES.JUSTIFY.MD_CENTER,
  right: UTILITY_CLASSES.JUSTIFY.MD_END,
};
