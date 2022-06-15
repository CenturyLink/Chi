import { KeyStrokesItem, TitleSubtag, PassData, KeyboardUsageType } from "./domain";

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

const INFO_RELATIONSHIP_SUBTAGS: TitleSubtag[] = [
    {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    {
        label: '1.3 Adaptable',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation'
    },
    {
        label: '1.3.1 Info and Relationships',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic'
    }
];

const INFO_RELATIONSHIP_PASS_DATA: PassData = {
    passDescription: 'Use a screen reader (with your eyes closed):',
    passPoints: [
        'Is all content and functionality available to a screen reader?',
        'Does the user have access to all information and features on the page?',
        'Can the user complete all tasks independently?'
    ]
}

export const INFO_RELATIONSHIP_KEYBOARD_TYPE: KeyboardUsageType = {
    benefits: 'Blind keyboard user',
    explanation: 'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
    titleSubtags: INFO_RELATIONSHIP_SUBTAGS,
    passData: INFO_RELATIONSHIP_PASS_DATA
}
export const KEYBOARD_SUBTAGS: TitleSubtag[] = [
    {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    {
        label: '2.1 Keyboard accessible',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation'
    },
    {
        label: '2.1.1 Keyboard',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable'
    }
];

export const KEYBOARD_PASS_DATA: PassData = {
    passDescription: 'Fully interact with every interactive aspect of a web page using your keyboard alone - do not use a mouse.',
    passPoints: [
        'Can the user access the full functionality of the page or application using a keyboard alone?',
        'Is all information or functionality accessible and operable with a keyboard alone, that would typically be triggered with a mouse?'
    ]
};

export const NO_KEYBOARD_TRAP_SUBTAGS: TitleSubtag[] = [
    {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    {
        label: '2.1 Keyboard accessible',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation'
    },
    {
        label: '2.1.2 No Keyboard Trap',
        href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation-trapping'
    }
]

export const NO_KEYBOARD_TRAP_PASS_DATA: PassData = {
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

export const FOCUS_ORDER_SUBTAGS: TitleSubtag[] = [
    {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    {
        label: '2.4 Navigable',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
    },
    {
        label: '2.4.3 Focus Order',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order'
    }
]

export const FOCUS_ORDER_PASS_DATA: PassData = {
    passDescription: 'Tab through the page using only the keyboard.',
    passPoints: [
        'Is the navigation order logical and intuitive?',
        'Does the tab order make sense?'
    ]
};

export const FOCUS_VISIBLE_SUBTAGS: TitleSubtag[] = [
    {
        label: 'WCAG 2.0 Guideline',
        href: 'https://www.w3.org/TR/WCAG20'
    },
    {
        label: '2.4 Navigable',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms'
    },
    {
        label: '2.4.7 Focus Visible',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible'
    }
]

export const FOCUS_VISIBLE_PASS_DATA: PassData = {
    passDescription: 'Tab through the page using only the keyboard.',
    passPoints: [
        'Can the user always see which element on the page has focus?'
    ]
};
