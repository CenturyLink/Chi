/**
 * Utility Category Definitions
 *
 * Maps SCSS file names to semantic category information.
 * Used for organizing and documenting utility classes.
 */

export interface CategoryInfo {
  name: string;
  description: string;
}

export const CATEGORIES: Record<string, CategoryInfo> = {
  spacing: {
    name: 'Spacing',
    description:
      'Margin, padding, and gap utilities based on 8px grid system. Use double-dash syntax: -p--4, -m--2, -g--3',
  },
  display: {
    name: 'Display',
    description: 'Control element display type (block, flex, grid, inline, none). Use double-dash syntax: -d--flex',
  },
  flex: {
    name: 'Flexbox',
    description: 'Flexbox layout utilities for direction, wrapping, alignment, and justification',
  },
  color: {
    name: 'Color',
    description: 'Text and background color utilities. Use double-dash syntax: -bg--primary, -text--danger',
  },
  text: {
    name: 'Typography',
    description: 'Text alignment, transformation, decoration, and styling utilities',
  },
  sizing: {
    name: 'Sizing',
    description: 'Width and height utilities for element sizing',
  },
  border: {
    name: 'Border',
    description: 'Border style, width, color, and radius utilities',
  },
  position: {
    name: 'Position',
    description: 'Position utilities (static, relative, absolute, fixed, sticky)',
  },
  shadow: {
    name: 'Shadow',
    description: 'Box shadow utilities for elevation and depth effects',
  },
  overflow: {
    name: 'Overflow',
    description: 'Overflow behavior utilities (auto, hidden, visible, scroll)',
  },
  zindex: {
    name: 'Z-Index',
    description: 'Z-index utilities for controlling element stacking order',
  },
  opacity: {
    name: 'Opacity',
    description: 'Opacity utilities for transparency control. Use double-dash syntax: -opacity--60',
  },
};

/**
 * Gets category info by name with fallback.
 */
export function getCategoryInfo(name: string): CategoryInfo {
  return (
    CATEGORIES[name] || {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      description: `${name} utilities`,
    }
  );
}
