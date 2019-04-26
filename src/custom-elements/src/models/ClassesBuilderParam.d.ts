export interface ClassesBuilderParam {
    default?: string[];
    binary?: [string, boolean][];
    prefixed?: {
        prefix?: string;
        value: string;
        sufix?: string;
    }[];
    generated?: {
        value: string;
        genertor?: (source: string) => string;
    }[];
}
