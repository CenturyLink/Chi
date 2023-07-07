import Vue, { VNode } from 'vue';
import { Component } from 'vue-property-decorator';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface ElementAttributesProperty {
      $props: {};
    }
  }

  interface Window {
    '@centurylink/vue-wrapper': {
      Component: typeof Component;
    };
  }
}
