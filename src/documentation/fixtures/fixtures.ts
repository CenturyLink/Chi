import { ILanguage, ILink } from '~/models/models';

export const FOOTER_LINKS: ILink[] = [
  { href: 'https://www.lumen.com/en-us/about.html', title: 'About Us' },
  {
    href:
      'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html',
    title: 'Accessibility'
  },
  { href: 'https://jobs.lumen.com', title: 'Careers', target: '_blank' },
  { href: 'https://www.lumen.com/en-us/contact-us.html', title: 'Contact Us' },
  { href: '#', class: 'optanon-toggle-display', title: 'Cookie Settings' },
  {
    href: 'https://www.centurylink.com/aboutus/legal.html',
    title: 'Legal',
    target: '_blank'
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html',
    title: 'Legal Notices',
    target: '_blank'
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/privacy-notice.html',
    title: 'Privacy'
  },
  {
    href:
      'https://www.centurylink.com/aboutus/company-information/public-policy.html',
    title: 'Public Policy',
    target: '_blank'
  },
  {
    href: 'https://www.lumen.com/help/en-us/home.html',
    title: 'Support',
    target: '_blank'
  },
  {
    href:
      'https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts',
    title: 'Canadian Ombudsman',
    target: '_blank'
  },
  {
    href:
      'https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3',
    title: 'Gender Pay Gap 2020 (UK)',
    target: '_blank'
  },
  {
    href:
      'https://www.lumen.com/es-ar/about/legal/latam-tariffs-regulatory.html',
    title: 'Legal (Latin America)'
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/de-legal-notices.html',
    title: 'Legal Notices (Germany)'
  },
  {
    href:
      'https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80',
    title: 'Modern Slavery Statement 2020 (UK)',
    target: '_blank'
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html',
    title: 'UK Tax Strategy'
  }
];

export const CENTURY_FOOTER_LINKS: ILink[] = [
  { href: 'https://www.centurylink.com/aboutus.html', title: 'About Us' },
  {
    href:
      'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html',
    title: 'Accessibility'
  },
  { href: 'https://jobs.lumen.com', title: 'Careers', target: '_blank' },
  {
    href: 'https://www.centurylink.com/home/help/contact.html',
    title: 'Contact Us'
  },
  { href: '#', class: 'optanon-toggle-display', title: 'Cookie Settings' },
  {
    href: 'https://www.centurylink.com/aboutus/legal.html',
    title: 'Legal',
    target: '_blank'
  },
  {
    href: 'https://www.centurylink.com/legal/',
    title: 'Legal Notices',
    target: '_blank'
  },
  {
    href: 'https://www.centurylink.com/aboutus/legal/privacy-policy.html',
    title: 'Privacy Policy'
  },
  {
    href: 'https://www.centurylink.com/aboutus/legal/tariff-library.htmll',
    title: 'Tariffs',
    target: '_blank'
  },
  {
    href: 'https://www.centurylink.com/sitemap.html',
    title: 'Site Map',
    target: '_blank'
  }
];

export const FOOTER_LANGUAGE_DROPDOWN_ITEMS: ILanguage[] = [
  { href: '#', name: 'English' },
  { href: '#', name: 'Español' },
  { href: '#', name: 'Português' },
  { href: '#', name: 'Français' },
  { href: '#', name: 'Deutsch' },
  { href: '#', name: '简体中文' },
  { href: '#', name: '日本語' }
];

