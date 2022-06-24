import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import {
    commonTitleSubtagMap,
    WCAG_2_0_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG,
    IMAGES_OF_TEXT_1_4_5_TITLE_TAG
} from '../common-assets/fixtures';

const resizeTextTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG,
    {
        label: '1.4.4 Resize text',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale'
    }
];

const resizeTextSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const resizeTextPassData: PassData = {
    passPoints: [
        'Can visually rendered text be scaled successfully so that it can be read directly by people with mild visual disabilities, without requiring the use of Assistive Technologies such as a screen magnifier?',
        'Including text-based controls (text characters that have been displayed so that they can be seen vs. text characters that are still in data form such as ASCII).',
        'Can content be scaled up to 200% - up to twice the width and height?'
    ]
}

const resizeTextUsageType: UsageType = {
    title: 'Resize text',
    benefits: 'Low vision disabilities.',
    explanation: 'Except for captions and images of text, text can be resized without Assistive Technology up to 200 percent without loss of content or functionality.',
    titleTags: resizeTextTags,
    titleSubtags: resizeTextSubtags,
    passData: resizeTextPassData
}

const imagesOfTextTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    DISTINGUISHABLE_1_4_TITLE_TAG,
    IMAGES_OF_TEXT_1_4_5_TITLE_TAG
];

const imagesOfTextSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const imagesOfTextPassData: PassData = {
    passPoints: [
        'Are images used to present text?',
        'Is text embedded in images?',
        'Is actual text used instead images of text?'
    ]
};

const imagesOfTextUsageType: UsageType = {
    title: 'Images of text',
    benefits: 'Blind disabilities.',
    explanation: `Text is used to convey information rather than images of text. Achieve desired default visual presentation, to enable people who require a particular visual presentation 
    of text to be able to adjust the text presentation as needed.`,
    titleTags: imagesOfTextTags,
    titleSubtags: imagesOfTextSubtags,
    passData: imagesOfTextPassData
}

export const TEXT_USAGE_TYPES = [
    resizeTextUsageType,
    imagesOfTextUsageType
]