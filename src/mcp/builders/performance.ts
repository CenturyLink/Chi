/**
 * Performance Metadata Builder
 *
 * Adds performance hints and optimization suggestions to components.
 */

import type { PerformanceHints, CSSComponent } from '../types/index.js';

const PERFORMANCE_DATA: Record<string, PerformanceHints> = {
  'chi-modal': {
    requiresJavaScript: true,
    bundleSize: '~8 KB',
    causesReflow: true,
    causesRepaint: true,
    renderingCost: 'high',
    lazyLoadable: true,
    optimizations: [
      'Use CSS animations instead of JS where possible',
      'Lazy load modal content until opened',
      'Use will-change: transform for smooth animations',
    ],
    notes:
      'Modals trigger layout reflow when shown/hidden. Consider using transform instead of display for animations.',
  },
  'chi-drawer': {
    requiresJavaScript: true,
    bundleSize: '~6 KB',
    causesReflow: true,
    causesRepaint: true,
    renderingCost: 'high',
    lazyLoadable: true,
    optimizations: [
      'Use transform: translateX() instead of left/right',
      'Add will-change: transform',
      'Lazy load drawer content',
    ],
    notes: 'Similar to modals, use transform for sliding animations to avoid layout recalculation.',
  },
  'chi-dropdown': {
    requiresJavaScript: true,
    bundleSize: '~4 KB',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'medium',
    lazyLoadable: false,
    optimizations: [
      'Use CSS opacity/transform for show/hide',
      'Limit menu items for large lists (virtualize if needed)',
      'Use position: absolute to avoid reflow',
    ],
    notes: 'Dropdowns use absolute positioning to minimize reflow impact.',
  },
  'chi-accordion': {
    requiresJavaScript: true,
    bundleSize: '~3 KB',
    causesReflow: true,
    causesRepaint: true,
    renderingCost: 'medium',
    lazyLoadable: true,
    optimizations: [
      'Lazy load content for collapsed sections',
      'Use CSS transitions for smooth expand/collapse',
      'Limit initial expanded items',
    ],
    notes: 'Expanding/collapsing causes reflow. Consider max-height transitions instead of height.',
  },
  'chi-carousel': {
    requiresJavaScript: true,
    bundleSize: '~5 KB',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'medium',
    lazyLoadable: true,
    optimizations: [
      'Lazy load images in non-visible slides',
      'Use transform: translateX() for sliding',
      'Add will-change: transform',
      'Limit autoplay to reduce CPU usage',
    ],
    notes: 'Use transform-based animations for 60fps performance. Lazy load slide content.',
  },
  'chi-data-table': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: false,
    renderingCost: 'low',
    lazyLoadable: true,
    optimizations: [
      'Virtualize large tables (1000+ rows)',
      'Use fixed table layout for consistent column widths',
      'Paginate data to limit DOM nodes',
      'Avoid nested tables',
    ],
    notes: 'Large tables can impact initial render. Use pagination or virtual scrolling for 500+ rows.',
  },
  'chi-tooltip': {
    requiresJavaScript: true,
    bundleSize: '~2 KB',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: ['Use CSS transforms for positioning', 'Limit tooltip content length', 'Debounce show/hide events'],
    notes: 'Lightweight component with minimal performance impact.',
  },
  'chi-popover': {
    requiresJavaScript: true,
    bundleSize: '~4 KB',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'medium',
    lazyLoadable: true,
    optimizations: [
      'Lazy load popover content',
      'Use transform for positioning',
      'Limit nested popovers',
      'Close on scroll for better UX',
    ],
    notes: 'Similar to tooltips but with more content. Lazy load heavy content.',
  },
  'chi-spinner': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: [
      'Use CSS animations (already optimized)',
      'Remove from DOM when loading completes',
      'Prefer smaller sizes for less CPU usage',
    ],
    notes: 'CSS-only animations are GPU-accelerated. Minimal performance impact.',
  },
  'chi-progress': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: [
      'Use transform: scaleX() for progress changes',
      'Throttle updates to 100ms intervals',
      'Remove when complete',
    ],
    notes: 'Smooth progress updates with transform. Throttle rapid updates to reduce repaints.',
  },
  'chi-tabs': {
    requiresJavaScript: true,
    bundleSize: '~3 KB',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'low',
    lazyLoadable: true,
    optimizations: [
      'Lazy load inactive tab content',
      'Use CSS transforms for sliding border',
      'Cache rendered tab panels',
    ],
    notes: 'Low impact component. Lazy load tab content for faster initial render.',
  },
  'chi-expansion-panel': {
    requiresJavaScript: true,
    bundleSize: '~3 KB',
    causesReflow: true,
    causesRepaint: true,
    renderingCost: 'medium',
    lazyLoadable: true,
    optimizations: ['Similar to accordion optimizations', 'Lazy load panel content', 'Use CSS transitions'],
    notes: 'Expanding causes reflow. Use max-height transitions for smoother animations.',
  },
  'chi-date-picker': {
    requiresJavaScript: true,
    bundleSize: '~12 KB',
    causesReflow: true,
    causesRepaint: true,
    renderingCost: 'high',
    lazyLoadable: true,
    optimizations: [
      'Lazy load calendar when opened',
      'Virtualize year/month lists for range pickers',
      'Debounce input validation',
      'Cache rendered calendars',
    ],
    notes: 'Largest JS component. Lazy load and cache calendar rendering for better performance.',
  },
  'chi-skeleton': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: true,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: [
      'Remove immediately when content loads',
      'Limit animation iterations',
      'Use CSS animations (already optimized)',
    ],
    notes: 'Lightweight loading indicator. Replace with real content as soon as possible.',
  },
  'chi-badge': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: false,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: ['No optimizations needed - static component'],
    notes: 'Extremely lightweight. No performance concerns.',
  },
  'chi-button': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: false,
    renderingCost: 'low',
    lazyLoadable: false,
    optimizations: ['Use CSS transitions for hover states (already implemented)'],
    notes: 'No performance concerns. Pure CSS component.',
  },
  'chi-card': {
    requiresJavaScript: false,
    bundleSize: 'CSS only',
    causesReflow: false,
    causesRepaint: false,
    renderingCost: 'low',
    lazyLoadable: true,
    optimizations: [
      'Lazy load images inside cards',
      'Virtualize card grids with 100+ items',
      'Use intersection observer for lazy loading',
    ],
    notes: 'Card itself is lightweight. Optimize card content (images, etc.).',
  },
};

/**
 * Applies performance metadata to CSS components.
 */
export function applyPerformanceMetadata(components: CSSComponent[]): void {
  for (const component of components) {
    const perfData = PERFORMANCE_DATA[component.baseClass];
    if (perfData) {
      component.performance = perfData;
    }
  }
}
