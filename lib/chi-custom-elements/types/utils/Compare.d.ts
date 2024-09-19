export declare class Compare {
    static deepEqual(obj1: any, obj2: any): boolean;
    /**
     * Evaluates if `obj` is an empty object or not. An empty object will be considered the one which has no attributes,
     * or, if any, they are also empty (null/undefined/""/[]/{})
     * @param obj Object which can contain different types of attributes like object/string/array/number
     * @return true if `obj` is empty and false otherwise
     */
    static isEmpty(obj: any): boolean;
    static isEmptyArray<T>(array?: T[]): boolean;
    static hasProperties(obj: any): boolean;
}
