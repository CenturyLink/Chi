import { PageStructurePointer } from "./domain";
import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain';
import { commonTitleSubtagMap, titleTags } from '../common-assets/fixtures';

export const PAGE_STRUCTURE_POINTERS: PageStructurePointer[] = [
    {
        highlighter: 'People with cognitive and learning disabilities',
        description: ` can more easily find and prioritize content on the page.`
    },
    {
        highlighter: 'People using screen readers',
        description: ` can skip to the main content directly and navigate to sections that are important to them.`
    },
    {
        highlighter: 'Keyboard users',
        description: ` can browse pages and their sections more efficiently. Otherwise, users have to press the tab key multiple 
        times to navigate through all links in each section.`
    },
    {
        highlighter: 'People using software that only shows the main content',
        description: ` of a web page, such as people with cognitive disabilities, will receive better 
        results if the page structure is correctly marked up.`
    },
    {
        highlighter: 'People with visual impairments',
        description: `, including people with low vision, have cues that provide orientation on the page and in the content.`
    },
    {
        highlighter: 'Mobile web users',
        description: ` often have access to a so-called "reader" or "reading" mode that will only show the main content of the page if it is correctly marked up.`
    },
    {
        highlighter: 'People using certain browser plugins',
        description: ` can use landmark roles to jump to specific sections on a page.`
    },
    {
        description: `There are additional benefits to a good, accessible page structure, beyond those experienced by people with disabilities. As an example, search engines can use the data
        to better index the content of a page.`
    }
];

const meaningfulSequenceTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.ADAPTABLE_1_3_TITLE_TAG,
    {
        label: '1.3.2 Meaningful Sequence',
        href: 'https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence'
    }
];

const meaningfulSequenceSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const meaningfulSequencePassData: PassData = {
    passPoints: [
        "Does the order of the content have a meaningful sequence, such that changing the sequence does not change the content's meaning?",
        'Can Assistive Technologies programmatically determine at least one sequence of the content that makes sense?',
    ]
}

const meaningfulSequenceUsageType: UsageType = {
    title: 'Meaningful sequence',
    benefits: 'Blind disabilities',
    explanation: 'When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.',
    titleTags: meaningfulSequenceTags,
    titleSubtags: meaningfulSequenceSubtags,
    passData: meaningfulSequencePassData
}

const bypassBlocksTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.NAVIGABLE_2_4_TITLE_TAG,
    {
        label: '2.4.1 Bypass Blocks',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip'
    }
];

const bypassBlocksSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const bypassBlocksPassData: PassData = {
    passPoints: [
        'Can content be navigated sequentially, allowing more direct access to the primary content of the Web page?',
        'If a web page has blocks of text that are repeated within the page (example: navigation, headings), can the blocks of text be "skipped over"?',
        'Can the main content of a web page be reached quickly and easily, with fewer keystrokes?'
    ]
}

const bypassBlocksUsageType: UsageType = {
    title: 'Bypass blocks',
    benefits: 'Keyboard users (typically people with blind, low vision and/or motor/physical disabilities).',
    explanation: 'A mechanism is available to bypass blocks of content that are repeated on multiple Web pages.',
    titleTags: bypassBlocksTags,
    titleSubtags: bypassBlocksSubtags,
    passData: bypassBlocksPassData
}

const pageTitledTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.NAVIGABLE_2_4_TITLE_TAG,
    {
        label: '2.4.2 Page Titled',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-title'
    }
];

const pageTitledSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const pageTitledPassData: PassData = {
    passPoints: [
        'Does the web page have a descriptive title which helps the user to find content and orient themselves?',
        'Do links to another page agree/similar with the new page title, such that the link is not ambiguous?',
    ]
}

const pageTitledUsageType: UsageType = {
    title: 'Page titled',
    benefits: 'Visual, cognitive, mobility disabled users to be able to identify/differentiate content.',
    explanation: 'Web pages have titles that describe topic or purpose.',
    titleTags: pageTitledTags,
    titleSubtags: pageTitledSubtags,
    passData: pageTitledPassData
}

const linkPurposeTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.NAVIGABLE_2_4_TITLE_TAG,
    {
        label: '2.4.4 Link Purpose (In Context)',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs'
    }
];

const linkPurposeSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelA'] ];

const linkPurposePassData: PassData = {
    passPoints: [
        'Can the user understand the purpose of the link (without needing additional context) in order to decide whether to follow the link?',
        'Is meaningful link text provided?',
        'Can the user arrive on a link and find out more about the link without losing their place on the page?',
        'Does the context/description of the link precede the link?'
    ]
}

const linkPurposeUsageType: UsageType = {
    title: 'Link Purpose (in context)',
    benefits: 'Visual, cognitive limitations, motion impairment disabilities.',
    explanation: `The purpose of each link can be determined from the link text alone or from the link text together with its
     programmatically determined link context, except where the purpose of the link would be ambiguous to users in general.`,
    titleTags: linkPurposeTags,
    titleSubtags: linkPurposeSubtags,
    passData: linkPurposePassData
}

const multipleWaysTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.NAVIGABLE_2_4_TITLE_TAG,
    {
        label: '2.4.5 Multiple Ways',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc'
    }
];

const multipleWaysSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelAA'] ];

const multipleWaysPassData: PassData = {
    passPoints: [
        'Can the user locate content in a manner/technique that best meets their needs (in order to find information faster)?',
    ]
}

const multipleWaysUsageType: UsageType = {
    title: 'Multiple ways',
    benefits: 'Visual, cognitive limitations disabilities.',
    explanation: `More than one way is available to locate a Web page within a set of Web pages except where the Web Page is the
    result of, or a step in, a process`,
    titleTags: multipleWaysTags,
    titleSubtags: multipleWaysSubtags,
    passData: multipleWaysPassData
}

const headingsAndLabelsTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.NAVIGABLE_2_4_TITLE_TAG,
    {
        label: '2.4.6 Headings and Labels',
        href: 'https://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive'
    }
];

const headingsAndLabelsSubtags: TitleSubtag[] = [ commonTitleSubtagMap['operable'], commonTitleSubtagMap['levelAA'] ];

const headingsAndLabelsPassData: PassData = {
    passPoints: [
        'Can the user understand what information is contained in Web pages and how that information is organized?',
        'Can the user find the information they seek more easily, and can the user understand the relationships between different parts of the content more easily?',
        'Does the label description help the user identify specific components within the content?'
    ]
}

const headingsAndLabelsUsageType: UsageType = {
    title: 'Headings and labels',
    benefits: 'Visual, cognitive limitations, motion impairment disabilities.',
    explanation: 'Headings and labels describe topic or purpose.',
    titleTags: headingsAndLabelsTags,
    titleSubtags: headingsAndLabelsSubtags,
    passData: headingsAndLabelsPassData
}

const languageOfPageTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.READABLE_3_1_TITLE_TAG,
    {
        label: '3.1.1 Language of Page',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-doc-lang-id'
    }
];

const languageOfPageSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelA'] ];

const languageOfPagePassData: PassData = {
    passPoints: [
        'Is information provided in the Web page that user agents need to present text and other linguistic content correctly?',
        'Can a screen reader load the correct pronunciation rules?',
        'Can visual browsers display characters and scripts correctly?',
        'Can media players show captions correctly?'
    ]
}

const languageOfPageUsageType: UsageType = {
    title: 'Language of the page',
    benefits: ' All users.',
    explanation: [
        'The default human language of each Web page can be programmatically determined.',
        `Both Assistive Technologies and conventional user agents can render text more accurately when the language of the 
        Web page is identified.  As a result, users with disabilities will be better able to understand the content.`
    ],
    titleTags: languageOfPageTags,
    titleSubtags: languageOfPageSubtags,
    passData: languageOfPagePassData
}

const languageOfPartsTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.READABLE_3_1_TITLE_TAG,
    {
        label: '3.1.2 Language of Parts',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#meaning-other-lang-id'
    }
];

const languageOfPartsSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelAA'] ];

const languageOfPartsPassData: PassData = {
    passPoints: [
        'Are single words considered part of the language of the surrounding text unless it is clear that a change in language was intended?',
    ]
}

