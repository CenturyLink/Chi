import { Foundations, KeyAccessibilityConcept } from "./domain"

export const KEY_ACCESSIBILITY_CONCEPTS: KeyAccessibilityConcept[] = [
    {
        title: 'Using the keyboard',
        href: '../using-keyboard',
        descriptionArray: [
            'The website or application must be completely usable through a keyboard. There can be nothing which requires a mouse.  Blind users who',
            'rely on screen readers navigate by using the keyboard. In addition, some users who see the screen perfectly well have impaired motor',
            'skills which make it difficult or impossible to control a mouse.',
        ]
    },
    {
        title: 'Page structure',
        href: '../page-structure',
        descriptionArray: [
            'Well-structured content allows more efficient navigation and processing. Use HTML and WAI-ARIA to improve navigation and orientation',
            'on web pages and in applications. Mark up should include page regions, labeling regions, headings, and content structure.',
        ]
    },
    {
        title: 'Color and sensory',
        href: '../color-sensory',
        descriptionArray: [
            'Enables people with visual impairments or color vision deficiencies to interact with digital experiences in the same way as non-visually-impaired people.',
        ]
    },
    {
        title: 'Images',
        href: '../images',
        descriptionArray: [
            'Images must have text alternatives that describe the information or function represented by them.',
        ]
    },
    {
        title: 'Text',
        href: '../text',
        descriptionArray: [
            'Genuine text is much more flexible than images. Text can be resized without losing clarity, and background and text colors can be modified',
            'to suit the reading preferences of users. Images are more likely to distort and pixelate when resized.',
        ]
    },
    {
        title: 'Links and forms',
        href: '../links-and-forms',
        descriptionArray: [
            'Users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process. If irrelevant',
            'or excessive data is requested, users are more likely to abandon the form.',
        ]
    },
    {
        title: 'Tables',
        href: '../tables',
        descriptionArray: [
            'Accessible tables need HTML structural markup that indicates header cells and data cells and defines their relationship. Assistive technologies',
            'use this information to provide context to users.',
        ]
    },
    {
        title: 'Other',
        href: '../other',
        descriptionArray: [],
        subList: [
            {
                label: 'Time-based Media',
                text: 'Provide alternatives for time-based media.'
            },
            {
                label: 'Distinguishable',
                text: 'Make it easier for users to see and hear content including separating foreground from background.'
            },
            {
                label: 'Enough Time',
                text: 'Provide users enough time to read and use content.'
            },
            {
                label: 'Seizures',
                text: 'Do not design content in a way that is known to cause seizures.'
            }
        ]
    }
];

export const FOUNDATIONS: Foundations[] = [
    {
        title: 'Perceivable',
        description: 'Information and user interface components must be presentable to users in ways the can perceive.',
        ask: 'Can a user get a context to their senses?',
        subList: [
            {
                label: 'Text-alternatives',
                href: 'https://www.w3.org/TR/WCAG20/#text-equiv',
                text: ` Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as 
                    large print, braille, speech, symbols or simpler language.`
            },
            {
                label: 'Time-based media',
                href: 'https://www.w3.org/TR/WCAG20/#media-equiv',
                text: ' Provide alternatives for time-based media.'
            },
            {
                label: 'Adaptable',
                href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation',
                text: ` Create content that can be presented in 
                    different ways (for example simpler layout) without losing information or structure. `
            },
            {
                label: 'Distinguishable',
                href: 'https://www.w3.org/TR/WCAG20/#visual-audio-contrast',
                text: ` Make it easier for users to see and hear 
                    content including separating foreground from background.`
            }
        ]
    },
    {
        title: 'Operable',
        description: 'User interface components and navigation must be operable.',
        ask: 'Can a user successfully use controls, buttons, navigations and other interactive elements?',
        subList: [
            {
                label: 'Keyboard accessible',
                href: 'https://www.w3.org/TR/WCAG20/#keyboard-operation',
                text: ' Make all functionality available from a keyboard.'
            },
            {
                label: 'Enough time',
                href: 'https://www.w3.org/TR/WCAG20/#time-limits',
                text: ' Provide users enough time to read and use content.'
            },
            {
                label: 'Seizures',
                href: 'https://www.w3.org/TR/WCAG20/#seizure',
                text: ` Do not design content in a way that is known to cause seizures.`
            },
            {
                label: 'Navigable',
                href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms',
                text: ` Provide ways to help users navigate, find content, and determine where they are.`
            }
        ]
    },
    {
        title: 'Understandable',
        description: 'Information and the operation of user interface must be understandable.',
        ask: 'Is the presentation and format consistent, predictable in its design and usage patterns, concise, multimodal, and appropriate to the audience in its voice and tone?',
        subList: [
            {
                label: 'Readable',
                href: 'https://www.w3.org/TR/WCAG20/#meaning',
                text: ' Make text content readable and understandable.'
            },
            {
                label: 'Predictable',
                href: 'https://www.w3.org/TR/WCAG20/#consistent-behavior',
                text: ' Make web pages appear and operate in predictable ways.'
            },
            {
                label: 'Input Assistance',
                href: 'https://www.w3.org/TR/WCAG20/#minimize-error',
                text: ' Help users avoid and correct mistakes. '
            }
        ]
    },
    {
        title: 'Robust',
        description: 'Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.',
        ask: 'Is the website compliant with the standards, and does it work with the assistive technologies - including websites, online documents,  multimedia and other information formats?',
        subList: [
            {
                label: 'Compatible',
                href: 'https://www.w3.org/TR/WCAG20/#ensure-compat',
                text: ' Maximize compatibility with current and future user agents, including assistive technologies.'
            }
        ]
    }
]