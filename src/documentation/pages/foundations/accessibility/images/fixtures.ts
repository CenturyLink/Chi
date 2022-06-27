import { ExplanationListItem } from '../common-assets/domain';
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import { commonTitleSubtagMap, titleTags } from '../common-assets/fixtures';

const nonTextContentTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    {
        label: '1.1 Text alternatives',
        href: 'https://www.w3.org/TR/WCAG20/#text-equiv'
    },
    {
        label: '1.1.1 Non-text Content',
        href: 'https://www.w3.org/TR/WCAG21/#non-text-content'
    }
];

const nonTextContentSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const nonTextContentPassData: PassData = {
    passPoints: [
        'Do all (non-decorative) images have alt text?',
        'Does the alt text provide meaningful information about the image?',
        'If the image is a link, does the alt text describe the link purpose?',
        'Are background images informational? Alt text is needed.',
        'Are background images decorative?  Alt text is not needed.',
        'Can background images be hidden, but still have access to information and functionality?'
    ]
}

export const nonTextContentExplanationList: ExplanationListItem[] = [
    {
        label: 'Controls, Input:',
        description: ' If non-text content is a control or accepts user input, then it has a name that describes its purpose.'
    },
    {
        label: 'Time-Based Media:',
        description: ' If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content.'
    },
    {
        label: 'Test:',
        description: ' If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.'
    },
    {
        label: 'Sensory:',
        description: ' If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.'
    },
    {
        label: 'CAPTCHA:',
        description: ` If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the 
        purpose of the non-text content are provided, and alternative forms of CAPTCHA using output modes for different types of sensory perception are provided to accommodate different disabilities.`
    },
    {
        label: 'Decoration, Formatting, Invisible:',
        description: ' If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technologies.'
    }
];

export const nonTextContentAdditionalExplanationList: ExplanationListItem[] = [
    {
        label: 'Informative:',
        description: ' Conveys a simple concept or information that can be expressed in a short phrase or sentence.'
    },
    {
        label: 'Functional:',
        description: ' Initiatse interactive actions.'
    },
    {
        label: 'Decorative:',
        description: ' Does not add information to the content of a page, and thus the image can have null/empty alt text. Assistive technologies can ignore the image. The image may have adjacent text that sufficiently describes the image.'
    }
];

const nonTextContentUsageType: UsageType = {
    title: 'Non-text content',
    benefits: 'Blind disabilities.',
    explanation: 'All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below:',
    explanationList: nonTextContentExplanationList,
    additionalExplanation: 'Images can be one of the following:',
    additionalExplanationList: nonTextContentAdditionalExplanationList,
    titleTags: nonTextContentTags,
    titleSubtags: nonTextContentSubtags,
    passData: nonTextContentPassData
}

const imagesOfTextTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.DISTINGUISHABLE_1_4_TITLE_TAG,
    titleTags.IMAGES_OF_TEXT_1_4_5_TITLE_TAG
];

const imagesOfTextSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const imagesOfTextPassData: PassData = {
    passPoints: [
        {
            mainContent: 'Is an image of text used to convey information instead of text?',
            sublist: [
                "If text cannot be formatted to get the same effect as images of text.",
                "If the effect won't be reliably presented on the commonly available user agents.",
                "If using an Assistive Technologies to meet this criterion would interfere with meeting other criteria such as 1.4.4 Resize Text.",
                "Example - where a particular presentation of text is essential to the information being conveyed, such as type samples, logotypes, branding, etc."
            ]
        }
    ]
}

const imagesOfTextUsageType: UsageType = {
    title: 'Images of text',
    benefits: 'Low vision, visual tracking problems, cognitive disabilities.',
    explanation: `Text is used to convey information rather than images of text. Achieve desired default visual presentation, to enable people who require a particular visual presentation 
    of text to be able to adjust the text presentation as needed.`,
    titleTags: imagesOfTextTags,
    titleSubtags: imagesOfTextSubtags,
    passData: imagesOfTextPassData
}

export const IMAGES_USAGE_TYPES = [
    nonTextContentUsageType,
    imagesOfTextUsageType
];

