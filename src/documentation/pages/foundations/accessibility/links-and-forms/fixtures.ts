import {  TitleTag, TitleSubtag, PassData, UsageType, ExplanationListItem } from '../common-assets/domain'
import {
    commonTitleSubtagMap,
    ADAPTABLE_1_3_TITLE_TAG,
    INFO_RELATIONSHIPS_1_3_1_TITLE_TAG,
    WCAG_2_0_TITLE_TAG,
    PREDICTABLE_3_2_TITLE_TAG,
    INPUT_ASSISTANCE_3_3_TITLE_TAG,
    COMPATIBLE_4_1_TITLE_TAG
} from '../common-assets/fixtures';

const infoAndRelationshipTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    INFO_RELATIONSHIPS_1_3_1_TITLE_TAG
];

const infoAndRelationshipSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const infoAndRelationshipPassData: PassData = {
    passPoints: [
        'Do form labels and fields have same/similar and appropriate identification that relates the fields with the label?',
        'Are labels positioned nearby their associated fields?',
        'Are labels still viewable when zoomed?',
        "Can users with different disabilities use Assistive Technologies to adapt content according to the user's needs?",
        'Is information and relationships that are implied by visual or auditory formatting preserved when the presentation format changes?'
    ]
}

const infoAndRelationshipUsageType: UsageType = {
    title: 'Info and relationships',
    benefits: 'Blind, low-vision disabilities.',
    explanation: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
    titleTags: infoAndRelationshipTags,
    titleSubtags: infoAndRelationshipSubtags,
    passData: infoAndRelationshipPassData
}

const onFocusTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    PREDICTABLE_3_2_TITLE_TAG,
    {
        label: '3.2.1 On Focus',
        href: 'https://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus'
    }
];

const onFocusSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelA'] ];

const onFocusPassData: PassData = {
    passPoints: [
        'Is functionality predictable as the user navigates their way through a document?',
        'Is an unexpected change of context avoided when a component receives focus?',
    ]
}

const onFocusUsageType: UsageType = {
    title: 'On focus',
    benefits: 'Blind, low vision, cognitive/intellectual, motor disabilities.',
    explanation: 'When any component receives focus, it does not initiate a change of context.',
    titleTags: onFocusTags,
    titleSubtags: onFocusSubtags,
    passData: onFocusPassData
}

const onInputTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    PREDICTABLE_3_2_TITLE_TAG,
    {
        label: '3.2.2 On Input',
        href: 'https://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change'
    }
];

const onInputSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelA'] ];

const onInputPassData: PassData = {
    passPoints: [
        'Is the user pre-informed/cued when a change to a form control has a change of context?',
        'Is an explanation of what will happen when the control is changed available prior to the controls activation?',
    ]
}

const onInputUsageType: UsageType = {
    title: 'On input',
    benefits: 'Blind, low vision, cognitive/intellectual disabilities.',
    explanation: [
        'Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.',
        "Changes of context are appropriate only when it is clear that such a change will happen in response to the user's action."
    ],
    titleTags: onInputTags,
    titleSubtags: onInputSubtags,
    passData: onInputPassData
}

const errorIdentificationTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    INPUT_ASSISTANCE_3_3_TITLE_TAG,
    {
        label: '3.3.1 Error Identification',
        href: 'https://www.w3.org/TR/WCAG20/#minimize-error-identified'
    }
];

const errorIdentificationSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelA'] ];

const errorIdentificationPassData: PassData = {
    passPoints: [
        'Is the user aware and notified/alerted that an input error has occurred?',
        'Can the user determine and understand what is the error?',
        'Is the message specific to the error?'
    ]
}

const errorIdentificationUsageType: UsageType = {
    title: 'Error identification',
    benefits: 'Blind, colorblind, cognitive/intellectual disabilities.',
    explanation: 'If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.',
    titleTags: errorIdentificationTags,
    titleSubtags: errorIdentificationSubtags,
    passData: errorIdentificationPassData
}

const labelsOrInstructionsTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    INPUT_ASSISTANCE_3_3_TITLE_TAG,
    {
        label: '3.3.2 Labels or Instructions',
        href: 'https://www.w3.org/TR/WCAG20/#minimize-error-cues'
    }
];

const labelsOrInstructionsSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelA'] ];