export const EXTERNAL_CONTENTS: { [key: string]: ILink[] } = {
  contactLinks: [
    {
      href: 'https://www.lumen.com/en-us/contact-us.html',
      title: 'Contact Us'
    },
    {
      href: 'https://www.centurylink.com/business/login/',
      target: '_blank',
      title: 'Sign in / Pay bill'
    },
    { href: 'https://www.lumen.com/help/en-us/home.html', title: 'Support' }
  ],
  socialLinks: [
    {
      href: 'https://www.twitter.com/lumentechco',
      ariaLabel: 'Lumen on Twitter',
      iconName: 'twitter'
    },
    {
      href: 'https://www.linkedin.com/company/lumen-tech',
      ariaLabel: 'Lumen on LinkedIn',
      iconName: 'linkedin'
    },
    {
      href: 'https://www.facebook.com/lumentechnologies',
      ariaLabel: 'Lumen on Facebook',
      iconName: 'facebook'
    },
    {
      href: 'https://www.youtube.com/lumentechnologies',
      ariaLabel: 'Lumen on YouTube',
      iconName: 'youtube'
    }
  ],
  aboutLinks: [
    { href: 'https://www.lumen.com/en-us/about.html', title: 'About Us' },
    { href: 'https://ir.lumen.com', target: '_blank', title: 'Investors' },
    { href: 'https://news.lumen.com', target: '_blank', title: 'Newsroom' },
    {
      href: 'https://www.lumen.com/en-us/about/our-platform.html',
      title: 'Our Platform'
    },
    {
      href: 'https://www.lumen.com/public-sector.html',
      target: '_blank',
      title: 'Public Sector'
    },
    {
      href: 'https://www.centurylink.com/home/',
      target: '_blank',
      title: 'Residential'
    },
    {
      href: 'https://www.lumen.com/wholesale.html',
      target: '_blank',
      title: 'Wholesale'
    }
  ],
  solutionLinks: [
    {
      href: 'https://www.lumen.com/en-us/solutions/adaptive-networking.html',
      title: 'Adaptive Networking'
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/collaboration.html',
      title: 'Collaboration'
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/connected-security.html',
      title: 'Connected Security'
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/edge-computing.html',
      title: 'Edge Computing'
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/hybrid-cloud.html',
      title: 'Hybrid Cloud'
    }
  ],
  shopLinks: [
    {
      href: 'https://www.lumen.com/en-us/communications/hosted-voip.html',
      title: 'Lumen Engage'
    }
  ],
  resourceLinks: [
    {
      href: 'https://www.lumen.com/en-us/about/4th-industrial-revolution.html',
      title: '4th Industrial Revolution'
    },
    { href: 'https://blog.lumen.com', target: '_blank', title: 'Blog' },
    {
      href: 'https://www.lumen.com/help/en-us/portals.html',
      target: '_blank',
      title: 'Customer Portals'
    },
    {
      href: 'https://www.lumen.com/en-us/resources/network-maps.html',
      title: 'Network Maps'
    },
    { href: 'https://www.lumen.com/en-us/partner.html', title: 'Partners' },
    {
      href: 'https://www.lumen.com/help/en-us/home.html',
      target: '_blank',
      title: 'Support'
    }
  ]
};

export const EXTERNAL_CENTURYLINKS_CONTENTS: { [key: string]: ILink[] } = {
  contactLinks: [
    {
      href: 'https://www.centurylink.com/home/help/contact.html',
      title: 'Contact Us'
    },
    {
      href: 'https://signin.centurylink.com/oxauth/consumer/login.htm',
      target: '_blank',
      title: 'Sign in / Pay bill'
    },
    { href: 'https://www.centurylink.com/home/help.html', title: 'Support' }
  ],
  socialLinks: [
    {
      href: 'https://twitter.com/centurylink',
      ariaLabel: 'CenturyLink on Twitter',
      iconName: 'twitter'
    },
    {
      href: 'https://www.linkedin.com/company/lumen-tech',
      ariaLabel: 'CenturyLink on LinkedIn',
      iconName: 'linkedin'
    },
    {
      href: 'https://www.facebook.com/CenturyLink',
      ariaLabel: 'CenturyLink on Facebook',
      iconName: 'facebook'
    },
    {
      href: 'https://www.youtube.com/centurylink',
      ariaLabel: 'CenturyLink on YouTube',
      iconName: 'youtube'
    }
  ],
  aboutLinks: [
    { href: 'https://www.lumen.com/en-us/about.html', title: 'About Lumen' },
    {
      href: 'https://www.centurylink.com/aboutus.html',
      target: '_blank',
      title: 'About CenturyLink'
    },
    {
      href: 'https://ir.lumen.com/',
      target: '_blank',
      title: 'Investor Relations'
    },
    { href: 'https://news.lumen.com/', title: 'Newsroom' }
  ],
  solutionLinks: [
    { href: 'https://www.centurylink.com/', title: 'Residential' },
    {
      href: 'https://www.centurylink.com/small-business/',
      title: 'Small Business'
    },
    { href: 'https://www.lumen.com/en-us/home.html', title: 'Enterprise' }
  ],
  resourceLinks: [
    {
      href: 'https://www.centurylink.com/local.html',
      title: 'CenturyLink in Your Area'
    },
    {
      href: 'http://www.localinternetservice.com/',
      target: '_blank',
      title: 'CenturyLink Retailer'
    }
  ]
};

