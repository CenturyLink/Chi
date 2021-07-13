import { DataTableColumn } from '../../constants/types';

export const checkColumns = (originalData: DataTableColumn[], newData: DataTableColumn[]) => {
  if (originalData && newData) {
    const columnDataIsSimilar = (column: DataTableColumn, index: number) => {
      const newDataColumn = newData[index];

      return newDataColumn.selected === column.selected && newDataColumn.name === column.name;
    };

    return originalData.length === newData.length && originalData.every(columnDataIsSimilar);
  }
  return false;
};

// eslint-disable-next-line
export const _changeOrder = (arr: any[], oldIndex: number, newIndex: number) => {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
};
