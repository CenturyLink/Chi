import { Component } from './src/chi/javascript/core/component.js';
import { Util } from './src/chi/javascript/core/util.js';

// Mock subclass for testing
class TestComponent extends Component {
  static get componentType() {
    return 'testComponent';
  }

  static get componentSelector() {
    return '.test-component';
  }

  constructor(elem, config) {
    super(elem, config);
    this.testValue = 'test';
  }

  dispose() {
    this._removeEventHandlers();
  }
}

describe('Component Class', () => {
  let testElement;
  let testComponent;

  beforeEach(() => {
    testElement = document.createElement('div');
    testElement.className = 'test-component';
    document.body.appendChild(testElement);
  });

  afterEach(() => {
    if (testComponent && testComponent.dispose) {
      testComponent.dispose();
    }
    if (testElement.parentNode) {
      document.body.removeChild(testElement);
    }
  });

  describe('Constructor', () => {
    test('should create component with element and config', () => {
      const config = { option: 'value' };
      testComponent = new TestComponent(testElement, config);

      expect(testComponent._elem).toBe(testElement);
      expect(testComponent._config).toBe(config);
      expect(testComponent._eventHandlers).toEqual([]);
      expect(typeof testComponent._componentCounterNo).toBe('number');
    });

    test('should create component with default config if none provided', () => {
      testComponent = new TestComponent(testElement);

      expect(testComponent._elem).toBe(testElement);
      expect(testComponent._config).toBeUndefined();
      expect(testComponent._eventHandlers).toEqual([]);
    });

    test('should assign unique component counter numbers', () => {
      const component1 = new TestComponent(testElement);
      const component2 = new TestComponent(testElement);

      expect(component1.componentCounterNo).not.toBe(component2.componentCounterNo);
    });
  });

  describe('Static methods', () => {
    test('componentType should throw error when not implemented', () => {
      expect(() => Component.componentType).toThrow(
        'componentType is intended to be an abstract method, please implement it in your component.'
      );
    });

    test('componentSelector should throw error when not implemented', () => {
      expect(() => Component.componentSelector).toThrow(
        'There is no defined selector for this component.'
      );
    });

    test('factory should create component instance', () => {
      const config = { option: 'value' };
      const component = TestComponent.factory(testElement, config);

      expect(component).toBeInstanceOf(TestComponent);
      expect(component._elem).toBe(testElement);
      expect(component._config).toBe(config);
    });

    test('factory should return cached component on subsequent calls', () => {
      const component1 = TestComponent.factory(testElement, { option: 'value1' });
      const component2 = TestComponent.factory(testElement, { option: 'value2' });

      expect(component1).toBe(component2);
      expect(component1._config).toEqual({ option: 'value1' }); // Should keep original config
    });

    test('factory should work with array of elements', () => {
      const element2 = document.createElement('div');
      element2.className = 'test-component';
      document.body.appendChild(element2);

      const components = TestComponent.factory([testElement, element2]);

      expect(Array.isArray(components)).toBe(true);
      expect(components.length).toBe(2);
      expect(components[0]).toBeInstanceOf(TestComponent);
      expect(components[1]).toBeInstanceOf(TestComponent);
      expect(components[0]._elem).toBe(testElement);
      expect(components[1]._elem).toBe(element2);

      // Clean up
      document.body.removeChild(element2);
      components.forEach(comp => comp.dispose());
    });

    test('factory should work with NodeList', () => {
      const element2 = document.createElement('div');
      element2.className = 'test-component';
      document.body.appendChild(element2);

      const nodeList = document.querySelectorAll('.test-component');
      const components = TestComponent.factory(nodeList);

      expect(Array.isArray(components)).toBe(true);
      expect(components.length).toBe(2);
      expect(components[0]).toBeInstanceOf(TestComponent);
      expect(components[1]).toBeInstanceOf(TestComponent);

      // Clean up
      document.body.removeChild(element2);
      components.forEach(comp => comp.dispose());
    });

    test('initAll should initialize all components with selector', () => {
      const element2 = document.createElement('div');
      element2.className = 'test-component';
      document.body.appendChild(element2);

      const config = { option: 'value' };
      TestComponent.initAll(config);

      const component1 = Util.getRegisteredComponent('testComponent', testElement);
      const component2 = Util.getRegisteredComponent('testComponent', element2);

      expect(component1).toBeInstanceOf(TestComponent);
      expect(component2).toBeInstanceOf(TestComponent);
      expect(component1._config).toBe(config);
      expect(component2._config).toBe(config);

      // Clean up
      document.body.removeChild(element2);
      component1.dispose();
      component2.dispose();
    });
  });

  describe('Instance methods', () => {
    beforeEach(() => {
      testComponent = new TestComponent(testElement);
    });

    test('componentCounterNo should return counter number', () => {
      expect(typeof testComponent.componentCounterNo).toBe('number');
      expect(testComponent.componentCounterNo).toBeGreaterThanOrEqual(0);
    });

    test('_addEventHandler should add event handler', () => {
      const handler = jest.fn();
      testComponent._addEventHandler(testElement, 'click', handler);

      expect(testComponent._eventHandlers.length).toBe(1);
      expect(testComponent._eventHandlers[0]).toEqual({
        elem: testElement,
        type: 'click',
        handler: handler,
        useCapture: undefined
      });

      // Test that the event handler works
      testElement.click();
      expect(handler).toHaveBeenCalled();
    });

    test('_addEventHandler should support useCapture parameter', () => {
      const handler = jest.fn();
      testComponent._addEventHandler(testElement, 'click', handler, true);

      expect(testComponent._eventHandlers[0].useCapture).toBe(true);
    });

    test('_removeEventHandlers should remove all event handlers', () => {
      const handler1 = jest.fn();
      const handler2 = jest.fn();
      
      testComponent._addEventHandler(testElement, 'click', handler1);
      testComponent._addEventHandler(testElement, 'mouseover', handler2);

      expect(testComponent._eventHandlers.length).toBe(2);

      testComponent._removeEventHandlers();

      expect(testComponent._eventHandlers.length).toBe(0);

      // Test that handlers are no longer called
      testElement.click();
      expect(handler1).not.toHaveBeenCalled();
    });

    test('_removeEventHandlers should handle empty event handlers array', () => {
      expect(() => testComponent._removeEventHandlers()).not.toThrow();
      expect(testComponent._eventHandlers.length).toBe(0);
    });
  });

  describe('Factory caching', () => {
    test('should cache components properly', () => {
      const component1 = TestComponent.factory(testElement);
      const component2 = TestComponent.factory(testElement);

      expect(component1).toBe(component2);
      expect(Util.getRegisteredComponent('testComponent', testElement)).toBe(component1);
    });

    test('dispose should unregister component', () => {
      const component = TestComponent.factory(testElement);
      
      expect(Util.getRegisteredComponent('testComponent', testElement)).toBe(component);
      
      component.dispose();
      
      expect(Util.getRegisteredComponent('testComponent', testElement)).toBe(false);
    });

    test('factory should create new instance after dispose', () => {
      const component1 = TestComponent.factory(testElement);
      component1.dispose();
      
      const component2 = TestComponent.factory(testElement);
      
      expect(component2).not.toBe(component1);
      expect(component2).toBeInstanceOf(TestComponent);
    });
  });

  describe('Error handling', () => {
    test('should handle missing dispose method gracefully', () => {
      class ComponentWithoutDispose extends Component {
        static get componentType() {
          return 'noDispose';
        }

        static get componentSelector() {
          return '.no-dispose';
        }
      }

      const component = ComponentWithoutDispose.factory(testElement);
      
      // The factory method adds a dispose method, so it should always exist
      expect(typeof component.dispose).toBe('function');
      
      // Since there's no original dispose method, it should throw when called
      expect(() => component.dispose()).toThrow();
    });
  });
});