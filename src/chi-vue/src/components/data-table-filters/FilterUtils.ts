import { DataTableFilter, DataTableFormElementFilters } from '@/constants/types';

export function getElementFilterData(
  ev: Event,
  elementType: DataTableFormElementFilters
): { name: string; checked?: boolean; value?: string } | void {
  const element = ev.target as HTMLFormElement;
  const elementDataset = element.dataset;

  if (elementDataset.filter) {
    if (elementType === 'checkbox') {
      const elementChecked = element.checked || false;

      return {
        name: elementDataset.filter,
        checked: elementChecked,
      };
    } else {
      const elementValue = element.value || '';

      return {
        name: elementDataset.filter,
        value: elementValue,
      };
    }
  }
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

export function compareFilters(originalFilters: DataTableFilter[], newFiltersData: DataTableFilter[]) {
  if (originalFilters && newFiltersData) {
    return newFiltersData.every((filter: DataTableFilter) => {
      const originalFilter = originalFilters.find(
        (originalFilter: DataTableFilter) => originalFilter.name === filter.name
      );

      if (originalFilter) {
        const valueData = filter.type === 'checkbox' ? 'checked' : 'value';
        const fallbackValue = filter.type === 'checkbox' ? false : '';
        const newValue = filter[valueData] || fallbackValue;
        const originalValue = originalFilter[valueData] || fallbackValue;

        return newValue === originalValue;
      }
      return false;
    });
  }
}
