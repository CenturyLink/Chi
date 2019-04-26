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
