import { DEFAULT_THEME, CHI_VERSION } from '~/constants/configs';

export const useSelectedTheme = () => useState<string>('theme', () => DEFAULT_THEME);

// Maybe just import CHI_VERSION ?? or does it change...?
export const useChiVersion = () => useState<string>('chiVersion', () => CHI_VERSION);

export const useDocsJson = () => useState('chiDocs', () => {});
