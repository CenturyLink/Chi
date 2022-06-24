import { ExplanationListItem } from '../common-assets/domain';
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import {
    commonTitleSubtagMap,
    TIME_BASED_MEDIA_1_2_TITLE_TAG,
    WCAG_2_0_TITLE_TAG,
    IMAGES_OF_TEXT_1_4_5_TITLE_TAG,
} from '../common-assets/fixtures';

const prerecordedAudioVideoTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    TIME_BASED_MEDIA_1_2_TITLE_TAG,
    IMAGES_OF_TEXT_1_4_5_TITLE_TAG
];

const prerecordedAudioVideoSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const prerecordedAudioVideoPassData: PassData = {
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

const prerecordedAudioVideoUsageType: UsageType = {
    title: 'Prerecorded audio-only and video-only',
    benefits: 'Low vision, visual tracking problems, cognitive disabilities.',
    explanation: `Text is used to convey information rather than images of text. Achieve desired default visual presentation, to enable people who require a particular visual presentation 
    of text to be able to adjust the text presentation as needed.`,
    titleTags: prerecordedAudioVideoTags,
    titleSubtags: prerecordedAudioVideoSubtags,
    passData: prerecordedAudioVideoPassData
}

export const IMAGES_USAGE_TYPES = [
    prerecordedAudioVideoUsageType
];

