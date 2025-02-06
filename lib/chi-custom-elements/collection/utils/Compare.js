export class Compare {
    static deepEqual(obj1, obj2) {
        if (typeof obj1 !== typeof obj2) {
            return false;
        }
        if (obj1 === null || obj1 === undefined || obj2 === null || obj2 === undefined) {
            return obj1 === obj2;
        }
        if (typeof obj1 === 'object') {
            if (Object.keys(obj1).length !== Object.keys(obj2).length) {
                return false;
            }
            for (const idx in obj1) {
                if (!this.deepEqual(obj1[idx], obj2[idx])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return obj1 === obj2;
        }
    }
    /**
     * Evaluates if `obj` is an empty object or not. An empty object will be considered the one which has no attributes,
     * or, if any, they are also empty (null/undefined/""/[]/{})
     * @param obj Object which can contain different types of attributes like object/string/array/number
     * @return true if `obj` is empty and false otherwise
     */
    static isEmpty(obj) {
        return ((Array.isArray(obj) && this.isEmptyArray(obj)) ||
            !this.hasProperties(obj) ||
            !Object.keys(obj).some((field) => {
                if (Array.isArray(obj[field])) {
                    return obj[field].length > 0;
                }
                else if (obj[field] === Object(obj[field])) {
                    return !this.isEmpty(obj[field]);
                }
                else {
                    return obj[field] !== null && obj[field] !== undefined && obj[field] !== '';
                }
            }));
    }
    static isEmptyArray(array = []) {
        return !array || array.length === 0;
    }
    static hasProperties(obj) {
        for (const prop in obj) {
            return !!prop;
        }
        return false;
    }
}