const labelsOrInstructionsPassData: PassData = {
    passPoints: [
        'Are instructions or labels that identify the controls in a form placed so that users know what input data is expected?',
        'Are data format instructions specified in the instructions or labels, or are examples provided, especially when there are out of customary formats or specific rules for correct input?',
        'Can the user accomplish the task without undue confusion or navigation?',
        'Can the user determine required versus optional fields, so that an incomplete form cannot be submitted?',
        'Are field labels located in close proximity to the associated field?'
    ]
}

const labelsOrInstructionsUsageType: UsageType = {
    title: 'Labels or instructions',
    benefits: 'Blind, low-vision, motion impairment, cognitive / intellectual disabilities.',
    explanation: 'Labels or instructions are provided when content requires user input.',
    titleTags: labelsOrInstructionsTags,
    titleSubtags: labelsOrInstructionsSubtags,
    passData: labelsOrInstructionsPassData
}

const errorSuggestionTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    INPUT_ASSISTANCE_3_3_TITLE_TAG,
    {
        label: '3.3.3 Error Suggestion',
        href: 'https://www.w3.org/TR/WCAG20/#minimize-error-suggestions'
    }
];

const errorSuggestionSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelAA'] ];

const errorSuggestionPassData: PassData = {
    passPoints: [
        'Does the user receive appropriate suggestions for correction of an input error?',
        'Can the user determine how to correct the error?'
    ]
}

const errorSuggestionUsageType: UsageType = {
    title: 'Error suggestion',
    benefits: 'Blind, colorblind, motion impairment, cognitive/intellectual disabilities.',
    explanation: 'If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.',
    titleTags: errorSuggestionTags,
    titleSubtags: errorSuggestionSubtags,
    passData: errorSuggestionPassData
}

const errorPreventionTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    INPUT_ASSISTANCE_3_3_TITLE_TAG,
    {
        label: '3.3.4 Error Prevention (Legal, Financial, Data)',
        href: 'https://www.w3.org/TR/WCAG20/#minimize-error-reversible'
    }
];

const errorPreventionSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelAA'] ];

const errorPreventionPassData: PassData = {
    passPoints: [
        'Can the user correct a mistake to avoid the serious consequences as the result of an action that cannot be reversed?',
        'Are safeguards provided to avoid mistakes that can have serious consequences?',
        'Can the user review, correct, confirm before submitting or deleting?',
        'Is success feedback provided when data is submitted successfully?'
    ]
}

export const errorPreventionExplanationList: ExplanationListItem[] = [
    {
        label: 'Reversible:',
        description: 'Submissions are reversible.'
    },
    {
        label: 'Checked:',
        description: 'Data entered by the user is checked for input errors and the user is provided an opportunity to correct them.'
    },
    {
        label: 'Confirmed:',
        description: 'A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.'
    }
];

const errorPreventionUsageType: UsageType = {
    title: 'Error prevention (Legal, Financial, Data)',
    benefits: 'All disabilities.',
    explanation: 'For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true:',
    explanationList: errorPreventionExplanationList,
    titleTags: errorPreventionTags,
    titleSubtags: errorPreventionSubtags,
    passData: errorPreventionPassData
}

const nameRoleValueTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    COMPATIBLE_4_1_TITLE_TAG,
    {
        label: '4.1.2 Name, Role, Value',
        href: 'https://www.w3.org/TR/WCAG20/#ensure-compat-rsv'
    }
];

const nameRoleValueSubtags: TitleSubtag[] = [ commonTitleSubtagMap['robust'], commonTitleSubtagMap['levelA'] ];

const nameRoleValuePassData: PassData = {
    passPoints: [
        `If custom controls are created, or interface elements are programmed (in code or script) that have a different role and/or
        function than usual, are additional measures used to ensure that the controls provide important information to Assistive
        Technologies and can be controlled by assistive technologies.`
    ]
}

const nameRoleValueUsageType: UsageType = {
    title: 'Name, role, value',
    benefits: 'All disabilities using Assistive Technologies.',
    explanation: [
        `For all user interface components (including but not limited to: form elements, links and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user
        can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.`,
        '<strong>Note:</strong> This success criterion is primarily for Web authors who develop or script their own user interface components. For example, standard HTML controls already meet this success criterion when used according to specification.'
    ],
    titleTags: nameRoleValueTags,
    titleSubtags: nameRoleValueSubtags,
    passData: nameRoleValuePassData
}

export const LINKS_AND_FORMS_USAGE_TYPES = [
    infoAndRelationshipUsageType,
    onFocusUsageType,
    onInputUsageType,
    errorIdentificationUsageType,
    labelsOrInstructionsUsageType,
    errorSuggestionUsageType,
    errorPreventionUsageType,
    nameRoleValueUsageType
]