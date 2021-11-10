const freeze = (object, property, value) => {
  Object.defineProperty(object, property, {
    configurable: true,
    get() { return value; },
    set(v) { console.warn(`tried to set frozen property ${property} with ${v}`); }
  });
};

export default {
  abstract: true,
  name: 'Wrapper',

  props: {
    name: {
      type: String,
      default: () => Math.floor(Date.now() * Math.random()).toString(16)
    },
    html: {
      type: String,
      default: null
    }
  },

  // mounted() {
  //   const container = this.$el;
  //   const parent = container.parentNode;

  //   container.__isFragment = true;
  //   container.__isMounted = false;

  //   const head = document.createComment(`Wrapper Start`);
  //   const tail = document.createComment(`Wrapper End`);

  //   container.__head = head;
  //   container.__tail = tail;
    
  //   let tpl = document.createDocumentFragment();
  //   tpl.appendChild(head);

  //   Array.from(container.childNodes)
  //     .forEach(node => {
  //       let notFrChild = !node.hasOwnProperty('__isFragmentChild__');
  //       tpl.appendChild(node);
  //       if (notFrChild) {
  //           freeze(node, 'parentNode', container);
  //           freeze(node, '__isFragmentChild__', true);
  //       }
  //     });

  //   tpl.appendChild(tail);

  //   if (this.html) {
  //     let template = document.createElement('template');
  //     template.innerHTML = this.html;
  //     Array.from(template.content.childNodes).forEach(node => {      
  //       tpl.appendChild(node);
  //     });
  //   }

  //   let next = container.nextSibling;
  //   parent.insertBefore(tpl, container, true);
  //   parent.removeChild(container);
  //   freeze(container, 'parentNode', parent);
  //   freeze(container, 'nextSibling', next);
  //   if (next)
  //     freeze(next, 'previousSibling', container);

  //   container.__isMounted = true;
  // },

  render(h) {
    const children = this.$slots.default;

    // if (children && children.length)
    //   children.forEach(child =>
    //     child.data = { ...child.data, attrs: { fragment: this.name, ...(child.data || {}).attrs } }
    //   );

    return h(
      "div",
      { attrs: { fragment: this.name } },
      children
    );
  }
};
