import { SaveViewConfig, SaveViewModes } from '@/constants/types';

export const defaultConfig: SaveViewConfig = {
  active: false,
  results: '',
  mode: SaveViewModes.BASE,
  title: '',
  label: {
    delete: 'Saved View',
    main: 'View',
    results: 'Search Results',
  },
  input: {
    label: 'View',
  },
  saveButtonDisabled: undefined,
};
