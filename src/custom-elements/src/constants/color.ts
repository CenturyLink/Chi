export const TEXT_COLORS = ['', 'primary', 'success', 'warning', 'danger', 'muted', 'inverse', 'navy', 'orange'];

export const SEMANTIC_COLORS = ['info', 'warning', 'danger', 'success'];

export const ICON_COLORS = ['primary', 'success', 'warning', 'danger', 'light', 'dark', 'muted', 'info', 'grey', 'secondary', 'navy', 'orange'] as const;

export type IconColors = typeof ICON_COLORS[number];

export const ALERT_COLORS = ['success', 'warning', 'danger', 'info', 'muted'] as const;

export type AlertColors = typeof ALERT_COLORS[number];
