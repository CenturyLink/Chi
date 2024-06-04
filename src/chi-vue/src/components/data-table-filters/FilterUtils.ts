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

export function updateFilterData(filterData: DataTableFilter, store: any, overrideValue?: any) {
  const isCheckbox = filterData.type === 'checkbox';

  if (isCheckbox && filterData.options?.length) {
    updateOptionsFilterData(filterData, store, overrideValue);
  } else {
    const value = isCheckbox ? filterData.checked ?? overrideValue : filterData.value || '';
    const payload = { id: getCleanFilterId(filterData.id), value };

    store.updateFilterConfig(payload);
    store.updateFilterConfigLive(payload);
  }
}

/**
 * Updates the value of all options of a filter in the store
 */
function updateOptionsFilterData(filterData: DataTableFilter, store: any, overrideValue?: any) {
  filterData.options?.forEach((option) => {
    const payload = {
      id: getCleanFilterId(option.id || filterData.id),
      value: overrideValue ?? !!(option.checked || option.selected),
    };

    store.updateFilterConfig(payload);
    store.updateFilterConfigLive(payload);
  });
}

function getCleanFilterId(id: string) {
  return id?.replace(/-desktop|-mobile/gi, '') || 'no-id';
}