const customItems = [
  {
    template: 'custom-one',
    label: 'Custom 1'
  },
  {
    template: 'custom-two',
    label: 'Custom 2'
  }
];

const filters = [
  {
    name: 'status',
    type: 'select',
    id: 'myoption1',
    label: 'Selector',
    options: [
      {
        label: 'Active',
        value: 'active'
      },
      {
        label: 'Inactive',
        value: 'inactive'
      }
    ],
    value: 'active'
  },
  {
    name: 'input',
    placeholder: 'Input filter',
    type: 'input',
    value: '',
    id: 'myoption2',
    label: 'Input Filter'
  },
  {
    name: 'checkbox',
    type: 'checkbox',
    checked: false,
    id: 'myoption3',
    label: 'Checkbox'
  },
  {
    name: 'statusAdvanced',
    label: 'Status',
    type: 'select',
    id: 'myoption4',
    options: [
      {
        label: 'Active',
        value: 'active',
        selected: false
      },
      {
        label: 'Inactive',
        value: 'inactive',
        selected: false
      }
    ],
    advanced: true,
    value: 'active'
  },
  {
    name: 'inputAdvanced',
    label: 'Label',
    id: 'myoption5',
    advanced: true
  },
  {
    name: 'textareaAdvanced',
    label: 'textarea',
    id: 'myoption6',
    type: 'textarea',
    advanced: true
  },
  {
    name: 'checkboxAdvanced',
    id: 'myoption7',
    label: 'Advanced Checkbox',
    type: 'checkbox',
    advanced: true
  }
];

const columns = [
  {
    name: 'columnA',
    label: 'Column A'
  },
  {
    name: 'columnB',
    label: 'Column B'
  },
  {
    name: 'columnC',
    label: 'Column C',
    locked: true,
    selected: true
  },
  {
    name: 'columnD',
    label: 'Column D',
    locked: true,
    selected: true
  },
  {
    name: 'columnE',
    label: 'Column E',
    selected: true
  },
  {
    name: 'columnF',
    label: 'Column F',
    selected: true
  },
  {
    name: 'columnG',
    label: 'Column G'
  },
  {
    name: 'columnH',
    label: 'Column H'
  },
  {
    name: 'columnI',
    label: 'Column I'
  },
  {
    name: 'columnJ',
    label: 'Column J'
  }
];

const views = [
  {
    id: 'view-1',
    label: 'View 1',
    columns: columns,
    searchString: 'abc',
    filters: filters
  },
  {
    id: 'view-2',
    label: 'View 2',
    columns: [],
    searchString: 'abcde',
    filters: []
  }
];

export const exampleToolbar = {
  customItemsData: customItems,
  filtersData: filters,
  columnsData: {
    columns: columns
  },
  viewsData: views
};

export const exampleSaveView = {
  title: 'Search Results',
  results: '(1-40 of 78)',
  mode: 'base',
  active: true,
  default: true
};
