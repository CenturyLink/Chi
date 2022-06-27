import { ExplanationListItem } from '../common-assets/domain';
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import { commonTitleSubtagMap, titleTags } from '../common-assets/fixtures';

const prerecordedAudioVideoTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.TIME_BASED_MEDIA_1_2_TITLE_TAG,
    {
        label: '1.2.1 Audio-only and Video-only (Prerecorded)',
        href: 'https://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt'
    }
];

const prerecordedAudioVideoSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const prerecordedAudioVideoPassData: PassData = {
    passPoints: [
        'Is information conveyed by prerecorded audio-only and prerecorded video-only content available to all users?  (Examples: Audio recording, text transcript, animation as a tutorial)',
        'Can Assistive Technologies read text alternatives aloud, present then visually, or convert to braille for people who have difficulty perceiving visual content, or have difficulty understanding the meaning of prerecorded video content?',
        'Can text be read for people who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason?'
    ]
}

const prerecordedAudioVideoExplanationList: ExplanationListItem[] = [
    {
        label: 'Prerecorded Audio-only:',
        description: 'An alternative for time-based media is provided that presents equivalent information for prerecorded audio-only content.'
    },
    {
        label: 'Prerecorded Video-only:',
        description: 'Either an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.'
    }
]

const prerecordedAudioVideoUsageType: UsageType = {
    title: 'Prerecorded audio-only and video-only',
    benefits: 'Blind, deaf, cognitive/intellectual disabilities.',
    explanation: 'For prerecorded audio-only and prerecorded video-only media, the following are true, except when the audio or video is a media alternative for text and is clearly labeled as such:',
    explanationList: prerecordedAudioVideoExplanationList,
    titleTags: prerecordedAudioVideoTags,
    titleSubtags: prerecordedAudioVideoSubtags,
    passData: prerecordedAudioVideoPassData
};

const captionsPrerecordedTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.TIME_BASED_MEDIA_1_2_TITLE_TAG,
    {
        label: '1.2.2 Captions (Prerecorded)',
        href: 'https://www.w3.org/TR/WCAG20/#media-equiv-captions'
    }
];

const captionsPrerecordedSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const captionsPrerecordedPassData: PassData = {
    passPoints: [
        'Can people who are deaf or hard of hearing to watch synchronized media presentations/content through captions?'
    ]
}

const captionsPrerecordedUsageType: UsageType = {
    title: 'Captions prerecorded',
    benefits: 'Deaf, hearing loss disabilities.',
    explanation: 'Captions are provided for all prerecorded audio content in synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
    titleTags: captionsPrerecordedTags,
    titleSubtags: captionsPrerecordedSubtags,
    passData: captionsPrerecordedPassData
};

const audioMediaAlternativeTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.TIME_BASED_MEDIA_1_2_TITLE_TAG,
    {
        label: '1.2.3 Audio Description or Media Alternative (Prerecorded)',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#media-equiv-audio-desc'
    }
];

const audioMediaAlternativeSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const audioMediaAlternativePassData: PassData = {
    passPoints: [
        {
            mainContent: 'Do people who are blind or visually impaired have access to the visual information in a synchronized media presentation?',
            sublist: [
                "Audio description of the video content, including dialogue, actions, characters, scene changes, and on-screen text.",
                "Text form includes all of the information in the synchronized media (both visual and auditory), including visual context, actions and expressions of actors, and any other visual material, non-speech sounds (laughter, off-screen voices, etc.), and transcripts of all dialogue."
            ]
        }
    ]
}

const audioMediaAlternativeUsageType: UsageType = {
    title: 'Audio description or media alternative (prerecorded)',
    benefits: 'Blind and visual disabilities, cognitive disabilities (people who have difficulty perceiving or understanding moving images).',
    explanation: 'An alternative for time-based media or audio description of the prerecorded video content is provided for synchronized media, except when the media is a media alternative for text and is clearly labeled as such.',
    titleTags: audioMediaAlternativeTags,
    titleSubtags: audioMediaAlternativeSubtags,
    passData: audioMediaAlternativePassData
}

const captionsLiveTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.TIME_BASED_MEDIA_1_2_TITLE_TAG,
    {
        label: '1.2.4 Captions (Live)',
        href: 'https://www.w3.org/TR/WCAG21/#captions-live'
    }
];

const captionsLiveSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const captionsLivePassData: PassData = {
    passPoints: [
        {
            mainContent: 'Can people who are deaf or hard of hearing to watch real-time presentations, including dialogue, and identifies who is speaking, and notates sound effects and other significant audio?',
            sublist: [
                'Applies to the broadcast of synchronized media.'
            ]
        }
    ]
};

const captionsLiveUsageType: UsageType = {
    title: 'Captions live',
    benefits: 'Deaf, hearing loss disabilities.',
    explanation: 'Captions are provided for all live audio content in synchronized media.',
    titleTags: captionsLiveTags,
    titleSubtags: captionsLiveSubtags,
    passData: captionsLivePassData
};

const audioDescriptionTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.TIME_BASED_MEDIA_1_2_TITLE_TAG,
    {
        label: '1.2.5 Audio Description (Prerecorded)',
        href: 'https://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only'
    }
];

const audioDescriptionSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelAA'] ];

const audioDescriptionPassData: PassData = {
    passPoints: [
        {
            mainContent: 'Can people who are blind or visually impaired access to the visual information in a synchronized media presentation?',
            sublist: [
                'The audio description provides information about dialogue, as well as actions, characters, scene changes, and on-screen text that are important and are not described or spoken in the main sound track.'
            ]
        }
    ]
};

const audioDescriptionUsageType: UsageType = {
    title: 'Audio description (prerecorded)',
    benefits: 'Blind and visual disabilities, cognitive disabilities (people who have difficulty interpreting visually what is happening).',
    explanation: 'Audio description is provided for all prerecorded video content in synchronized media.',
    titleTags: audioDescriptionTags,
    titleSubtags: audioDescriptionSubtags,
    passData: audioDescriptionPassData
};

const audioControlTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.DISTINGUISHABLE_1_4_TITLE_TAG,
    {
        label: '1.4.2 Audio Control',
        href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio'
    }
];

const audioControlSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const audioControlPassData: PassData = {
    passPoints: [
        {
            mainContent: 'Can a sound that begins playing automatically on page load be stopped by the user via a control or link to turn the sound off?',
            sublist: [
                'Is the control keyboard operable, located near the beginning of the page, and easily/quickly discovered by the user?'
            ]
        },
        'Can the screen reader user still hear the screen reader without other sounds playing/interfering?',
        'If a sound exists, does the sound play for 3 seconds or less, and stop automatically?',
        'Can a sound be played only on user request?'
    ]
};

const audioControlUsageType: UsageType = {
    title: 'Audio control',
    benefits: 'Blind and hard of hearing disabilities.',
    explanation: 'If any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.',
    titleTags: audioControlTags,
    titleSubtags: audioControlSubtags,
    passData: audioControlPassData
};

const timingAdjustableTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.ENOUGH_TIME_2_2_TITLE_TAG,
    {
        label: '2.2.1 Timing Adjustable',
        href: 'https://www.w3.org/TR/WCAG20/#time-limits-required-behaviors'
    }
];

const timingAdjustableSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const timingAdjustablePassData: PassData = {
    passPoints: [
        'Are users with disabilities given adequate time to interact with Web content?',
        'Are options provided  to disable time limits, customize the length of time limits, or request more time before a time limit occurs, in order to helps those users who require more time than expected to successfully complete tasks?'
    ]
};

const timingAdjustableExplanationItem: ExplanationListItem[] = [
    {
        label: 'Turn off:',
        description: 'The user is allowed to turn off the time limit before encountering it; or'
    },
    {
        label: 'Adjust:',
        description: 'The user is allowed to adjust the time limit before encountering it over a wide range that is at least ten times the length of the default setting; or'
    },
    {
        label: 'Extend:',
        description: 'The user is warned before time expires and given at least 20 seconds to extend the time limit with a simple action (for example, "press the space bar"), and the user is allowed to extend the time limit at least ten times; or'
    },
    {
        label: 'Real-time Exception:',
        description: 'The time limit is a required part of a real-time event (for example, an auction), and no alternative to the time limit is possible; or'
    },
    {
        label: 'Essential Exception:',
        description: 'The time limit is essential and extending it would invalidate the activity; or'
    },
    {
        label: '20 Hour Exception:',
        description: 'The time limit is longer than 20 hours.'
    }
];