const languageOfPartsUsageType: UsageType = {
    title: 'Language of parts',
    benefits: 'All users.',
    explanation: [
        `The human language of each passage or phrase in the content can be programmatically determined except for 
        proper names, technical terms, words of indeterminate language, and words or phrases that have become part 
        of the vernacular of the immediately surrounding text.`,
        'Ensure that content is presented according to the presentation and pronunciate rules of a language (if specified).'
    ],
    titleTags: languageOfPartsTags,
    titleSubtags: languageOfPartsSubtags,
    passData: languageOfPartsPassData
}

const parsingTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.COMPATIBLE_4_1_TITLE_TAG,
    {
        label: '4.1.1 Parsing',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#ensure-compat-parses'
    }
];

const parsingSubtags: TitleSubtag[] = [ commonTitleSubtagMap['robust'], commonTitleSubtagMap['levelA'] ];

const parsingPassData: PassData = {
    passPoints: [
        'Do Web pages have complete start and end tags that are nested according to specification?',
    ]
}

const parsingUsageType: UsageType = {
    title: 'Info and Relationships',
    benefits: 'All users of Assistive Technologies.',
    explanation: [
        `In content implemented using markup languages, elements have complete start and end tags, elements are nested
        according to their specifications, elements do not contain duplicate attributes, and any IDs are unique, except
        where the specifications allow these features.`,
        'Ensure that Assistive Technologies can parse the content accurately and without crashing.'
    ],
    titleTags: parsingTags,
    titleSubtags: parsingSubtags,
    passData: parsingPassData
}

const consistentNavigationTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.PREDICTABLE_3_2_TITLE_TAG,
    {
        label: '3.2.3 Consistent Navigation',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-locations'
    }
];

const consistentNavigationSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelAA'] ];

const consistentNavigationPassData: PassData = {
    passPoints: [
        'Is repeated content and layout presented consistently within a set of Web pages?',
        'Can specific information or functionality be located more than once?',
        'Can the user predict the location of the content they are looking for, and find it more quickly when encountered again?'
    ]
}

const consistentNavigationUsageType: UsageType = {
    title: 'Consistent navigation',
    benefits: 'Blind, low-vision, cognitive/intellectual disabilities.',
    explanation: `Navigational mechanisms that are repeated on multiple Web pages within a set of Web pages occur in the same 
    relative order each time they are repeated, unless a change is initiated by the user.`,
    titleTags: consistentNavigationTags,
    titleSubtags: consistentNavigationSubtags,
    passData: consistentNavigationPassData
}

const consistentIdentificationTags: TitleTag[] = [
    titleTags.WCAG_2_0_TITLE_TAG,
    titleTags.PREDICTABLE_3_2_TITLE_TAG,
    {
        label: '3.2.4 Consistent Identification',
        href: 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#consistent-behavior-consistent-functionality'
    }
];

const consistentIdentificationSubtags: TitleSubtag[] = [ commonTitleSubtagMap['understandable'], commonTitleSubtagMap['levelAA'] ];

const consistentIdentificationPassData: PassData = {
    passPoints: [
        'Are functional components that appear repeatedly within a set of Web pages consistently identified, so that familiar functions are predictable on different Web pages?',
        'Are labels, icons/non-text items and their text alternatives, link text, and components consistent - within a page, and also if repeated on more than one page?'
    ]
}

const consistentIdentificationUsageType: UsageType = {
    title: 'Consistent identification',
    benefits: 'Blind, cognitive/intellectual disabilities.',
    explanation: 'Components that have the same functionality within a set of Web pages are identified consistently.',
    titleTags: consistentIdentificationTags,
    titleSubtags: consistentIdentificationSubtags,
    passData: consistentIdentificationPassData
}

export const PAGE_STRUCTURE_USAGE_TYPES = [
    meaningfulSequenceUsageType,
    bypassBlocksUsageType,
    pageTitledUsageType,
    linkPurposeUsageType,
    multipleWaysUsageType,
    headingsAndLabelsUsageType,
    languageOfPageUsageType,
    languageOfPartsUsageType,
    parsingUsageType,
    consistentNavigationUsageType,
    consistentIdentificationUsageType
]