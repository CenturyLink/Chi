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

export interface PassPointSublist {
    mainContent: string;
    sublist: string[]
}

export interface PassData {
    passDescription?: string;
    passPoints: (string | PassPointSublist)[];
}

export interface ExplanationListItem {
    label?: string;
    description: string;
}

export interface UsageType {
    title: string;
    benefits: string;
    explanation?: string | string[];
    explanationList?: ExplanationListItem[];
    additionalExplanation?: string;
    additionalExplanationList?: ExplanationListItem[];
    titleTags: TitleTag[];
    titleSubtags: TitleSubtag[];
    passData: PassData;
}