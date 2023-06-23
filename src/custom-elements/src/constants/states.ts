export const CHI_STATES = ['success', 'warning', 'danger'] as const;

export type ChiStates = typeof CHI_STATES[number];

export const TEXT_FIELD_STATES = {
  warning: {
    class: '-warning',
    icon: 'warning'
  },
  danger: {
    class: '-danger',
    icon: 'circle-warning'
  },
  success: {
    class: '-success',
    icon: 'circle-check'
  }
}
