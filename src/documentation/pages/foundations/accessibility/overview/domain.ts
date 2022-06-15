interface SubList {
    label: string;
    href?: string;
    text: string;
}

export interface KeyAccessibilityConcept {
    title: string;
    href: string;
    descriptionArray?: string[];
    subList?: SubList[];
}

export interface Foundations {
    title: string;
    description: string;
    ask: string;
    subList: SubList[];
}