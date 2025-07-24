// Jest setup file
// Mock DOM methods that might not be available in JSDOM
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (id) => clearTimeout(id);

// Mock window.getComputedStyle
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: () => '',
    width: '100px',
    height: '100px',
    marginLeft: '0px',
    marginRight: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    borderLeftWidth: '0px',
    borderRightWidth: '0px',
    borderTopWidth: '0px',
    borderBottomWidth: '0px',
    boxSizing: 'border-box',
    display: 'block',
    overflow: 'visible'
  })
});

// Mock getBoundingClientRect
Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 100,
  height: 100,
  top: 0,
  left: 0,
  bottom: 100,
  right: 100,
  x: 0,
  y: 0,
  toJSON: () => {}
}));

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

// Mock dataset property for older browsers
Object.defineProperty(Element.prototype, 'dataset', {
  get: function() {
    return this._dataset || (this._dataset = {});
  }
});