import { DataTableColumn, DataTableColumnDefinition } from '../../constants/types';

export const icons = {
  'chevron-up': { ariaLabel: 'Move Up', ref: 'buttonMoveUp' },
  'chevron-down': { ariaLabel: 'Move Down', ref: 'buttonMoveDown' },
  'chevron-left': { ariaLabel: 'Deselect', ref: 'buttonDeselect' },
  'chevron-right': { ariaLabel: 'Select', ref: 'buttonRows' },
};

export const checkColumnsChanged = (originalData: DataTableColumn[], newData: DataTableColumn[]) => {
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
  const columnsCopy = [...columns];
  // eslint-disable-next-line
  // @ts-ignore
  const lastLocked = columnsCopy.findLastIndex(({ locked }) => locked);

  oldIndexes.forEach(index => {
    const isWildCard = columnsCopy[index].wildcard === true;
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    const isGreaterThanLastLocked = nextIndex > lastLocked;

    const canChange = nextIndex >= 0 && (isWildCard || isGreaterThanLastLocked);

    if (canChange) {
      return _changeOrder(columnsCopy, index, nextIndex);
    }
  });

  return columnsCopy;
};
