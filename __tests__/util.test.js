import { Util } from './src/chi/javascript/core/util.js';
import { chi } from './src/chi/javascript/core/chi.js';

describe('Util Class', () => {
  let testElement;

  beforeEach(() => {
    testElement = document.createElement('div');
    testElement.className = 'test-class';
    document.body.appendChild(testElement);
  });

  afterEach(() => {
    document.body.removeChild(testElement);
    // Clean up chi.registeredComponents
    chi.registeredComponents = {};
    chi.componentIndex = 0;
  });

  describe('Class manipulation methods', () => {
    test('removeClass should remove class from element', () => {
      testElement.className = 'class1 class2 class3';
      Util.removeClass(testElement, 'class2');
      expect(testElement.className).toBe('class1 class3');
    });

    test('addClass should add class to element', () => {
      testElement.className = 'existing-class';
      Util.addClass(testElement, 'new-class');
      expect(testElement.className).toBe('existing-class new-class');
    });

    test('addClass should not add duplicate class', () => {
      testElement.className = 'existing-class';
      Util.addClass(testElement, 'existing-class');
      expect(testElement.className).toBe('existing-class');
    });

    test('hasClass should return true if element has class', () => {
      testElement.className = 'class1 class2 class3';
      expect(Util.hasClass(testElement, 'class2')).toBe(true);
    });

    test('hasClass should return false if element does not have class', () => {
      testElement.className = 'class1 class3';
      expect(Util.hasClass(testElement, 'class2')).toBe(false);
    });

    test('toggleClass should add class if not present', () => {
      testElement.className = 'existing-class';
      Util.toggleClass(testElement, 'new-class');
      expect(testElement.className).toBe('existing-class new-class');
    });

    test('toggleClass should remove class if present', () => {
      testElement.className = 'existing-class new-class';
      Util.toggleClass(testElement, 'new-class');
      expect(testElement.className).toBe('existing-class');
    });

    test('checkRemoveClass should remove class from element if element exists', () => {
      testElement.className = 'class1 class2';
      Util.checkRemoveClass(testElement, 'class2');
      expect(testElement.className).toBe('class1');
    });

    test('checkRemoveClass should not throw error if element is null', () => {
      expect(() => Util.checkRemoveClass(null, 'class')).not.toThrow();
    });

    test('checkAddClass should add class to element if element exists', () => {
      testElement.className = 'existing-class';
      Util.checkAddClass(testElement, 'new-class');
      expect(testElement.className).toBe('existing-class new-class');
    });

    test('checkAddClass should not throw error if element is null', () => {
      expect(() => Util.checkAddClass(null, 'class')).not.toThrow();
    });

    test('checkHasClass should return true if element has class', () => {
      testElement.className = 'test-class';
      expect(Util.checkHasClass(testElement, 'test-class')).toBe(true);
    });

    test('checkHasClass should return false if element is null', () => {
      expect(Util.checkHasClass(null, 'test-class')).toBe(false);
    });
  });

  describe('DOM manipulation methods', () => {
    test('empty should remove all child elements', () => {
      const child1 = document.createElement('span');
      const child2 = document.createElement('p');
      testElement.appendChild(child1);
      testElement.appendChild(child2);
      testElement.innerHTML += 'text content';
      
      Util.empty(testElement);
      
      expect(testElement.children.length).toBe(0);
      expect(testElement.innerHTML).toBe('');
    });

    test('getTarget should return element by data-target selector', () => {
      const targetElement = document.createElement('div');
      targetElement.id = 'target-id';
      document.body.appendChild(targetElement);
      
      const linkElement = document.createElement('a');
      linkElement.dataset.target = '#target-id';
      
      const result = Util.getTarget(linkElement);
      expect(result).toBe(targetElement);
      
      document.body.removeChild(targetElement);
    });

    test('getTarget should return element by href selector', () => {
      const targetElement = document.createElement('div');
      targetElement.id = 'href-target';
      document.body.appendChild(targetElement);
      
      const linkElement = document.createElement('a');
      linkElement.href = '#href-target';
      
      const result = Util.getTarget(linkElement);
      expect(result).toBe(targetElement);
      
      document.body.removeChild(targetElement);
    });

    test('getTarget should return null if no target found', () => {
      const linkElement = document.createElement('a');
      linkElement.href = '#non-existent';
      
      const result = Util.getTarget(linkElement);
      expect(result).toBe(null);
    });

    test('getTarget should prioritize data-target over href', () => {
      const targetElement = document.createElement('div');
      targetElement.id = 'data-target';
      document.body.appendChild(targetElement);
      
      const hrefElement = document.createElement('div');
      hrefElement.id = 'href-target';
      document.body.appendChild(hrefElement);
      
      const linkElement = document.createElement('a');
      linkElement.dataset.target = '#data-target';
      linkElement.href = '#href-target';
      
      const result = Util.getTarget(linkElement);
      expect(result).toBe(targetElement);
      
      document.body.removeChild(targetElement);
      document.body.removeChild(hrefElement);
    });
  });

  describe('Data management methods', () => {
    test('setData should store data on element', () => {
      Util.setData(testElement, 'testKey', 'testValue');
      expect(testElement[chi.expando]).toBeDefined();
      expect(testElement[chi.expando].testKey).toBe('testValue');
    });

    test('getData should retrieve data from element', () => {
      Util.setData(testElement, 'testKey', 'testValue');
      const result = Util.getData(testElement, 'testKey');
      expect(result).toBe('testValue');
    });

    test('getData should return undefined if key does not exist', () => {
      const result = Util.getData(testElement, 'nonExistentKey');
      expect(result).toBeUndefined();
    });

    test('isSetData should return true if data exists', () => {
      Util.setData(testElement, 'testKey', 'testValue');
      expect(Util.isSetData(testElement, 'testKey')).toBe(true);
    });

    test('isSetData should return false if data does not exist', () => {
      expect(Util.isSetData(testElement, 'nonExistentKey')).toBeFalsy();
    });

    test('removeData should remove data from element', () => {
      Util.setData(testElement, 'testKey', 'testValue');
      Util.removeData(testElement, 'testKey');
      expect(Util.isSetData(testElement, 'testKey')).toBeFalsy();
    });

    test('removeData should remove data structure if empty', () => {
      Util.setData(testElement, 'testKey', 'testValue');
      Util.removeData(testElement, 'testKey');
      expect(testElement[chi.expando]).toBeUndefined();
    });
  });

  describe('Component registration methods', () => {
    test('registerComponent should register component', () => {
      const mockComponent = { test: 'component' };
      Util.registerComponent('testType', testElement, mockComponent);
      
      expect(chi.registeredComponents.testType).toBeDefined();
      expect(Util.getData(testElement, 'testType')).toBeDefined();
    });

    test('getRegisteredComponent should return registered component', () => {
      const mockComponent = { test: 'component' };
      Util.registerComponent('testType', testElement, mockComponent);
      
      const result = Util.getRegisteredComponent('testType', testElement);
      expect(result).toBe(mockComponent);
    });

    test('getRegisteredComponent should return false if not registered', () => {
      const result = Util.getRegisteredComponent('nonExistentType', testElement);
      expect(result).toBe(false);
    });

    test('unregisterComponent should unregister component', () => {
      const mockComponent = { test: 'component' };
      Util.registerComponent('testType', testElement, mockComponent);
      
      Util.unregisterComponent('testType', testElement);
      
      expect(Util.getRegisteredComponent('testType', testElement)).toBe(false);
    });
  });

  describe('Utility methods', () => {
    test('isNumeric should return true for numeric values', () => {
      expect(Util.isNumeric(42)).toBe(true);
      expect(Util.isNumeric('42')).toBe(true);
      expect(Util.isNumeric('42.5')).toBe(true);
      expect(Util.isNumeric(-42)).toBe(true);
    });

    test('isNumeric should return false for non-numeric values', () => {
      expect(Util.isNumeric('abc')).toBe(false);
      expect(Util.isNumeric(NaN)).toBe(false);
      expect(Util.isNumeric(null)).toBe(false);
      expect(Util.isNumeric(undefined)).toBe(false);
    });

    test('isInteger should return true for integer values', () => {
      expect(Util.isInteger(42)).toBe(true);
      expect(Util.isInteger(-42)).toBe(true);
      expect(Util.isInteger(0)).toBe(true);
    });

    test('isInteger should return false for non-integer values', () => {
      expect(Util.isInteger(42.5)).toBe(false);
      expect(Util.isInteger('42')).toBe(false);
      expect(Util.isInteger(NaN)).toBe(false);
      expect(Util.isInteger(Infinity)).toBe(false);
    });

    test('extend should merge objects', () => {
      const original = { a: 1, b: 2 };
      const extensor = { b: 3, c: 4 };
      
      const result = Util.extend(original, extensor);
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
      expect(original).toEqual({ a: 1, b: 2 }); // Original should not be modified
    });

    test('extend should handle undefined extensor', () => {
      const original = { a: 1, b: 2 };
      const result = Util.extend(original, undefined);
      
      expect(result).toEqual({ a: 1, b: 2 });
    });

    test('extend should delete properties with undefined values', () => {
      const original = { a: 1, b: 2 };
      const extensor = { b: undefined };
      
      const result = Util.extend(original, extensor);
      
      expect(result).toEqual({ a: 1 });
    });

    test('copyObject should create shallow copy', () => {
      const original = { a: 1, b: { c: 2 } };
      const copy = Util.copyObject(original);
      
      expect(copy).toEqual(original);
      expect(copy).not.toBe(original);
      expect(copy.b).toBe(original.b); // Shallow copy
    });

    test('createEvent should create custom event', () => {
      const event = Util.createEvent('testEvent');
      
      expect(event.type).toBe('testEvent');
      expect(event.bubbles).toBe(true);
      expect(event.cancelable).toBe(true);
    });

    test('noOp should be a function that does nothing', () => {
      expect(typeof Util.noOp).toBe('function');
      expect(Util.noOp()).toBeUndefined();
    });
  });

  describe('Media query methods', () => {
    test('getMediaWidth should return positive number', () => {
      const width = Util.getMediaWidth();
      expect(typeof width).toBe('number');
      expect(width).toBeGreaterThan(0);
    });

    test('getMediaHeight should return positive number', () => {
      const height = Util.getMediaHeight();
      expect(typeof height).toBe('number');
      expect(height).toBeGreaterThan(0);
    });
  });

  describe('Search methods', () => {
    test('binarySearch should find exact match', () => {
      const testArray = [1, 3, 5, 7, 9];
      const testFunction = (index) => {
        if (testArray[index] === 5) return 0;
        return testArray[index] < 5 ? -1 : 1;
      };
      
      const result = Util.binarySearch(testArray.length, testFunction);
      expect(result).toBe(2);
    });

    test('binarySearch should return null if not found', () => {
      const testArray = [1, 3, 7, 9];
      const testFunction = (index) => {
        if (testArray[index] === 5) return 0;
        return testArray[index] < 5 ? -1 : 1;
      };
      
      const result = Util.binarySearch(testArray.length, testFunction);
      expect(result).toBe(null);
    });

    test('binarySearchClosest should find closest match', () => {
      const testArray = [1, 3, 7, 9];
      const testFunction = (index) => {
        if (testArray[index] === 5) return 0;
        return testArray[index] < 5 ? -1 : 1;
      };
      
      const result = Util.binarySearchClosest(testArray.length, testFunction);
      expect(result).toBe(2); // Index where 5 should be inserted
    });
  });

  describe('Animation methods', () => {
    test('emulateTransitionEnd should call handler after duration', (done) => {
      const handler = jest.fn();
      Util.emulateTransitionEnd(10, handler);
      
      setTimeout(() => {
        expect(handler).toHaveBeenCalled();
        done();
      }, 20);
    });

    test('threeStepsAnimation should execute animation steps', (done) => {
      const prepare = jest.fn();
      const start = jest.fn();
      const end = jest.fn();
      
      const animation = Util.threeStepsAnimation(prepare, start, end, 10);
      
      setTimeout(() => {
        expect(prepare).toHaveBeenCalled();
        expect(start).toHaveBeenCalled();
        expect(end).toHaveBeenCalled();
        done();
      }, 50);
    });

    test('stopThreeStepsAnimation should stop animation', () => {
      const prepare = jest.fn();
      const start = jest.fn();
      const end = jest.fn();
      
      const animation = Util.threeStepsAnimation(prepare, start, end, 100);
      Util.stopThreeStepsAnimation(animation);
      
      expect(animation.stopped).toBe(true);
    });
  });
});