import { TitleTag, TitelSubtagMap } from "./domain";

export const WCAG_2_0_TITLE_TAG: TitleTag = {
    label: 'WCAG 2.0 Guideline',
    href: 'https://www.w3.org/TR/WCAG20'
};

export const ADAPTABLE_1_3_TITLE_TAG: TitleTag = {
    label: '1.3 Adaptable',
    href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation'
}

export const DISTINGUISHABLE_1_4_TITLE_TAG: TitleTag = {
    label: '1.4 Distinguishable',
    href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast'
}

export const NAVIGABLE_2_4_TITLE_TAG: TitleTag = {
    label: '2.4 Navigable',
    href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
};

export const READABLE_3_1_TITLE_TAG: TitleTag = {
    label: '3.1 Readable',
    href: 'https://www.w3.org/TR/WCAG20/#meaning'
}

export const PREDICTABLE_3_2_TITLE_TAG: TitleTag = {
    label: '3.2 Predictable',
    href: 'https://www.w3.org/TR/WCAG20/#consistent-behavior'
}

export const commonTitleSubtagMap: TitelSubtagMap = {
    perceivable: {
        label: 'Perceivable',
        tooltip: 'Content must be presentable to users in ways they can perceive.'
    },
    levelA: {
        label: 'Level A',
        tooltip: 'Requirements must be satisfied to pass WCAG 2.0 Level A Success Criteria.'
    },
    operable: {
        label: 'Operable',
        tooltip: 'Users must be able to operate the interface.'
    },
    levelAA: {
        label: 'Level AA',
        tooltip: 'Requirements must be satisfied to pass WCAG 2.0 Level AA Success Criteria.'
    },
    understandable: {
        label: 'Understandable',
        tooltip: 'Users must be able to understand the information as well as the operation of the user interface.'
    },
    robust: {
        label: 'Robust',
        tooltip: 'Users must be able to access the content as technologies advance.'
    }
};
