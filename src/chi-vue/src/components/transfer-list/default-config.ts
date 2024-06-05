import {
  COLUMN_CUSTOMIZATION_AVAILABLE_COLUMNS,
  COLUMN_CUSTOMIZATION_MODAL_TITLE,
  COLUMN_CUSTOMIZATION_SELECTED_COLUMNS,
  COLUMN_CUSTOMIZATION_TRIGGER,
} from '@/constants/constants';
import { TransferListConfig, TransferListModalConfig } from '@/constants/types';

/**
 * Default configs for transfer list component
 */
export const DEFAULT_ITEMS_SELECTION = { from: [], to: [] };
export const defaultConfig: { modal: TransferListModalConfig; transferList: TransferListConfig } = {
  modal: {
    tooltipMsg: COLUMN_CUSTOMIZATION_TRIGGER.TOOLTIP_MSG,
    icon: COLUMN_CUSTOMIZATION_TRIGGER.ICON,
    title: COLUMN_CUSTOMIZATION_MODAL_TITLE,
    ariaLabel: '',
  },
  transferList: {
    columns: {
      from: {
        title: COLUMN_CUSTOMIZATION_AVAILABLE_COLUMNS,
      },
      to: {
        title: COLUMN_CUSTOMIZATION_SELECTED_COLUMNS,
      },
    },
  },
};
