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

export const _changeOrder = (arr: any[], oldIndex: number, newIndex: number) => {
  if (newIndex === arr.length) {
    arr.splice(0, 0, arr.splice(oldIndex, 1)[0]);
  } else if (newIndex === -1) {
    arr.splice(arr.length, 0, arr.splice(oldIndex, 1)[0]);
  } else {
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  }
  return arr;
};
