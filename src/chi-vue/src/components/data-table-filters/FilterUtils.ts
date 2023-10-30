import { DataTableFilter, DataTableFormElementFilters } from '@/constants/types';

export function getElementFilterData(
  ev: Event,
  elementType: DataTableFormElementFilters
): { name: string; checked?: boolean; value?: string; id: string } | null {
  const element = ev.target as HTMLFormElement;
  const elementDataset = element.dataset;

  if (elementDataset.filter) {
    if (elementType === 'checkbox') {
      const elementChecked = element.checked || false;

      return {
        name: elementDataset.filter,
        checked: elementChecked,
        id: element.id,
      };
    } else {
      const elementValue = element.value || '';

      return {
        name: elementDataset.filter,
        value: elementValue,
        id: element.id,
      };
    }
  }
  return null;
}

export function updateFilterData(
  originalFiltersData: DataTableFilter[],
  newFilterData: { name: string; value?: string; checked?: boolean }
) {
  if (originalFiltersData && newFilterData) {
    const originalFilter = originalFiltersData.find((filter: DataTableFilter) => filter.name === newFilterData.name);

    if (originalFilter) {
      const valueData = originalFilter.type === 'checkbox' ? 'checked' : 'value';

      if (originalFilter[valueData] !== newFilterData[valueData]) {
        if (originalFilter.type === 'checkbox') {
          originalFilter.checked = newFilterData.checked;
        } else {
          originalFilter.value = newFilterData.value;
        }
      }
    }
  }
}
