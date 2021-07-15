import Vue from 'vue';

export function uuid4() {
  let uuid = '',
    ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += ((Math.random() * 16) | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += ((Math.random() * 4) | 8).toString(16);
        break;
      default:
        uuid += ((Math.random() * 16) | 0).toString(16);
    }
  }
  return uuid;
}

export function contains(ancestorElement: HTMLElement, descendantElement: HTMLElement): boolean {
  if (descendantElement.parentElement === ancestorElement) {
    return true;
  } else if (!descendantElement.parentElement) {
    return false;
  } else {
    return contains(ancestorElement, descendantElement.parentElement);
  }
}

export function findComponent(startComponent: Vue, componentName: string) {
  let component = null;
  let parent = startComponent.$parent;
  while (parent && !component) {
    if (parent.$options.name === componentName) {
      component = parent;
    }
    parent = parent.$parent;
  }
  return component;
}

export function copyObject(src: any) {
  const target: any = {};

  for (const prop in src) {
    if (Object.prototype.hasOwnProperty.call(src, prop)) {
      target[prop] = src[prop];
    }
  }

  return target;
}

export function copyArrayOfObjects(originArray: any[]) {
  return originArray.map(object => {
    return copyObject(object);
  });
}
