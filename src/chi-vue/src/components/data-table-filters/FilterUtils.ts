import { DataTableFilter, DataTableFormElementFilters, DataTableView } from '@/constants/types';

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

export function compareFilters(originalFilters: any, newFiltersData: any) {
  if (Object.keys(originalFilters).length > 0 && Object.keys(newFiltersData).length > 0) {
    for (const prop in newFiltersData) {
      if (originalFilters[prop] !== newFiltersData[prop]) {
        return false;
      }
    }
    return true;
  }
}

export function plainFilterData(filters: DataTableFilter[]) {
  return filters.reduce((accumulator: any, currentValue: any) => {
    return { ...accumulator, [currentValue.id]: currentValue.type === 'checkbox' ? false : currentValue.value || '' };
  }, {});
}

export function plainViewData(views: DataTableView[]) {
  return views.reduce((accumulator: any, current: DataTableView) => {
    return {
      ...accumulator,
      [current.id]: {
        columns: current.columns,
        filters: current.filters,
        label: current.label,
        searchString: current.searchString,
      },
    };
  }, {});
}
