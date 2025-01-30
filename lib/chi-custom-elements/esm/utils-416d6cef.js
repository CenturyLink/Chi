/**
 * Returns a string that contains the class value based on the opts parameter.
 * @param opts
 */
function calculateClasses(opts) {
    if (opts) {
        return (opts.binary || [])
            .filter((tuple) => tuple[1])
            .map((tuple) => tuple[0])
            .concat((opts.prefixed || [])
            .filter((prefixed) => prefixed.value)
            .map((prefixed) => (prefixed.prefix || '') + prefixed.value + (prefixed.suffix || '')))
            .concat((opts.generated || []).map((generator) => generator.generator(generator.value)))
            .filter((className) => className && className.trim())
            .join(' ');
    }
    else {
        return '';
    }
}
function contains(ancestorElement, descendantElement) {
    if (descendantElement.parentElement === ancestorElement) {
        return true;
    }
    else if (!descendantElement.parentElement) {
        return false;
    }
    else {
        return contains(ancestorElement, descendantElement.parentElement);
    }
}
const cleanUndefinedProps = (item) => {
    const newObj = {};
    for (const prop in item) {
        if (item[prop] !== undefined) {
            newObj[prop] = item[prop];
        }
    }
    return newObj;
};
/**
 * Filters by truthy value and joins items with space by default
 */
const joinArrayValues = (list, joinChar = ' ') => list.filter(Boolean).join(joinChar);

export { contains as a, cleanUndefinedProps as b, calculateClasses as c, joinArrayValues as j };
