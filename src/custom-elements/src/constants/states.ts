export const CHI_STATES = ['success', 'warning', 'danger'] as const;

export type ChiStates = typeof CHI_STATES[number];
