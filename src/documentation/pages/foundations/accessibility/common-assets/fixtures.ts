import { TitleTag, TitelSubtagMap } from "./domain";

export const TIME_BASED_MEDIA_1_2_TITLE_TAG: TitleTag = {
    label: '1.2 Time-based media',
    href: 'https://www.w3.org/TR/WCAG20/#media-equiv'
};

export const ADAPTABLE_1_3_TITLE_TAG: TitleTag = {
    label: '1.3 Adaptable',
    href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation'
};

export const INFO_RELATIONSHIPS_1_3_1_TITLE_TAG: TitleTag = {
    label: '1.3.1 Info and Relationships',
    href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic'
};

export const DISTINGUISHABLE_1_4_TITLE_TAG: TitleTag = {
    label: '1.4 Distinguishable',
    href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast'
};

export const IMAGES_OF_TEXT_1_4_5_TITLE_TAG: TitleTag = {
    label: '1.4.5 Images of Text',
    href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation'
};

export const WCAG_2_0_TITLE_TAG: TitleTag = {
    label: 'WCAG 2.0 Guideline',
    href: 'https://www.w3.org/TR/WCAG20'
};

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

export const INPUT_ASSISTANCE_3_3_TITLE_TAG: TitleTag = {
    label: '3.3 Input assistance',
    href: 'https://www.w3.org/TR/WCAG20/#minimize-error'
};

export const COMPATIBLE_4_1_TITLE_TAG: TitleTag = {
    label: '4.1 Compatible',
    href: 'https://www.w3.org/TR/WCAG20/#ensure-compat'
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
