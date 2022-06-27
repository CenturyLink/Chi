import { TitleTag, TitelSubtagMap } from "./domain";

export const titleTags: {[key: string]: TitleTag} = {
    TIME_BASED_MEDIA_1_2_TITLE_TAG: {
        label: '1.2 Time-based media',
        href: 'https://www.w3.org/TR/WCAG20/#media-equiv'
    },
    ADAPTABLE_1_3_TITLE_TAG: {
        label: '1.3 Adaptable',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation'
    },
    INFO_RELATIONSHIPS_1_3_1_TITLE_TAG: {
        label: '1.3.1 Info and Relationships',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic'
    },
    DISTINGUISHABLE_1_4_TITLE_TAG: {
        label: '1.4 Distinguishable',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast'
    },
    IMAGES_OF_TEXT_1_4_5_TITLE_TAG: {
        label: '1.4.5 Images of Text',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation'
    },
    WCAG_2_0_TITLE_TAG: {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    ENOUGH_TIME_2_2_TITLE_TAG: {
        label: '2.2 Enough time',
        href: 'https://www.w3.org/TR/WCAG20/#time-limits'
    },
    NAVIGABLE_2_4_TITLE_TAG: {
        label: '2.4 Navigable',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
    },
    READABLE_3_1_TITLE_TAG: {
        label: '3.1 Readable',
        href: 'https://www.w3.org/TR/WCAG20/#meaning'
    },
    PREDICTABLE_3_2_TITLE_TAG: {
        label: '3.2 Predictable',
        href: 'https://www.w3.org/TR/WCAG20/#consistent-behavior'
    },
    INPUT_ASSISTANCE_3_3_TITLE_TAG: {
        label: '3.3 Input assistance',
        href: 'https://www.w3.org/TR/WCAG20/#minimize-error'
    },
    COMPATIBLE_4_1_TITLE_TAG: {
        label: '4.1 Compatible',
        href: 'https://www.w3.org/TR/WCAG20/#ensure-compat'
    }    
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
