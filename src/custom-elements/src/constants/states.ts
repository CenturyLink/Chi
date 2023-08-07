export const CHI_STATES = ['success', 'warning', 'danger'] as const;

export type ChiStates = typeof CHI_STATES[number];

export const STATES = {
  base: {
    class: '',
    icon: 'circle-info'
  },
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
  },
  info: {
    class: '-info',
    icon: 'circle-info'
  },
  muted: {
    class: '-muted',
    icon: 'circle-info'
  }
}