const timingAdjustableUsageType: UsageType = {
    title: 'Timing adjustable',
    benefits: 'Blind, low vision, deaf, dexterity impairments, and cognitive limitations.',
    explanation: 'For each time limit that is set by the content, at least one of the following is true:',
    explanationList: timingAdjustableExplanationItem,
    titleTags: timingAdjustableTags,
    titleSubtags: timingAdjustableSubtags,
    passData: timingAdjustablePassData
};

const pauseStopHideTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.ENOUGH_TIME_2_2_TITLE_TAG,
    {
        label: '2.2.2 Pause, Stop, Hide',
        href: 'https://www.w3.org/TR/WCAG20/#time-limits-pause'
    }
];

const pauseStopHideSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const pauseStopHidePassData: PassData = {
    passPoints: [
        'Is there an option of provided to the user with a means to control the frequency of updates when content Is auto-updating?',
        'Can content be paused and restarted from where it was paused?',
        'Can content stop blinking within 5 seconds?'
    ]
};

const pauseStopHideExplanationItem: ExplanationListItem[] = [
    {
        label: 'Moving, blinking, scrolling:',
        description: 'For any moving, blinking or scrolling information that (1) starts automatically, (2) lasts more than five seconds, and (3) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it unless the movement, blinking, or scrolling is part of an activity where it is essential; and'
    },
    {
        label: 'Auto-updating:',
        description: 'For any auto-updating information that (1) starts automatically and (2) is presented in parallel with other content, there is a mechanism for the user to pause, stop, or hide it or to control the frequency of the update unless the auto-updating is part of an activity where it is essential.'
    }
];

const pauseStopHideUsageType: UsageType = {
    title: 'Pause, stop, hide',
    benefits: 'Cognitive, attention deficient disorders, low literacy/reading/intellectual disabilities.',
    explanation: 'For moving, blinking, scrolling, or auto-updating information, all of the following are true:',
    explanationList: pauseStopHideExplanationItem,
    titleTags: pauseStopHideTags,
    titleSubtags: pauseStopHideSubtags,
    passData: pauseStopHidePassData
};

const threeFlashesTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    {
        label: '2.3 Seizures',
        href: 'https://www.w3.org/TR/WCAG20/#seizure'
    },
    {
        label: '2.3.1 Three Flashes or Below Threshold',
        href: 'https://www.w3.org/TR/WCAG20/#seizure-does-not-violate'
    }
];

const threeFlashesSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const threeFlashesPassData: PassData = {
    passPoints: [
        'Do users have access to the full content of a site without inducing seizures due to photosensitivity?',
        'Can the user suppress any flashing content before it begins?',
        'If there is a flashing area, is it a small area (less than 25% of 10 degrees of the visual field - representing the central area of vision in the eye - approximately 341 x 256 pixels)?',
        'Is the flashing limited on only 3 times in any one second period?'
    ]
};

const threeFlashesUsageType: UsageType = {
    title: 'Three flashes or below threshold',
    benefits: 'Photosensitive epilepsy, photosentive seizure disorders.',
    explanation: 'Web pages do not contain anything that flashes more than three times in any one second period, or the flash is below the general flash and red flash thresholds.',
    titleTags: threeFlashesTags,
    titleSubtags: threeFlashesSubtags,
    passData: threeFlashesPassData
};

export const otherUsageTypes = [
    prerecordedAudioVideoUsageType,
    captionsPrerecordedUsageType,
    audioMediaAlternativeUsageType,
    captionsLiveUsageType,
    audioDescriptionUsageType,
    audioControlUsageType,
    timingAdjustableUsageType,
    pauseStopHideUsageType,
    threeFlashesUsageType
];

