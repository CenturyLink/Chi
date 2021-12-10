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
  var a = 0;
  arr.splice(newIndex, a, arr.splice(oldIndex, 1)[a]);
  return arr;
};
