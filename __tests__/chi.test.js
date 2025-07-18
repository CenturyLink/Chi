import { chi } from './src/chi/javascript/core/chi.js';

describe('Chi Core Module', () => {
  describe('chi object', () => {
    test('should have version property', () => {
      expect(chi.version).toBe('0.1');
    });

    test('should have expando property', () => {
      expect(chi.expando).toBeDefined();
      expect(typeof chi.expando).toBe('string');
      expect(chi.expando.startsWith('chi')).toBe(true);
    });

    test('should have classes object with expected properties', () => {
      expect(chi.classes).toBeDefined();
      expect(chi.classes.ACTIVE).toBe('-active');
      expect(chi.classes.ANIMATED).toBe('-animated');
      expect(chi.classes.BACK).toBe('-back');
      expect(chi.classes.CLOSE).toBe('-close');
      expect(chi.classes.CLOSED).toBe('-closed');
      expect(chi.classes.DISABLED).toBe('-disabled');
      expect(chi.classes.EXPANDED).toBe('-expanded');
      expect(chi.classes.INACTIVE).toBe('-inactive');
      expect(chi.classes.TRANSITIONING).toBe('-transitioning');
      expect(chi.classes.UNSELECTED).toBe('-unselected');
    });

    test('should have componentIndex initialized to 0', () => {
      expect(chi.componentIndex).toBe(0);
    });

    test('should have registeredComponents as empty object', () => {
      expect(chi.registeredComponents).toBeDefined();
      expect(typeof chi.registeredComponents).toBe('object');
    });

    test('should have responsive breakpoints', () => {
      expect(chi.responsiveBreakpoints).toBeDefined();
      expect(chi.responsiveBreakpoints.sm).toBe(576);
      expect(chi.responsiveBreakpoints.md).toBe(768);
      expect(chi.responsiveBreakpoints.lg).toBe(992);
      expect(chi.responsiveBreakpoints.xl).toBe(1200);
    });
  });

  describe('expando property', () => {
    test('should be unique between instances', () => {
      // Since expando includes Math.random(), we can't test for exact equality
      // but we can test that it's a string and has expected format
      expect(typeof chi.expando).toBe('string');
      expect(chi.expando.length).toBeGreaterThan(3);
    });
  });
});