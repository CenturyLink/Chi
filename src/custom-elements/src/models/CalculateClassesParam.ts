export interface CalculateClassesParam {
  default?: string[];
  binary?: [string, boolean][];
  prefixed?: {
    prefix?: string,
    value: string,
    suffix?: string
  }[];
  generated?: {
    value: string,
    generator: (source: string) => string,
  }[];
}

