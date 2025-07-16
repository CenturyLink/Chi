import { Accordion, factory } from './src/chi/javascript/components/accordion.js';
import { chi } from './src/chi/javascript/core/chi.js';
import { Util } from './src/chi/javascript/core/util.js';

describe('Accordion Component', () => {
  let accordionElement;
  let accordionItem;
  let trigger;
  let content;
  let accordion;

  beforeEach(() => {
    // Create accordion HTML structure
    accordionElement = document.createElement('div');
    accordionElement.className = 'chi-accordion';
    
    accordionItem = document.createElement('div');
    accordionItem.className = 'chi-accordion__item';
    
    trigger = document.createElement('button');
    trigger.className = 'chi-accordion__trigger';
    trigger.textContent = 'Toggle';
    
    content = document.createElement('div');
    content.className = 'chi-accordion__content';
    content.innerHTML = '<p>Content</p>';
    
    accordionItem.appendChild(trigger);
    accordionItem.appendChild(content);
    accordionElement.appendChild(accordionItem);
    
    document.body.appendChild(accordionElement);
  });

  afterEach(() => {
    if (accordion && accordion.dispose) {
      accordion.dispose();
    }
    if (accordionElement.parentNode) {
      document.body.removeChild(accordionElement);
    }
  });

  describe('Constructor', () => {
    test('should create accordion with default config', () => {
      accordion = new Accordion(accordionElement);

      expect(accordion._elem).toBe(accordionElement);
      expect(accordion._config.expansionMode).toBe('multiple');
      expect(accordion._item).toBe(accordionItem);
      expect(accordion._trigger).toBe(trigger);
      expect(accordion._triggers.length).toBe(1);
      expect(accordion._childAccordions).toEqual([]);
      expect(accordion._accordionAnimation).toBe(null);
    });

    test('should create accordion with custom config', () => {
      const config = { expansionMode: 'single' };
      accordion = new Accordion(accordionElement, config);

      expect(accordion._config.expansionMode).toBe('single');
    });

    test('should detect if accordion is initially expanded', () => {
      Util.addClass(accordionElement, chi.classes.EXPANDED);
      accordion = new Accordion(accordionElement);

      expect(accordion._expanded).toBe(true);
    });
  });

  describe('Static methods', () => {
    test('componentType should return correct type', () => {
      expect(Accordion.componentType).toBe('accordion');
    });

    test('factory should create accordion instance', () => {
      accordion = factory(accordionElement);
      expect(accordion).toBeInstanceOf(Accordion);
    });
  });

  describe('Event handling', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should toggle accordion when trigger is clicked', () => {
      const toggleSpy = jest.spyOn(accordion, 'toggle');
      
      trigger.click();
      
      expect(toggleSpy).toHaveBeenCalledWith(accordionItem);
    });

    test('should handle multiple triggers', () => {
      // Add another item
      const secondItem = document.createElement('div');
      secondItem.className = 'chi-accordion__item';
      
      const secondTrigger = document.createElement('button');
      secondTrigger.className = 'chi-accordion__trigger';
      
      const secondContent = document.createElement('div');
      secondContent.className = 'chi-accordion__content';
      
      secondItem.appendChild(secondTrigger);
      secondItem.appendChild(secondContent);
      accordionElement.appendChild(secondItem);
      
      // Recreate accordion to pick up new elements
      accordion.dispose();
      accordion = new Accordion(accordionElement);
      
      const toggleSpy = jest.spyOn(accordion, 'toggle');
      
      secondTrigger.click();
      
      expect(toggleSpy).toHaveBeenCalledWith(secondItem);
    });
  });

  describe('Show method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should show accordion item', () => {
      const showEvent = jest.fn();
      accordionItem.addEventListener('chi.accordion.show', showEvent);
      
      accordion.show(accordionItem);
      
      expect(showEvent).toHaveBeenCalled();
      expect(Util.hasClass(accordionItem, chi.classes.EXPANDED)).toBe(true);
    });

    test('should not show already expanded item', () => {
      Util.addClass(accordionItem, chi.classes.EXPANDED);
      const showEvent = jest.fn();
      accordionItem.addEventListener('chi.accordion.show', showEvent);
      
      accordion.show(accordionItem);
      
      expect(showEvent).not.toHaveBeenCalled();
    });

    test('should hide siblings in single expansion mode', () => {
      accordion._config.expansionMode = 'single';
      
      // Add second item
      const secondItem = document.createElement('div');
      secondItem.className = 'chi-accordion__item';
      Util.addClass(secondItem, chi.classes.EXPANDED);
      
      const secondContent = document.createElement('div');
      secondContent.className = 'chi-accordion__content';
      secondItem.appendChild(secondContent);
      
      accordionElement.appendChild(secondItem);
      
      const hideSpy = jest.spyOn(accordion, 'hide');
      
      accordion.show(accordionItem);
      
      expect(hideSpy).toHaveBeenCalledWith(secondItem);
    });
  });

  describe('Hide method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
      Util.addClass(accordionItem, chi.classes.EXPANDED);
    });

    test('should hide accordion item', () => {
      const hideEvent = jest.fn();
      accordionItem.addEventListener('chi.accordion.hide', hideEvent);
      
      accordion.hide(accordionItem);
      
      expect(hideEvent).toHaveBeenCalled();
      expect(Util.hasClass(accordionItem, chi.classes.EXPANDED)).toBe(false);
    });

    test('should not hide already collapsed item', () => {
      Util.removeClass(accordionItem, chi.classes.EXPANDED);
      const hideEvent = jest.fn();
      accordionItem.addEventListener('chi.accordion.hide', hideEvent);
      
      accordion.hide(accordionItem);
      
      expect(hideEvent).not.toHaveBeenCalled();
    });
  });

  describe('Toggle method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should show collapsed item', () => {
      const showSpy = jest.spyOn(accordion, 'show');
      
      accordion.toggle(accordionItem);
      
      expect(showSpy).toHaveBeenCalledWith(accordionItem);
    });

    test('should hide expanded item', () => {
      Util.addClass(accordionItem, chi.classes.EXPANDED);
      const hideSpy = jest.spyOn(accordion, 'hide');
      
      accordion.toggle(accordionItem);
      
      expect(hideSpy).toHaveBeenCalledWith(accordionItem);
    });

    test('should toggle default item if no item provided', () => {
      const showSpy = jest.spyOn(accordion, 'show');
      
      accordion.toggle();
      
      expect(showSpy).toHaveBeenCalledWith(accordionItem);
    });
  });

  describe('ExpandAll method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should expand all accordion items', () => {
      // Add second item
      const secondItem = document.createElement('div');
      secondItem.className = 'chi-accordion__item';
      
      const secondTrigger = document.createElement('button');
      secondTrigger.className = 'chi-accordion__trigger';
      
      const secondContent = document.createElement('div');
      secondContent.className = 'chi-accordion__content';
      
      secondItem.appendChild(secondTrigger);
      secondItem.appendChild(secondContent);
      accordionElement.appendChild(secondItem);
      
      // Recreate accordion to pick up new elements
      accordion.dispose();
      accordion = new Accordion(accordionElement);
      
      const showSpy = jest.spyOn(accordion, 'show');
      
      accordion.expandAll();
      
      expect(showSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('CollapseAll method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should collapse all accordion items', () => {
      // Add second item
      const secondItem = document.createElement('div');
      secondItem.className = 'chi-accordion__item';
      
      const secondTrigger = document.createElement('button');
      secondTrigger.className = 'chi-accordion__trigger';
      
      const secondContent = document.createElement('div');
      secondContent.className = 'chi-accordion__content';
      
      secondItem.appendChild(secondTrigger);
      secondItem.appendChild(secondContent);
      accordionElement.appendChild(secondItem);
      
      // Recreate accordion to pick up new elements
      accordion.dispose();
      accordion = new Accordion(accordionElement);
      
      const hideSpy = jest.spyOn(accordion, 'hide');
      
      accordion.collapseAll();
      
      expect(hideSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('Dispose method', () => {
    beforeEach(() => {
      accordion = new Accordion(accordionElement);
    });

    test('should clean up properties and event handlers', () => {
      const removeEventHandlersSpy = jest.spyOn(accordion, '_removeEventHandlers');
      
      accordion.dispose();
      
      expect(accordion._trigger).toBe(null);
      expect(accordion._content).toBe(null);
      expect(accordion._expanded).toBe(null);
      expect(removeEventHandlersSpy).toHaveBeenCalled();
    });
  });

  describe('Parent accordion resizing', () => {
    beforeEach(() => {
      // Create nested accordion structure
      const parentAccordion = document.createElement('div');
      parentAccordion.className = 'chi-accordion';
      
      const parentItem = document.createElement('div');
      parentItem.className = 'chi-accordion__item';
      
      const parentContent = document.createElement('div');
      parentContent.className = 'chi-accordion__content';
      parentContent.style.height = '100px';
      
      parentItem.appendChild(parentContent);
      parentAccordion.appendChild(parentItem);
      
      // Put the child accordion inside parent content
      parentContent.appendChild(accordionElement);
      
      document.body.appendChild(parentAccordion);
      
      accordion = new Accordion(accordionElement);
    });

    test('should resize parent accordion when showing item', () => {
      // Mock calculateHiddenElementHeight to return a specific value
      jest.spyOn(Util, 'calculateHiddenElementHeight').mockReturnValue('50px');
      
      accordion.show(accordionItem);
      
      const parentContent = accordionElement.closest('.chi-accordion').querySelector('.chi-accordion__content');
      expect(parentContent.style.height).toBe('150px'); // 100 + 50
    });

    test('should resize parent accordion when hiding item', () => {
      // Mock calculateHiddenElementHeight to return a specific value
      jest.spyOn(Util, 'calculateHiddenElementHeight').mockReturnValue('50px');
      
      // Set up parent content with expanded height
      const parentContent = accordionElement.closest('.chi-accordion').querySelector('.chi-accordion__content');
      parentContent.style.height = '150px';
      
      Util.addClass(accordionItem, chi.classes.EXPANDED);
      
      accordion.hide(accordionItem);
      
      expect(parentContent.style.height).toBe('100px'); // 150 - 50
    });
  });
});