import { UTILITY_CLASSES } from '@/constants/classes';
import { DataTableExpansionIcons } from '@/constants/types';

export const expansionIcons: DataTableExpansionIcons = {
  portal: {
    expanded: 'minus',
    collapsed: 'plus',
  },
  base: {
    expanded: 'chevron-up',
    collapsed: 'chevron-right',
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
