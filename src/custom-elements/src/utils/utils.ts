import { CalculateClassesParam } from '../models/CalculateClassesParam';

/**
 * Returns a string that contains the class value based on the opts parameter.
 * @param opts
 */
export function calculateClasses(opts?: CalculateClassesParam): string {
  if (opts) {
    return (opts.binary || [])
      .filter(tuple => tuple[1])
      .map(tuple => tuple[0])
      .concat((opts.prefixed || [])
        .filter(prefixed => prefixed.value)
        .map(prefixed => (prefixed.prefix || '') + prefixed.value + (prefixed.suffix || ''))
      )
      .concat((opts.generated || [])
        .map(generator => generator.generator(generator.value))
      )
      .filter(className => className && className.trim())
      .join(' ');
  } else {
    return '';
  }
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

export function uuid4() {
  let uuid = '', ii;
  for (ii = 0; ii < 32; ii += 1) {
    switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += (Math.random() * 16 | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += (Math.random() * 4 | 8).toString(16);
        break;
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
    }
  }
  return uuid;
}

let idCounter = 0;
const idDomain = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);

export function getNewUniqueId(): string {
  return `chi-${idDomain}-${idCounter++}`;
}
