export interface KeyStrokesItem {
    firstKey: string;
    secondKey?: string;
    textBetweenKeys?: string;
    description: string;
}

export interface TitleTag {
    label: string;
    href: string;
}

export interface TitleSubtag {
    label: string;
    tooltip: string;
}

export interface TitelSubtagMap {
    [key: string]: TitleSubtag
}

export interface PassData {
    passDescription?: string;
    passPoints: string[];
}

export interface UsageType {
    title: string;
    benefits: string;
    explanation: string;
    titleTags: TitleTag[];
    titleSubtags: TitleSubtag[];
    passData: PassData;
}