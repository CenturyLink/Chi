import {  TitleTag, TitleSubtag, PassData, UsageType } from '../common-assets/domain'
import {
    commonTitleSubtagMap,
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    INFO_RELATIONSHIPS_1_3_1_TITLE_TAG
} from '../common-assets/fixtures';

const infoAndRelationshipTags: TitleTag[] = [
    WCAG_2_0_TITLE_TAG,
    ADAPTABLE_1_3_TITLE_TAG,
    INFO_RELATIONSHIPS_1_3_1_TITLE_TAG
];

const infoAndRelationshipSubtags: TitleSubtag[] = [ commonTitleSubtagMap['perceivable'], commonTitleSubtagMap['levelA'] ];

const infoAndRelationshipPassData: PassData = {
    passPoints: [
        'Are corresponding column and row identified, so that Assistive Technologies can programmatically determine the data column and data row relationship for a data cell?',
        'Are columns and rows recognizable in order for the logical relationships to be perceived?',
        'Is the information relationship preserved, even when users cannot see the table or the presentation format is changed?'
    ]
}

const infoAndRelationshipUsageType: UsageType = {
    title: 'Info and relationships',
    benefits: 'Blind disabilities.',
    explanation: [
        'Information, structure, and relationships conveyed through presentation can be programmatically determined or are available in text.',
        `Information is considered tabular when logical relationships among text, numbers, images, or other data exist in two dimensions (vertical and horizontal). 
        These relationships are represented in columns and rows, and the columns and rows must be recognizable in order for the logical relationships to be perceived.`
    ],
    titleTags: infoAndRelationshipTags,
    titleSubtags: infoAndRelationshipSubtags,
    passData: infoAndRelationshipPassData
}

export const TABLES_USAGE_TYPES = [
    infoAndRelationshipUsageType
]