export interface KeyStrokesItem {
    firstKey: string;
    secondKey?: string;
    textBetweenKeys?: string;
    description: string;
}

export interface TitleSubtag {
    label: string;
    href: string;
}

export interface PassData {
    passDescription?: string;
    passPoints: string[];
}

export interface KeyboardUsageType {
    benefits: string;
    explanation: string;
    titleSubtags: TitleSubtag[];
    passData: PassData;
}