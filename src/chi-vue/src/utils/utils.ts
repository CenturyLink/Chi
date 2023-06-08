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

export function findComponent(startComponent: any, componentName: string) {
  let component = null;
  let parent = startComponent.$parent;

  while (parent && !component) {
    if (parent.name === componentName) {
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
  return originArray.map((object) => {
    return copyObject(object);
  });
}

export function printElement(content: string, title: string) {
  const win = window.open();
  const styleSheets =
    Array.from(document.head.getElementsByTagName('link'))
      .map((el) => el.outerHTML)
      .reduce((previousValue, currentValue) => previousValue + currentValue, '') +
    Array.from(document.head.getElementsByTagName('style'))
      .map((el) => el.outerHTML)
      .reduce((previousValue, currentValue) => previousValue || '' + currentValue, '');

  if (!win) {
    throw new Error('Could not open print window.');
  }

  win.document.write(`<head><title>${title}</title>${styleSheets}</head><body class='chi'>${content}</body>`);
  win.document.close();

  win.addEventListener('load', () => {
    win.setTimeout(() => {
      win.print();
      win.close();
    }, 0);
  });
}
