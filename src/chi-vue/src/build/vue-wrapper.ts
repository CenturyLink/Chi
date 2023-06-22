import { Vue, Component } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';

function ComponentFunction(options: ComponentOptions<Vue>) {
  return Component(options);
}

let ComponentDecorator = ComponentFunction;

if (window['@centurylink/vue-wrapper']) {
  ComponentDecorator = window['@centurylink/vue-wrapper'].Component;
}

export { ComponentDecorator as Component, Vue };
