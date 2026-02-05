/**
 * Component Generators
 *
 * Generates descriptions and examples for CSS components.
 */

const SIZE_DESCRIPTIONS: Record<string, string> = {
  '-xs': 'Extra small size (minimal padding and font size)',
  '-sm': 'Small size (reduced padding and font size)',
  '-sm--2': 'Extra small size variant (further reduced)',
  '-sm--3': 'Micro size variant (minimal space)',
  '-md': 'Medium size (default balanced sizing)',
  '-lg': 'Large size (increased padding and font size)',
  '-xl': 'Extra large size (significantly larger)',
  '-xxl': 'Double extra large size',
  '-xxxl': 'Triple extra large size (maximum)',
};

const COLOR_DESCRIPTIONS: Record<string, string> = {
  '-primary': 'Primary brand color (main CTA)',
  '-secondary': 'Secondary brand color (alternate actions)',
  '-success': 'Success state (green, confirmations)',
  '-warning': 'Warning state (orange, caution)',
  '-danger': 'Danger/error state (red, destructive actions)',
  '-info': 'Info state (blue, informational)',
  '-light': 'Light color variant (subtle backgrounds)',
  '-dark': 'Dark color variant (strong contrast)',
  '-muted': 'Muted/subtle color (low emphasis)',
};

const STATE_DESCRIPTIONS: Record<string, string> = {
  '-active': 'Active state (currently selected)',
  '-disabled': 'Disabled state (non-interactive)',
  '-hover': 'Hover state styling',
  '-focus': 'Focus state (keyboard navigation)',
  '-selected': 'Selected state (user choice)',
  '-expanded': 'Expanded state (visible content)',
  '-collapsed': 'Collapsed state (hidden content)',
  '-loading': 'Loading state (processing)',
  '-error': 'Error state (validation failed)',
};

const STYLE_DESCRIPTIONS: Record<string, string> = {
  '-flat': 'Flat style (no elevation, minimal)',
  '-outline': 'Outline style (border only)',
  '-solid': 'Solid style (filled background)',
  '-inverse': 'Inverse colors (light on dark)',
  '-portal': 'Portal theme variant',
  '-animated': 'Animated transitions enabled',
  '-pill': 'Pill shape (fully rounded ends)',
  '-close': 'Close button variant',
  '-icon': 'Icon-only variant (no text)',
  '-fluid': 'Full width (100%)',
  '-vertical': 'Vertical orientation',
  '-horizontal': 'Horizontal orientation',
  '-sticky': 'Sticky positioning',
  '-floating': 'Floating/elevated appearance',
};

/**
 * Generates human-readable descriptions for component modifiers.
 */
export function generateModifierDescriptions(modifiers: string[]): Record<string, string> {
  const descriptions: Record<string, string> = {};

  for (const mod of modifiers) {
    if (SIZE_DESCRIPTIONS[mod]) {
      descriptions[mod] = SIZE_DESCRIPTIONS[mod];
    } else if (COLOR_DESCRIPTIONS[mod]) {
      descriptions[mod] = COLOR_DESCRIPTIONS[mod];
    } else if (STATE_DESCRIPTIONS[mod]) {
      descriptions[mod] = STATE_DESCRIPTIONS[mod];
    } else if (STYLE_DESCRIPTIONS[mod]) {
      descriptions[mod] = STYLE_DESCRIPTIONS[mod];
    } else if (mod.startsWith('-gap--') || mod === '-gap-') {
      descriptions[mod] =
        `[COMPONENT-SPECIFIC] Grid gap modifier for chi-css-grid only. PREFER using global utility -g--X instead`;
    } else {
      const cleanName = mod.replace(/^-/, '').replace(/--/g, ' ');

      descriptions[mod] = `${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)} modifier`;
    }
  }

  return descriptions;
}

const COMPONENT_EXAMPLES: Record<string, (baseClass: string) => string> = {
  buttons: (bc) => `<button class="${bc} -primary">Button</button>`,
  badge: (bc) => `<span class="${bc} -primary">Badge</span>`,
  alert: (bc) => `<div class="${bc} -success" role="alert">Alert message</div>`,
  card: (bc) =>
    `<div class="${bc}"><div class="${bc}__header">Header</div><div class="${bc}__content">Content</div></div>`,
  checkbox: (bc) => `<input type="checkbox" class="${bc}" id="checkbox"><label for="checkbox">Checkbox</label>`,
  radio: (bc) => `<input type="radio" class="${bc}" id="radio"><label for="radio">Radio</label>`,
  'input-text': (bc) => `<input type="text" class="${bc}" placeholder="Enter text">`,
  textarea: (bc) => `<textarea class="${bc}" placeholder="Enter text"></textarea>`,
  link: (bc) => `<a class="${bc}" href="#">Link text</a>`,
  tabs: (bc) => `<div class="${bc}"><ul><li class="-active">Tab 1</li><li>Tab 2</li></ul></div>`,
  modal: (bc) =>
    `<div class="${bc}"><div class="${bc}__header">Title</div><div class="${bc}__content">Content</div></div>`,
  tooltip: (bc) => `<div class="${bc}">Tooltip text</div>`,
  spinner: (bc) => `<div class="${bc}" role="status" aria-label="Loading"></div>`,
  progress: (bc) => `<div class="${bc}"><div class="${bc}__bar" style="width: 50%"></div></div>`,
  divider: (bc) => `<div class="${bc}"></div>`,
  icon: (bc) => `<i class="${bc} icon-atom" aria-hidden="true"></i>`,
};

/**
 * Generates a usage example for a component.
 */
export function generateExample(componentName: string, baseClass: string): string {
  const generator = COMPONENT_EXAMPLES[componentName];

  if (generator) {
    return generator(baseClass);
  }

  return `<div class="${baseClass}">Component content</div>`;
}
