import { ExplanationListItem } from '../common-assets/domain';
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import {
    commonTitleSubtagMap,
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG
} from '../common-assets/fixtures';

const sensoryCharacteristicsTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    {
        label: '1.3.3 Sensory Characteristics',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-understanding'
    }
];

const sensoryCharacteristicsSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const sensoryCharacteristicsPassData: PassData = {
    passPoints: [
        'Can the user access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation?',
        'Are descriptions of controls solely via references to visual or auditory cues avoided?',
        'Is additional information provided other than shape and/or location?',
        'Does positioning, color, and labeling help identify the information?'
    ]
}

const sensoryCharacteristicsUsageType: UsageType = {
    title: 'Sensory characteristics',
    benefits: 'Blind and low-vision disabilities.',
    explanation: `Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components 
    such as shape, size, visual location, orientation, or sound.`,
    titleTags: sensoryCharacteristicsTags,
    titleSubtags: sensoryCharacteristicsSubtags,
    passData: sensoryCharacteristicsPassData
}

const useOfColorTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG,
    {
        label: '1.4.1 Use of Color',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color'
    }
];

const useOfColorSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const useOfColorPassData: PassData = {
    passPoints: [
        'Verify that color alone is not used to convey important information.',
        'Can all of the information be understood when viewing the page in grayscale?',
        'Can all of the page functions be performed when viewing the page in grayscale?'
    ]
}

const useOfColorUsageType: UsageType = {
    title: 'Use of color',
    benefits: 'Colorblind disabilities.',
    explanation: 'Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.',
    titleTags: useOfColorTags,
    titleSubtags: useOfColorSubtags,
    passData: useOfColorPassData
}

const contrastTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG,
    {
        label: '1.4.3 Contrast (Minimum)',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast'
    }
];

const contrastSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const contrastPassData: PassData = {
    passPoints: [
        'Is the color contrast of the text and its background readable by low-vision users?',
        'Using a color contrast tool - are color contrast ratios at least 4.5:1 for text that is < 18 point/24 px, and for bold text that is < 14 point/18.5 px?',
        `Using a color contrast tool - are color contrast ratios at least 3:1 for large-scale text that is at least 18 point/24 px, and for large-scale bold text
        that is at least 14 point/18.5 px?`,
        'Is there a text that is only decorative and conveys no information? (Decorative text does not need to meet color contrast guidelines)'
    ]
}

export const contrastExplanationList: ExplanationListItem[] = [
    {
        label: 'Large Text:',
        description: 'Large-scale text and images of large-scale text have a contrast ratio of at least 3:1.'
    },
    {
        label: 'Incidental:',
        description: `Text or images of text that are part of an inactive user interface component, that are pure decoration,
        that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.`
    },
    {
        label: 'Logotypes:',
        description: 'Text that is part of a logo or brand name has no minimum contrast requirement.'
    }
];

const contrastUsageType: UsageType = {
    title: 'Contrast',
    benefits: 'Low-vision and colorblind disabilities.',
    explanation: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:',
    explanationList: contrastExplanationList,
    titleTags: contrastTags,
    titleSubtags: contrastSubtags,
    passData: contrastPassData
}

export const SENSORY_COLOR_USAGE_TYPES = [
    sensoryCharacteristicsUsageType,
    useOfColorUsageType,
    contrastUsageType
];

