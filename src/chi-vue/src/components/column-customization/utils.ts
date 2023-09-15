import { DataTableColumn, DataTableColumnDefinition } from '../../constants/types';

export const icons = {
  'chevron-up': { ariaLabel: 'Move Up', ref: 'buttonMoveUp' },
  'chevron-down': { ariaLabel: 'Move Down', ref: 'buttonMoveDown' },
  'chevron-left': { ariaLabel: 'Deselect', ref: 'buttonDeselect' },
  'chevron-right': { ariaLabel: 'Select', ref: 'buttonRows' },
};

export const checkColumns = (originalData: DataTableColumn[], newData: DataTableColumn[]) => {
  const hasEqualSize = originalData.length === newData.length;
  const hasEqualColumns = (column: DataTableColumn, index: number) => {
    const item = newData[index];
    return item.name === column.name && item.selected === column.selected;
  };

  return hasEqualSize && originalData.every(hasEqualColumns);
};

export const _changeOrder = (arr: any[], oldIndex: number, newIndex: number) => {
  return arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
};

export const changeMultiplesColumnIndex = (columns: DataTableColumn[], oldIndexes: number[], direction: string) => {
  const minIndexAllowed = columns.filter(column => column.locked).length - 1;
  const columnsCopy = [...columns];

  oldIndexes.forEach(index => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;

    if (nextIndex <= minIndexAllowed) {
      return;
    }

    _changeOrder(columnsCopy, index, nextIndex);
  });

  return columnsCopy;
};
