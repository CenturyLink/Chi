import { KeyStrokesItem } from "./domain";
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import { commonTitleSubtagMap, WCAG_2_0_TITLE_TAG, ADAPTABLE_1_3_TITLE_TAG } from '../common-assets/fixtures';

export const KEY_STROKES: KeyStrokesItem[] = [
    {
        firstKey: 'Tab',
        secondKey: 'Shift+Tab',
        textBetweenKeys: ' and ',
        description: ' key(s) to navigate towards and backwards through links and form controls.'
    },
    {
        firstKey: 'Enter',
        secondKey: 'Spacebar',
        textBetweenKeys: ' (and sometimes ',
        description: ') to select an element. '
    },
    {
        firstKey: 'Arrow',
        description: ' keys are sometimes used for other navigation.'
    },
    {
        firstKey: 'ESC',
        description: ' to close dialog boxes.',
    },
    {
        firstKey: 'Home/End',
        description: ' goes to beginning or end.'
    }
];

const infoRelationshipTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    {
        label: '1.3.1 Info and Relationships',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic'
    }
];

const infoRelationshipSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const infoRelationshipPassData: PassData = {
    passDescription: 'Use a screen reader (with your eyes closed):',
    passPoints: [
        'Is all content and functionality available to a screen reader?',
        'Does the user have access to all information and features on the page?',
        'Can the user complete all tasks independently?'
    ]
}

const infoRelationshipUsageType: UsageType = {
    title: 'Info and Relationships',
    benefits: 'Blind keyboard user',
    explanation: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
    titleTags: infoRelationshipTags,
    titleSubtags: infoRelationshipSubtags,
    passData: infoRelationshipPassData
}

const keyboardTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    {
        label: '2.1 Keyboard accessible',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation'
    },
    {
        label: '2.1.1 Keyboard',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable'
    }
];

const keyboardSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const keyboardPassData: PassData = {
    passDescription: 'Fully interact with every interactive aspect of a web page using your keyboard alone - do not use a mouse.',
    passPoints: [
        'Can the user access the full functionality of the page or application using a keyboard alone?',
        'Is all information or functionality accessible and operable with a keyboard alone, that would typically be triggered with a mouse?'
    ]
};

const keyboardUsageType: UsageType = {
    title: 'Keyboard',
    benefits: 'Keyboard users (typically people with visual and/or motor/physical disabilities).',
    explanation: `All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes,
    except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.`,
    titleTags: keyboardTags,
    titleSubtags: keyboardSubtags,
    passData: keyboardPassData
}

const noKeyboardTrapTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    {
        label: '2.1 Keyboard accessible',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation'
    },
    {
        label: '2.1.2 No Keyboard Trap',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation-trapping'
    }
];

const noKeyboardTrapSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const noKeyboardTrapPassData: PassData = {
    passPoints: [
        'Can the keyboard user be trapped in a subset of the content that can only be exited using a mouse or pointing device?',
        'Is there a keyboard mechanism to return focus to the parent window?',
        `Can the keyboard function for advancing focus within content (commonly the tab key) exit the subset of the content after reaching 
        the final navigation location?`,
        `Is help information available for the Web page documents on how to move focus from the content that is not accessibility-supported
        to the accessibility-supported content via the keyboard?`,
        'Can the help information be accessed via the keyboard?'
    ]
};

const noKeyboardTrapUsageType: UsageType = {
    title: 'No keyboard trap',
    benefits: 'Keyboard users (typically people with visual and/or motor/physical disabilities).',
    explanation: `If keyboard focus can be moved to a component of the page (such as a plugin) using a keyboard interface, then focus can be moved away
    from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard 
    exit methods, the user is advised of the method for moving focus away.`,
    titleTags: noKeyboardTrapTags,
    titleSubtags: noKeyboardTrapSubtags,
    passData: noKeyboardTrapPassData
}

const focusOrderTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    {
        label: '2.4 Navigable',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
    },
    {
        label: '2.4.3 Focus Order',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order'
    }
];

const focusOrderSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const focusOrderPassData: PassData = {
    passDescription: 'Tab through the page using only the keyboard.',
    passPoints: [
        'Is the navigation order logical and intuitive?',
        'Does the tab order make sense?'
    ]
};

const focusOrderUsageType: UsageType = {
    title: 'Focus order',
    benefits: 'Keyboard users (typically people with visual and/or motor/physical disabilities).',
    explanation: `If a Web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive
    focus in an order that preserves meaning and operability.`,
    titleTags: focusOrderTags,
    titleSubtags: focusOrderSubtags,
    passData: focusOrderPassData
}

const focusVisibleTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    {
        label: '2.4 Navigable',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
    },
    {
        label: '2.4.7 Focus Visible',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible'
    }
];

const focusVisibleSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelAA'] ];

const focusVisiblePassData: PassData = {
    passDescription: 'Tab through the page using only the keyboard.',
    passPoints: [
        'Can the user always see which element on the page has focus?'
    ]
};

const focusVisibleUsageType: UsageType = {
    title: 'Focus visible',
    benefits: 'Keyboard users (typically people with visual and/or motor/physical disabilities).',
    explanation: 'Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.',
    titleTags: focusVisibleTags,
    titleSubtags: focusVisibleSubtags,
    passData: focusVisiblePassData
};

export const KEYBOARD_USAGE_TYPES = [
    infoRelationshipUsageType,
    keyboardUsageType,
    noKeyboardTrapUsageType,
    focusOrderUsageType,
    focusVisibleUsageType
]