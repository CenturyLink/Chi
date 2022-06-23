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

export interface ExplanationListItem {
    label?: string;
    description: string;
}

export interface MultiExplanationList {
    explanation: string;
    explanationList: ExplanationListItem[]
}
export interface UsageType {
    title: string;
    benefits: string;
    explanation?: string | string[];
    explanationList?: ExplanationListItem[];
    multiExplanationLists?: MultiExplanationList[];
    titleTags: TitleTag[];
    titleSubtags: TitleSubtag[];
    passData: PassData;
}