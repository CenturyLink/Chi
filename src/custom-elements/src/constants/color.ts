export const TEXT_COLORS = ['', 'primary', 'success', 'warning', 'danger', 'muted', 'inverse'];

export const SEMANTIC_COLORS = ['info', 'warning', 'danger', 'success'];

export const ICON_COLORS = ['primary', 'success', 'warning', 'danger', 'light', 'muted', 'info', 'grey', 'secondary'] as const;

export type IconColors = typeof ICON_COLORS[number];
