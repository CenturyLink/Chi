import { Vue, Component } from 'vue-property-decorator';
import { ComponentOptions } from 'vue';

function ComponentDecorator(options: ComponentOptions<Vue>) {
  const componentDecorator = Component;

  return componentDecorator(options);
}

export { ComponentDecorator as Component, Vue };
