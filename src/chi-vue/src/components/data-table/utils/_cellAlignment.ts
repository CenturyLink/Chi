import { DATA_TABLE_CLASSES } from '../../../constants/classes';

export const cellAlignment = (align: string) => {
  const alignmentUtilityClasses: any = {
    left: '-justify-content-md--start',
    center: '-justify-content-md--center',
    right: '-justify-content-md--end'
  };

  if (align) {
    return alignmentUtilityClasses[align];
  }

  return;
};

export const dataTableClasses = (style: any, sortable: boolean) => {
  return [
    DATA_TABLE_CLASSES.DATA_TABLE,
    '-compact',
    style.portal ? '-portal' : null,
    style.bordered ? '-bordered' : null,
    style.noBorder ? '-no-border' : null,
    style.hover ? '-hover' : null,
    style.striped ? '-striped' : null,
    style.size ? `-${style.size}` : null,
    sortable ? `-sorting` : null,
  ].join(' ');
};
