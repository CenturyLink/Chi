import {
  type ILanguage,
  type ILink,
  type IThemes,
  type IZIndex,
  type IBreakpoints,
  type ThemesColor,
  type ITableHead,
} from '~/models/models';
import { COLORS } from '~/constants/constants';

export const FOOTER_LINKS: ILink[] = [
  { href: 'https://www.lumen.com/en-us/about.html', title: 'About Us' },
  {
    href: 'https://www.lumen.com/en-us/about/accessibility.html',
    title: 'Accessibility',
  },
  {
    href: 'https://www.centurylinkbusinessreferral.com/#!/home',
    title: 'Business Referral Program',
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts.html',
    title: 'Canadian Ombudsman',
    target: '_blank',
  },
  { href: 'https://jobs.lumen.com', title: 'Careers', target: '_blank' },
  { href: 'https://www.lumen.com/en-us/contact-us.html', title: 'Contact Us' },
  { href: '#', class: 'optanon-toggle-display', title: 'Cookie Settings' },
  {
    href: 'https://www.lumen.com/en-us/about/governance/documentation.html',
    title: 'Governance',
    target: '_blank',
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal.html',
    title: 'Legal',
    target: '_blank',
  },
  {
    href: 'https://www.lumen.com/en-us/about/legal/privacy-center.html',
    title: 'Privacy',
  },
  {
    href: 'https://www.lumen.com/en-us/about/public-policy.html',
    title: 'Public Policy',
    target: '_blank',
  },
  {
    href: 'https://www.lumen.com/help/en-us/home.html',
    title: 'Support',
    target: '_blank',
  },
];

export const CENTURY_FOOTER_LINKS: ILink[] = [
  { href: 'https://www.centurylink.com/aboutus.html', title: 'About Us' },
  {
    href: 'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html',
    title: 'Accessibility',
  },
  { href: 'https://jobs.lumen.com', title: 'Careers', target: '_blank' },
  {
    href: 'https://www.centurylink.com/home/help/contact.html',
    title: 'Contact Us',
  },
  { href: '#', class: 'optanon-toggle-display', title: 'Cookie Settings' },
  {
    href: 'https://www.centurylink.com/aboutus/legal.html',
    title: 'Legal',
    target: '_blank',
  },
  {
    href: 'https://www.centurylink.com/legal/',
    title: 'Legal Notices',
    target: '_blank',
  },
  {
    href: 'https://www.centurylink.com/aboutus/legal/privacy-policy.html',
    title: 'Privacy Policy',
  },
  {
    href: 'https://www.centurylink.com/aboutus/legal/tariff-library.htmll',
    title: 'Tariffs',
    target: '_blank',
  },
  {
    href: 'https://www.centurylink.com/sitemap.html',
    title: 'Site Map',
    target: '_blank',
  },
];

export const FOOTER_LANGUAGE_DROPDOWN_ITEMS: ILanguage[] = [
  { href: '#', name: 'United States' },
  { href: '#', name: 'Australia' },
  { href: '#', name: 'Hong Kong' },
  { href: '#', name: 'India' },
  { href: '#', name: 'Japan' },
  { href: '#', name: 'Singapore' },
];

export const EXTERNAL_CONTENTS: { [key: string]: ILink[] } = {
  contactLinks: [
    {
      href: 'https://www.lumen.com/en-us/contact-us.html',
      title: 'Contact Us',
    },
    {
      href: 'https://www.lumen.com/login/',
      target: '_blank',
      title: 'Sign in / Pay bill',
    },
    { href: 'https://www.lumen.com/help/en-us/home.html', title: 'Support' },
  ],
  socialLinks: [
    {
      href: 'https://www.x.com/lumentechco',
      ariaLabel: 'Lumen on X',
      iconName: 'x'
    },
    {
      href: 'https://www.linkedin.com/company/lumen-tech',
      ariaLabel: 'Lumen on LinkedIn',
      iconName: 'linkedin',
    },
    {
      href: 'https://www.facebook.com/lumentechnologies',
      ariaLabel: 'Lumen on Facebook',
      iconName: 'facebook',
    },
    {
      href: 'https://www.youtube.com/lumentechnologies',
      ariaLabel: 'Lumen on YouTube',
      iconName: 'youtube',
    },
  ],
  aboutLinks: [
    { href: 'https://www.lumen.com/en-us/about.html', title: 'About Us' },
    { href: 'https://jobs.lumen.com/', title: 'Careers' },
    { href: 'https://ir.lumen.com', target: '_blank', title: 'Investors' },
    { href: 'https://news.lumen.com', target: '_blank', title: 'Newsroom' },
    {
      href: 'https://www.lumen.com/public-sector.html',
      title: 'Public Sector',
    },
    {
      href: 'https://www.centurylink.com/',
      target: '_blank',
      title: 'CenturyLink',
    },
    {
      href: 'http://www.quantumfiber.com/',
      target: '_blank',
      title: 'Quantum Fiber',
    },
    {
      href: 'https://www.lumen.com/en-us/about/corporate-responsibility.html',
      target: '_blank',
      title: 'Sustainability',
    },
    {
      href: 'https://www.lumen.com/en-us/about/legal/trust-center.html',
      target: '_blank',
      title: 'Trust Center',
    },
    {
      href: 'https://www.lumen.com/wholesale.html',
      target: '_blank',
      title: 'Wholesale',
    },
  ],
  solutionLinks: [
    {
      href: 'https://www.lumen.com/en-us/solutions/networking.html',
      title: 'Networking',
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/collaboration.html',
      title: 'Collaboration',
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/connected-security.html',
      title: 'Security',
    },
    {
      href: 'https://www.lumen.com/en-us/solutions/edge-cloud.html',
      title: 'Edge Cloud',
    },
  ],
  shopLinks: [
    {
      href: 'https://www.lumen.com/en-us/marketplace.html',
      title: 'Marketplace',
    },
  ],
  resourceLinks: [
    { href: 'https://blog.lumen.com', target: '_blank', title: 'Blog' },
    {
      href: 'https://www.lumen.com/help/en-us/portals.html',
      target: '_blank',
      title: 'Customer Portals',
    },
    {
      href: 'https://www.lumen.com/en-us/resources/customer-success-stories.html',
      target: '_blank',
      title: 'Customer Success Stories',
    },
    {
      href: 'https://www.lumen.com/en-us/digital-inclusion.html',
      target: '_blank',
      title: 'Digital Inclusion',
    },
    {
      href: 'https://www.lumen.com/en-us/resources/network-maps.html',
      title: 'Network Maps',
    },
    { href: 'https://www.lumen.com/en-us/channel-partner-program.html', 
      title: 'Partners' 
    },
    {
      href: 'https://www.lumen.com/en-us/about/doing-business-with-lumen.html',
      title: 'Suppliers',
    },
    {
      href: 'https://www.lumen.com/help/en-us/home.html',
      target: '_blank',
      title: 'Support',
    },
  ],
};

export const EXTERNAL_CENTURYLINKS_CONTENTS: { [key: string]: ILink[] } = {
  contactLinks: [
    {
      href: 'https://www.centurylink.com/home/help/contact.html',
      title: 'Contact Us',
    },
    {
      href: 'https://signin.centurylink.com/oxauth/consumer/login.htm',
      target: '_blank',
      title: 'Sign in / Pay bill',
    },
    { href: 'https://www.centurylink.com/home/help.html', title: 'Support' },
  ],
  socialLinks: [
    {
      href: 'https://x.com/centurylink',
      ariaLabel: 'CenturyLink on X',
      iconName: 'x'
    },
    {
      href: 'https://www.linkedin.com/company/lumen-tech',
      ariaLabel: 'CenturyLink on LinkedIn',
      iconName: 'linkedin',
    },
    {
      href: 'https://www.facebook.com/CenturyLink',
      ariaLabel: 'CenturyLink on Facebook',
      iconName: 'facebook',
    },
    {
      href: 'https://www.youtube.com/centurylink',
      ariaLabel: 'CenturyLink on YouTube',
      iconName: 'youtube',
    },
  ],
  aboutLinks: [
    { href: 'https://www.lumen.com/en-us/about.html', title: 'About Lumen' },
    {
      href: 'https://www.centurylink.com/aboutus.html',
      target: '_blank',
      title: 'About CenturyLink',
    },
    {
      href: 'https://ir.lumen.com/',
      target: '_blank',
      title: 'Investor Relations',
    },
    { href: 'https://news.lumen.com/', title: 'Newsroom' },
  ],
  solutionLinks: [
    { href: 'https://www.centurylink.com/', title: 'Residential' },
    {
      href: 'https://www.centurylink.com/small-business/',
      title: 'Small Business',
    },
    { href: 'https://www.lumen.com/en-us/home.html', title: 'Enterprise' },
  ],
  resourceLinks: [
    {
      href: 'https://www.centurylink.com/local.html',
      title: 'CenturyLink in Your Area',
    },
    {
      href: 'http://www.localinternetservice.com/',
      target: '_blank',
      title: 'CenturyLink Retailer',
    },
  ],
};

const customItems = [
  {
    template: 'custom-one',
    label: 'Custom 1',
  },
  {
    template: 'custom-two',
    label: 'Custom 2',
  },
];

const filters = [
  {
    name: 'status',
    type: 'select',
    id: 'myoption1',
    options: [
      {
        label: 'Pending Active',
        value: 'pending',
        selected: true,
      },
      {
        label: 'Active',
        value: 'active',
        selected: false,
      },
      {
        label: 'Inactive',
        value: 'inactive',
        selected: false,
      },
    ],
    advanced: false,
    value: 'pending',
  },
  {
    name: 'statusAdvanced',
    label: 'Status',
    type: 'select',
    id: 'myoption1',
    options: [
      {
        label: 'Pending Active',
        value: 'pending',
        selected: false,
      },
      {
        label: 'Active',
        value: 'active',
        selected: false,
      },
      {
        label: 'Inactive',
        value: 'inactive',
        selected: false,
      },
    ],
    advanced: true,
    value: 'pending',
  },
  {
    name: 'inputAdvanced',
    label: 'Label',
    id: 'myoption2',
    advanced: true,
  },
  {
    name: 'textareaAdvanced',
    label: 'textarea',
    id: 'myoption3',
    type: 'textarea',
    advanced: true,
  },
  {
    name: 'checkboxAdvanced',
    id: 'myoption4',
    label: 'Advanced Checkbox',
    type: 'checkbox',
    advanced: true,
  },
];

const columns = [
  {
    name: 'columnA',
    label: 'Column A',
  },
  {
    name: 'columnB',
    label: 'Column B',
  },
  {
    name: 'columnC',
    label: 'Column C',
    locked: true,
    selected: true,
  },
  {
    name: 'columnD',
    label: 'Column D',
    locked: true,
    selected: true,
  },
  {
    name: 'columnE',
    label: 'Column E',
    selected: true,
  },
  {
    name: 'columnF',
    label: 'Column F',
    selected: true,
  },
  {
    name: 'columnG',
    label: 'Column G',
  },
  {
    name: 'columnH',
    label: 'Column H',
  },
  {
    name: 'columnI',
    label: 'Column I',
  },
  {
    name: 'columnJ',
    label: 'Column J',
  },
];

const views = [
  {
    id: 'view-1',
    label: 'View 1',
    columns: columns,
    searchString: 'abc',
    filters: filters,
  },
  {
    id: 'view-2',
    label: 'View 2',
    columns: [],
    searchString: 'abcde',
    filters: [],
  },
];

export const exampleToolbar = {
  customItemsData: customItems,
  filtersData: { filters },
  columnsData: {
    columns: columns,
  },
  viewsData: views,
};

export const exampleSaveView = {
  title: 'Search Results',
  results: '(1-40 of 78)',
  mode: 'base',
  active: true,
  default: true,
};

export const svgLogos: IThemes = {
  lumen: `<svg viewBox="0 0 145 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 1.4332C0 .61497895.65465263.00138947 1.55466316.00138947c.94108421 0 1.55466316.61358948 1.55466316 1.43181053v14.1059263c0 .4910737.2046421.7364421.7364421.7364421H17.0602316c1.0639368 0 1.6775158.4910737 1.6775158 1.4318105 0 .9821369-.613579 1.4321474-1.6775158 1.4321474H1.67751579C.57286316 19.1395263 0 18.6895263 0 17.7073789V1.4332zm26.4292842 10.5716737c0 5.2775789 2.8639579 4.639021 8.0597474 4.639021 5.1957895 0 8.0597473.7203579 8.0597473-4.6390105V1.43330526c0-.81822105.6135895-1.4321579 1.5546632-1.4321579.9407368 0 1.5546632.61392632 1.5546632 1.4321579V12.2913053c0 6.5868736-4.0914737 7.3390526-11.1690737 7.3390526-7.0779474 0-11.1690737-.752179-11.1690737-7.3390526V1.43329474c0-.81822106.6135895-1.43214737 1.5546632-1.43214737.9410736 0 1.5546631.61391579 1.5546631 1.43214737V12.0048737zm49.5442421-7.21691581h-.1228631l-7.5276106 7.13509471c-.7579894.6447263-1.1114947 1.1864421-1.8003684 1.1864421-.5482316 0-1.0783053-.5194736-1.7589684-1.1864421l-7.5690105-7.17615786h-.163579V17.9531579c0 .8589474-.6135895 1.4318105-1.5546631 1.4318105-.9000106 0-1.5546632-.5728631-1.5546632-1.4318105V2.12864211C53.9218.9422 55.0165368.00111579 55.9264737.00111579c.9102842 0 1.6823158.54822105 2.7003895 1.59572632l7.9368947 7.78974736h.0407263l7.9372316-7.83081052C75.5772526.60853685 76.0488105.00111579 77.1189053.00111579c1.1296421 0 1.9639473.94108421 1.9639473 2.12752632V17.9531474c0 .8589473-.6135789 1.431821-1.5546631 1.431821-.9000106 0-1.5546632-.5728737-1.5546632-1.431821V4.78795789zm11.4553369 3.53818948l13.3373048.0376421c1.104653 0 1.677516.5318 1.677516 1.43181053 0 .9410737-.572863 1.4321474-1.677516 1.4321474H90.5381789v4.3115158c0 .4907368.2046422.7364421.7364422.7364421h13.5419679c1.06359 0 1.636453.4907263 1.636453 1.4318105 0 .9818-.572863 1.4318105-1.636453 1.4318105H89.1063789c-1.1046526 0-1.6775157-.4500105-1.6775157-1.4318105V8.32614737zm48.6445048 9.21771583c0 1.0636-.816863 1.8411052-1.88181 1.8411052-1.055716 0-1.762726-.8117263-2.782179-1.6775158L116.190242 4.62438947V17.9531579c0 .8182316-.613926 1.4318105-1.554663 1.4318105-.900347 0-1.554663-.6135895-1.554663-1.4318105V2.12864211c0-1.39108421.731305-2.12752632 1.840747-2.12752632 1.011242 0 1.600526.66628421 2.659316 1.55466316l15.383053 12.91983155V1.43327368c0-.81822105.613589-1.4321579 1.554663-1.4321579.900021 0 1.554673.61392632 1.554673 1.4321579V17.5438632zm2.167569-14.93333688v-.01413685c0-1.34223158 1.088147-2.47245263 2.458484-2.47245263 1.384842 0 2.458484 1.11607369 2.458484 2.45830527v.01414736c0 1.34223158-1.087789 2.47262106-2.458484 2.47262106-1.384495 0-2.458484-1.11625264-2.458484-2.45848421zm4.6344-.01413685v-.01414736c0-1.20094737-.932537-2.18989474-2.175916-2.18989474-1.229232 0-2.175916 1.00309474-2.175916 2.2040421v.01413685c0 1.20094736.932537 2.19006315 2.175916 2.19006315 1.229242 0 2.175916-1.00325263 2.175916-2.2042zm-3.136748-1.2998h1.130569c.550968 0 .960821.26841053.960821.79126316 0 .40968421-.240463.6639579-.57959.7628l.664127.94668421h-.579253l-.59341-.86181052h-.522674v.86181052h-.48059V1.29658947zm1.088137 1.24338948c.325 0 .508537-.16956842.508537-.40986316 0-.26841053-.183537-.40968421-.508537-.40968421h-.607537v.81954737h.607537z" fill="#000"/><path d="M106.330232 1.71966316c0-.94108421-.572874-1.47287369-1.677516-1.47287369H89.1060842c-1.1043263 0-1.6771789.53178948-1.6771789 1.47287369v1.42565263l17.2648737-.0345579c1.063579-.00001052 1.636453-.49107368 1.636453-1.39109473" fill="#0C9ED9"/></svg>`,
  centurylink: `<svg viewBox="0 0 204 41" xmlns="http://www.w3.org/2000/svg" data-brand-type="black" aria-hidden="true">
            <path fill="#242526" d="M18.634.03c-2.406.214-4.692.841-6.791 1.817l6.791 11.758V.03"></path>
            <path fill="#242526" d="M8.639 3.7C6.712 5.055 5.028 6.744 3.67 8.669l11.758 6.786L8.639 3.7"></path>
            <path fill="#242526" d="M1.814 11.873C.844 13.967.216 16.257 0 18.662h13.578L1.814 11.873M0 22.363c.218 2.412.844 4.696 1.814 6.787l11.764-6.787H0"></path>
            <path fill="#242526" d="M3.67 32.358a20.6867 20.6867 0 0 0 4.969 4.971l6.789-11.759L3.67 32.358m8.173 6.823c2.099.973 4.385 1.604 6.791 1.819V27.422l-6.791 11.759"></path>
            <path fill="#242526" d="M22.335 41c2.407-.215 4.69-.846 6.789-1.819l-6.789-11.759V41"></path>
            <path fill="#242526" d="M32.33 37.329a20.6729 20.6729 0 0 0 4.97-4.971L25.542 25.57l6.788 11.759"></path>
            <path fill="#242526" d="M27.393 22.363l11.761 6.787c.972-2.091 1.599-4.375 1.815-6.787H27.393m13.576-3.701c-.218-2.405-.845-4.695-1.815-6.789l-11.761 6.789h13.576"></path>
            <path fill="#242526" d="M32.331 3.7l-6.787 11.755L37.3 8.669c-1.358-1.925-3.042-3.614-4.969-4.969zm-3.207-1.853C27.025.871 24.742.245 22.335.03v13.575l6.789-11.758"></path>
            <path fill="#242526" d="M188.016 22.141l.05.046 3.87-5.513h4.365l-4.523 5.75 4.81 7.525h-4.573l-3.949-7.185-.05.052v7.133h-3.919V11.074h3.919v11.067m-16.371-3.797l.051.08c.814-1.205 2.041-1.987 4.028-1.987 1.305 0 3.843.963 4.312 2.876.21.809.265 1.648.265 2.092v8.544h-3.924v-7.89c-.023-1.414-.419-3.005-2.353-3.005-1.23 0-2.3 1.097-2.353 3.005v7.89h-3.92v-13.12h3.894v1.515M160.068 29.95h3.923V16.829h-3.923V29.95zm-.13-15.501h4.184v-3.375h-4.184v3.375zm-14.56 15.5V11.074h4.054v15.742h8.181v3.133h-12.235m-9.572 5.025h-2.541l1.989-5.074-5.462-13.071h2.766l4.107 10.353 4.189-10.353h2.663l-7.711 18.145m-12.105-5.025h-2.484v-13.12h2.484v2.533h.055c.366-1.802 2.035-2.717 3.841-2.717.313 0 .577.029.861.029v2.351c-.338-.128-.731-.128-1.07-.128-3.139.102-3.687 1.775-3.687 4.548v6.504m-8.285-13.12h2.481v13.12h-2.428V28.02h-.053c-.994 1.642-2.668 2.323-4.497 2.323-2.746 0-4.316-2.086-4.316-4.731v-8.783h2.486v7.763c0 2.277.521 3.948 2.901 3.948 1.019 0 2.403-.52 2.931-1.883.468-1.225.495-2.767.495-3.083v-6.745m-16.434-.004v-2.792l2.484-.786v3.578h3.033v1.802h-3.033v8.426c0 .937.732 1.382 1.623 1.382.39 0 .912-.051 1.303-.154v1.907c-.571.029-1.124.155-1.694.155-.602 0-1.076-.024-1.674-.126-.393-.079-1.05-.287-1.464-.865-.447-.627-.578-.678-.578-2.43v-8.295h-2.246v-1.802h2.246m-12.923 1.938h.051c.839-1.649 2.668-2.326 3.974-2.326.915 0 4.971.237 4.971 4.446v9.066h-2.486v-8.26c0-2.17-.913-3.345-3.01-3.345 0 0-1.357-.079-2.403.969-.365.362-1.046.942-1.046 3.503v7.133h-2.485v-13.12h2.434v1.934m-7.591 3.378c.051-2.202-.945-3.902-3.349-3.902-2.066 0-3.294 1.751-3.294 3.902h6.643zm-6.643 1.719c-.181 2.304.761 4.68 3.294 4.68 1.935 0 2.901-.755 3.193-2.664h2.613c-.394 2.979-2.692 4.467-5.83 4.467-4.209 0-5.882-2.976-5.882-6.846 0-3.843 1.932-7.06 6.089-7.06 3.923.077 5.778 2.562 5.778 6.192v1.231h-9.255zm-7.262-7.921c-.131-1.806-2.066-3.009-4.001-3.009-4.658 0-5.521 4.263-5.521 7.588 0 3.896 1.181 7.578 5.287 7.578 2.008 0 3.841-.994 4.153-3.003h2.747c-.261 3.164-3.453 5.25-7.136 5.25-5.57 0-7.79-4.545-7.79-9.825 0-4.629 2.035-10.017 8.361-9.835 3.633.106 6.357 1.884 6.642 5.256h-2.742"></path>
          </svg>`,
  portal: `<svg viewBox="0 0 145 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M0 1.4332C0 .61497895.65465263.00138947 1.55466316.00138947c.94108421 0 1.55466316.61358948 1.55466316 1.43181053v14.1059263c0 .4910737.2046421.7364421.7364421.7364421H17.0602316c1.0639368 0 1.6775158.4910737 1.6775158 1.4318105 0 .9821369-.613579 1.4321474-1.6775158 1.4321474H1.67751579C.57286316 19.1395263 0 18.6895263 0 17.7073789V1.4332zm26.4292842 10.5716737c0 5.2775789 2.8639579 4.639021 8.0597474 4.639021 5.1957895 0 8.0597473.7203579 8.0597473-4.6390105V1.43330526c0-.81822105.6135895-1.4321579 1.5546632-1.4321579.9407368 0 1.5546632.61392632 1.5546632 1.4321579V12.2913053c0 6.5868736-4.0914737 7.3390526-11.1690737 7.3390526-7.0779474 0-11.1690737-.752179-11.1690737-7.3390526V1.43329474c0-.81822106.6135895-1.43214737 1.5546632-1.43214737.9410736 0 1.5546631.61391579 1.5546631 1.43214737V12.0048737zm49.5442421-7.21691581h-.1228631l-7.5276106 7.13509471c-.7579894.6447263-1.1114947 1.1864421-1.8003684 1.1864421-.5482316 0-1.0783053-.5194736-1.7589684-1.1864421l-7.5690105-7.17615786h-.163579V17.9531579c0 .8589474-.6135895 1.4318105-1.5546631 1.4318105-.9000106 0-1.5546632-.5728631-1.5546632-1.4318105V2.12864211C53.9218.9422 55.0165368.00111579 55.9264737.00111579c.9102842 0 1.6823158.54822105 2.7003895 1.59572632l7.9368947 7.78974736h.0407263l7.9372316-7.83081052C75.5772526.60853685 76.0488105.00111579 77.1189053.00111579c1.1296421 0 1.9639473.94108421 1.9639473 2.12752632V17.9531474c0 .8589473-.6135789 1.431821-1.5546631 1.431821-.9000106 0-1.5546632-.5728737-1.5546632-1.431821V4.78795789zm11.4553369 3.53818948l13.3373048.0376421c1.104653 0 1.677516.5318 1.677516 1.43181053 0 .9410737-.572863 1.4321474-1.677516 1.4321474H90.5381789v4.3115158c0 .4907368.2046422.7364421.7364422.7364421h13.5419679c1.06359 0 1.636453.4907263 1.636453 1.4318105 0 .9818-.572863 1.4318105-1.636453 1.4318105H89.1063789c-1.1046526 0-1.6775157-.4500105-1.6775157-1.4318105V8.32614737zm48.6445048 9.21771583c0 1.0636-.816863 1.8411052-1.88181 1.8411052-1.055716 0-1.762726-.8117263-2.782179-1.6775158L116.190242 4.62438947V17.9531579c0 .8182316-.613926 1.4318105-1.554663 1.4318105-.900347 0-1.554663-.6135895-1.554663-1.4318105V2.12864211c0-1.39108421.731305-2.12752632 1.840747-2.12752632 1.011242 0 1.600526.66628421 2.659316 1.55466316l15.383053 12.91983155V1.43327368c0-.81822105.613589-1.4321579 1.554663-1.4321579.900021 0 1.554673.61392632 1.554673 1.4321579V17.5438632zm2.167569-14.93333688v-.01413685c0-1.34223158 1.088147-2.47245263 2.458484-2.47245263 1.384842 0 2.458484 1.11607369 2.458484 2.45830527v.01414736c0 1.34223158-1.087789 2.47262106-2.458484 2.47262106-1.384495 0-2.458484-1.11625264-2.458484-2.45848421zm4.6344-.01413685v-.01414736c0-1.20094737-.932537-2.18989474-2.175916-2.18989474-1.229232 0-2.175916 1.00309474-2.175916 2.2040421v.01413685c0 1.20094736.932537 2.19006315 2.175916 2.19006315 1.229242 0 2.175916-1.00325263 2.175916-2.2042zm-3.136748-1.2998h1.130569c.550968 0 .960821.26841053.960821.79126316 0 .40968421-.240463.6639579-.57959.7628l.664127.94668421h-.579253l-.59341-.86181052h-.522674v.86181052h-.48059V1.29658947zm1.088137 1.24338948c.325 0 .508537-.16956842.508537-.40986316 0-.26841053-.183537-.40968421-.508537-.40968421h-.607537v.81954737h.607537z" fill="#000"/><path d="M106.330232 1.71966316c0-.94108421-.572874-1.47287369-1.677516-1.47287369H89.1060842c-1.1043263 0-1.6771789.53178948-1.6771789 1.47287369v1.42565263l17.2648737-.0345579c1.063579-.00001052 1.636453-.49107368 1.636453-1.39109473" fill="#0C9ED9"/></svg>`,
  brightspeed: `<svg viewBox="0 0 219 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#FFC800" d="M6.27 25.27A6.26 6.26 0 0 0 0 19.01v6.26h6.26ZM0 6.26A6.26 6.26 0 0 0 6.28 0H0v6.26ZM19.02 25.27a6.26 6.26 0 0 1 6.26-6.26v6.26h-6.26ZM25.28 6.26A6.26 6.26 0 0 1 19.02 0h6.26v6.26ZM10.44 14.83a14.81 14.81 0 0 0-2.8-2.2A14.77 14.77 0 0 1 0 14.77a10.5 10.5 0 0 1 10.51 10.51c0-2.7.73-5.34 2.12-7.65a14.63 14.63 0 0 0-2.19-2.79Z"/><path fill="#FA783C" d="M10.44 10.45c.84-.84 1.58-1.78 2.2-2.8A14.77 14.77 0 0 1 10.5 0 10.5 10.5 0 0 1 .01 10.51c2.69 0 5.33.73 7.64 2.12a14.73 14.73 0 0 0 2.8-2.18Z"/><path fill="#FA4628" d="M0 10.51v4.25c2.7 0 5.35-.73 7.65-2.12a14.78 14.78 0 0 0-7.64-2.13Z"/><path fill="#FA783C" d="M14.84 14.83a14.7 14.7 0 0 0-2.2 2.8c1.4 2.3 2.13 4.95 2.12 7.64a10.5 10.5 0 0 1 10.52-10.5c-2.7 0-5.34-.74-7.65-2.13a14.76 14.76 0 0 0-2.8 2.19Z"/><path fill="#FA4628" d="M10.52 25.27h4.25c0-2.7-.73-5.34-2.12-7.64a14.77 14.77 0 0 0-2.13 7.64Z"/><path fill="#FFC800" d="M14.84 10.44c.84.85 1.77 1.58 2.8 2.2 2.3-1.4 4.94-2.13 7.64-2.12A10.5 10.5 0 0 1 14.77 0c0 2.7-.73 5.34-2.12 7.64a14.81 14.81 0 0 0 2.19 2.8Z"/><path fill="#FA4628" d="M14.77 0h-4.25c0 2.7.73 5.34 2.12 7.65 1.4-2.3 2.13-4.95 2.13-7.65ZM17.63 12.64c2.3 1.39 4.95 2.12 7.64 2.12V10.5c-2.7 0-5.34.73-7.64 2.13Z"/><path fill="#000" d="M71.08 1.19a3.17 3.17 0 0 1 4.07 0 2.66 2.66 0 0 1 .02 3.8c-.53.48-1.21.73-2.05.73-.84 0-1.53-.25-2.05-.74a2.66 2.66 0 0 1 .01-3.79Zm-.4 6.84h4.84v15.22h-4.84V8.03ZM82.04 31.2a5.96 5.96 0 0 1-3.85-5.71c0-.25 0-.5.03-.74h4.66c-.04 1 .24 1.78.84 2.34.6.55 1.49.83 2.64.83 1.03 0 1.86-.23 2.5-.7a2.16 2.16 0 0 0 .95-1.83c0-.78-.3-1.38-.88-1.8a4.26 4.26 0 0 0-2.5-.63A9.69 9.69 0 0 1 82 22a6.96 6.96 0 0 1-2.93-2.7 7.79 7.79 0 0 1-1.03-4.05 7.29 7.29 0 0 1 4.02-6.67 9.38 9.38 0 0 1 7.78-.23l1.8-2.22 3.54 2.56-2.03 2.37a6.15 6.15 0 0 1 1.54 4.2c0 1.09-.27 2.17-.82 3.12a6.64 6.64 0 0 1-2.3 2.36c.97.42 1.8 1.1 2.4 1.96a5 5 0 0 1 .84 2.88c.02 1.2-.34 2.39-1.05 3.37a6.6 6.6 0 0 1-2.95 2.25 11.7 11.7 0 0 1-4.44.79c-1.65 0-3.1-.26-4.33-.8Zm1.76-13.33c.65.66 1.52 1 2.6 1 1.06 0 1.93-.33 2.58-.99.65-.65.98-1.53.99-2.62 0-1.1-.32-1.96-.97-2.61a3.58 3.58 0 0 0-2.62-.98c-1.07 0-1.93.33-2.59.98a3.5 3.5 0 0 0-.98 2.61c0 1.07.33 1.93.99 2.6Zm14.09-16.2h4.84v8a5.88 5.88 0 0 1 4.65-2c1.87 0 3.36.63 4.46 1.88 1.1 1.26 1.64 2.95 1.65 5.09v8.6h-4.84v-8.32a3.4 3.4 0 0 0-.73-2.32 2.54 2.54 0 0 0-2.02-.83c-.94 0-1.7.32-2.3.96a3.54 3.54 0 0 0-.87 2.5v8h-4.84V1.69Zm32 19.94 1.85-3.33c.8.48 1.67.83 2.57 1.05.95.24 1.93.37 2.92.37 1.33 0 2-.36 2-1.08a.89.89 0 0 0-.56-.83c-.37-.19-.98-.3-1.84-.37a8.22 8.22 0 0 1-4.61-1.45 4.05 4.05 0 0 1-1.71-3.39 4.24 4.24 0 0 1 1.84-3.62c1.24-.9 2.9-1.34 5-1.34 1.15 0 2.3.14 3.4.43 1 .25 1.94.65 2.8 1.2l-1.88 3.24a8.18 8.18 0 0 0-4.1-.98c-1.56 0-2.35.37-2.34 1.1a.77.77 0 0 0 .47.72 5 5 0 0 0 1.62.37c2.18.16 3.84.65 4.98 1.48a4 4 0 0 1 1.71 3.45c0 1.56-.63 2.79-1.88 3.68-1.25.9-2.99 1.34-5.2 1.34-2.7 0-5.05-.68-7.04-2.04Zm39.6 1.03a7 7 0 0 1-2.98-2.76 8.23 8.23 0 0 1-1.05-4.22 8.3 8.3 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.89-2.82c1.23-.67 2.66-1 4.28-1 1.66 0 3.1.31 4.32.94a6.65 6.65 0 0 1 2.79 2.65c.64 1.14.97 2.47.97 4-.01.6-.06 1.2-.16 1.8H170.4a2.88 2.88 0 0 0 1.27 1.9c.7.49 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.53 2.7a9 9 0 0 1-3.07 1.86c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.82 2.82 0 0 0-.98-2.07c-.59-.5-1.37-.74-2.35-.74-.97 0-1.76.25-2.36.74-.6.5-.95 1.18-1.04 2.07h6.73Zm10.51 8.33a7 7 0 0 1-2.99-2.76 8.23 8.23 0 0 1-1.04-4.22 8.28 8.28 0 0 1 1.03-4.16 7.18 7.18 0 0 1 2.88-2.82c1.23-.67 2.66-1 4.29-1 1.66 0 3.1.31 4.31.94a6.65 6.65 0 0 1 2.8 2.65c.64 1.14.96 2.47.96 4 0 .6-.06 1.2-.15 1.8h-11.2a2.88 2.88 0 0 0 1.28 1.9c.7.5 1.59.73 2.68.73.75 0 1.5-.11 2.22-.34.67-.2 1.3-.52 1.85-.95l2.52 2.71a8.98 8.98 0 0 1-3.06 1.85c-1.21.44-2.5.66-3.78.65-1.77 0-3.3-.33-4.6-.98Zm7.65-8.33a2.83 2.83 0 0 0-.97-2.07 3.52 3.52 0 0 0-2.36-.74c-.97 0-1.75.25-2.36.74-.6.5-.95 1.18-1.03 2.07h6.72Zm-142.94-2.8a9.6 9.6 0 0 1 0 8.24 6.83 6.83 0 0 1-2.59 2.8 7.21 7.21 0 0 1-3.79 1c-1.92 0-3.5-.61-4.75-1.82v1.52h-4.8V1.68h4.83v7.8a6.7 6.7 0 0 1 4.72-1.76 7.21 7.21 0 0 1 3.8 1 6.83 6.83 0 0 1 2.58 2.8Zm-4.9 6.91a3.86 3.86 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.6 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.62-1.07ZM66.85 8.07c.68.25 1.3.64 1.82 1.14l-2.04 3.54a5.72 5.72 0 0 0-1.2-.58 3.65 3.65 0 0 0-1.17-.19 3.1 3.1 0 0 0-2.44.98c-.6.66-.9 1.62-.9 2.9v7.4H56.1V8.03h4.84V9.6a4.57 4.57 0 0 1 3.82-1.91c.72 0 1.43.13 2.1.38Zm59.83 10.96 1.14 3.64a8.91 8.91 0 0 1-4.04.9 5.44 5.44 0 0 1-3.95-1.4c-.96-.94-1.44-2.45-1.44-4.53v-5.76h-2.6V8.03h2.6V3.7h4.8v4.32h3.8v3.85h-3.8v5.76c0 .62.16 1.08.47 1.38a1.75 1.75 0 0 0 1.26.44c.61 0 1.22-.15 1.76-.43Zm35.92-7.5a9.63 9.63 0 0 1 0 8.24 6.84 6.84 0 0 1-2.6 2.8 7.21 7.21 0 0 1-3.79 1 6.6 6.6 0 0 1-4.71-1.8v8.09h-4.84V8.03h4.8v1.48a6.55 6.55 0 0 1 4.75-1.79 7.21 7.21 0 0 1 3.8 1 6.84 6.84 0 0 1 2.59 2.8Zm-4.9 6.9a3.85 3.85 0 0 0 1.02-2.79c0-1.15-.34-2.08-1.02-2.79a3.44 3.44 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77a3.9 3.9 0 0 0 1 2.78 3.4 3.4 0 0 0 2.6 1.08c1.08 0 1.95-.36 2.63-1.07Zm56.06-16.75h4.84v21.57h-4.84V21.7c-.51.52-1.12.94-1.78 1.24-.96.42-1.99.63-3.03.62a6.7 6.7 0 0 1-6.27-3.78 9.04 9.04 0 0 1-.9-4.14c0-1.57.3-2.95.9-4.15a6.7 6.7 0 0 1 6.27-3.77c.92 0 1.84.15 2.7.48.8.29 1.51.75 2.11 1.34V1.68Zm-.95 16.75c.51-.55.85-1.24.95-1.98v-1.61a3.62 3.62 0 0 0-.95-1.99 3.45 3.45 0 0 0-2.62-1.06 3.4 3.4 0 0 0-2.61 1.08c-.67.72-1 1.64-1 2.77 0 1.13.33 2.06 1 2.78a3.4 3.4 0 0 0 2.6 1.08c1.07 0 1.95-.36 2.63-1.07Z"/></svg>`,
  colt: `<svg viewBox="0 0 82 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#00D7BD" fill-rule="evenodd" d="M60.873 31.06c-1.51-.328-2.627-1.207-3.303-2.582l-.05-.103c-.065-.13-.123-.248-.175-.368-.451-1.038-.451-2.272-.451-14.212V0h5.86v12.773c0 12.604 0 12.762.226 13.134.35.575.79.7 2.48.7h1.465v4.621l-2.671-.011c-1.803 0-2.908-.056-3.381-.158ZM26.924 20.021c.553 6.415 5.287 11.24 11.632 11.872 4.26.417 8.33-.981 11.023-3.788 2.615-2.729 4.013-6.73 3.607-10.395-.767-7.091-6.019-11.837-13.12-11.849-3.629 0-6.728 1.184-9.14 3.495-2.908 2.796-4.351 6.63-4.002 10.665Zm19.533 2.65c-.823 1.555-2.412 2.886-4.103 3.415-2.637.835-5.545.158-7.416-1.724-1.262-1.286-1.927-2.661-2.153-4.521-.405-3.258 1.195-6.415 3.934-7.768 2.953-1.454 6.21-.924 8.51 1.387 1.521 1.522 2.13 3.078 2.13 5.423.011 1.533-.214 2.468-.902 3.788ZM.246 21.532c1.195 5.604 5.557 9.651 11.17 10.361 3.99.496 7.923-.755 10.763-3.438.812-.778 1.792-1.995 2.3-2.875l.293-.507-2.435-1.387c-1.33-.766-2.446-1.375-2.457-1.353-.017.017-.11.194-.233.425l-.128.24c-.44.835-1.848 2.221-2.716 2.684-2.074 1.093-5.106 1.093-7.168 0-.98-.519-2.3-1.86-2.818-2.853-.643-1.262-.902-2.367-.902-3.89 0-2.39.688-4.17 2.176-5.647 1.499-1.488 3.144-2.097 5.41-1.984 2.67.124 4.824 1.42 5.962 3.573l.307.58.002.004.097.183c.022.023 4.734-2.627 4.891-2.75.023-.023-.101-.283-.27-.576-1.555-2.694-4.125-4.78-7.135-5.783-1.69-.564-2.784-.71-4.812-.643-2.288.068-3.483.35-5.41 1.308C3.278 9.12.798 12.582.122 16.967c-.203 1.319-.147 3.27.124 4.566Zm70.32 5.694c.63 2.153 1.995 3.518 3.854 3.867.316.056 1.995.113 3.754.124l3.178.011v-4.622h-2.006c-2.254 0-2.593-.09-2.976-.8-.191-.361-.203-.812-.203-7.227v-6.854h4.734v-4.51h-4.734V0h-5.872l.034 13.28c.034 12.289.056 13.315.237 13.946Z" clip-rule="evenodd"/></svg>`,
};

export const zIndexValues: IZIndex[] = [
  { key: '0', color: ' -bg--black', margin: 1, text: 'Initial value' },
  {
    key: '1',
    color: '',
    margin: 0,
    text: 'Prominent elements (E.g. focused buttons)',
  },
  { key: '10', color: '-bg--danger', margin: 2, text: 'Dropdowns' },
  {
    key: '20',
    color: '-bg--warning',
    margin: 3,
    text: 'Fixed elements (E.g. drawer)',
  },
  { key: '30', color: '-bg--success', margin: 4, text: 'Backdrops' },
  {
    key: '40',
    color: '-bg--secondary',
    margin: 5,
    text: 'Fixed elements with backdrop (E.g. drawer with backdrop)',
  },
  { key: '50', color: '-bg--grey-20', margin: 6, text: 'Modals' },
  { key: '60', color: '-bg--grey-10', margin: 7, text: 'Popovers' },
  { key: '70', color: '-bg--primary', margin: 8, text: 'Tooltips' },
  { key: 'auto', color: '', margin: 0, text: '-' },
];

const neutralColors = [
  [
    {
      code: COLORS.GRAY_100.value,
      text: 'Grey 100',
      description: 'Used for primary text color on white and low-contrast backgrounds on black.',
      a11y: 'AAA',
      class: '-text--white',
    },
    {
      code: COLORS.GRAY_90.value,
      text: 'Grey 90',
      description: 'Used for low-contrast borders on black and medium-contrast backgrounds on black.',
      a11y: 'AAA',
      class: '-text--white',
    },
    {
      code: COLORS.GREY.value,
      text: 'Grey 80',
      description: 'Used for medium-contrast borders on black and high-contrast backgrounds on black.',
      a11y: 'AAA',
      class: '-text--white',
    },
    {
      code: COLORS.MUTED.value,
      text: 'Grey 70',
      description: 'Used for secondary text on white and high-contrast borders on black.',
      a11y: 'AA',
      class: '-text--white',
    },
  ],
  [
    {
      code: COLORS.GRAY_60.value,
      text: 'Grey 60',
      description: 'Used for muted or disabled text and icons on white.',
      a11y: 'AA',
      class: '-text--white',
    },
    {
      code: COLORS.GRAY_50.value,
      text: 'Grey 50',
      description: 'Used for muted or disabled text and icons on black.',
      a11y: 'AA',
    },
    {
      code: COLORS.GRAY_40.value,
      text: 'Grey 40',
      description: 'Used for high-contrast borders on white.',
      a11y: 'AAA',
    },
    {
      code: COLORS.GREY_30.value,
      text: 'Grey 30',
      description: 'Used for medium-contrast borders on white.',
      a11y: 'AAA',
    },
  ],
  [
    {
      code: COLORS.GREY_25.value,
      text: 'Grey 25',
      description: 'Used for medium-contrast borders and high-contrast backgrounds on white.',
      a11y: 'AAA',
    },
    {
      code: COLORS.MUTED_LIGHT.value,
      text: 'Grey 20',
      description: 'Used for low-contrast borders and medium-contrast backgrounds on white.',
      a11y: 'AAA',
    },
    {
      code: COLORS.GREY_15.value,
      text: 'Grey 15',
      description: 'Used for low-contrast backgrounds on white.',
      a11y: 'AAA',
    },
    {
      code: COLORS.MUTED_LIGHTER.value,
      text: 'Grey 10',
      description: 'Used for low-contrast backgrounds on white.',
      a11y: 'AAA',
    },
  ],
];

export const colors: ThemesColor = {
  lumen: {
    brand: {
      main: [
        {
          title: 'Primary Accent',
          id: 'primary-accent',
          code: COLORS.INFO.value,
          a11y: 'AA',
          text: 'Blue 70',
          class: '-text--white',
        },
        {
          title: 'Secondary Accent',
          id: 'secondary-accent',
          code: COLORS.SECONDARY.value,
          text: 'Cyan 40',
          a11y: 'AAA',
        },
      ],
      supporting: [
        {
          text: 'White',
          code: COLORS.WHITE.value,
          a11y: 'AAA',
          class: '-b--1',
        },
        {
          text: 'Cyan 50',
          code: COLORS.CYAN_50.value,
          a11y: 'AA',
        },
        {
          text: 'Navy 100',
          code: COLORS.NAVY.value,
          class: '-text--white',
          a11y: 'AAA',
        },
        {
          text: 'Black',
          code: COLORS.BLACK.value,
          class: '-text--white',
          a11y: 'AAA',
        },
      ],
    },
    neutral: neutralColors,
    semantic: [
      [
        {
          code: COLORS.SUCCESS.value,
          text: 'Green 70',
          a11y: 'AA',
          class: '-text--white',
        },
        {
          code: COLORS.GREEN_60.value,
          text: 'Green 60',
          a11y: 'AA',
          class: '-text--white',
        },
        {
          code: COLORS.GREEN_30.value,
          text: 'Green 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.SUCCESS_LIGHT.value,
          text: 'Green 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.BLUE_75.value,
          text: 'Blue 75',
          a11y: 'AA',
          class: '-text--white',
        },
        {
          code: COLORS.BLUE_60.value,
          text: 'Blue 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_30.value,
          text: 'Blue 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.INFO_LIGHTER.value,
          text: 'Blue 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.DANGER.value,
          text: 'Red 70',
          a11y: 'AA',
          class: '-text--white',
        },
        {
          code: COLORS.RED_60.value,
          text: 'Red 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_30.value,
          text: 'Red 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.DANGER_LIGHT.value,
          text: 'Red 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.WARNING.value,
          text: 'Yellow 70',
          a11y: 'AA',
          class: '-text--white',
        },
        {
          code: COLORS.YELLOW_BRIGHTSPEED_60.value,
          text: 'Yellow 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_30.value,
          text: 'Yellow 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.WARNING_LIGHT.value,
          text: 'Yellow 20',
          a11y: 'AAA',
        },
      ],
    ],
  },
  centurylink: {
    brand: {
      main: [
        {
          title: 'Primary Accent',
          id: 'primary-accent',
          code: COLORS.PRIMARY_CENTURYLINK.value,
          a11y: 'AAA',
          text: 'Blue 70',
          class: '-text--white',
        },
        {
          title: 'Secondary Accent',
          id: 'secondary-accent',
          code: COLORS.SECONDARY_CENTURYLINK.value,
          a11y: 'AAA',
          text: 'Mint 40',
        },
      ],
      supporting: [
        {
          text: 'White',
          code: COLORS.WHITE.value,
          a11y: 'AAA',
          class: '-b--1',
        },
        {
          text: 'Teal Blue 40',
          code: COLORS.TEAL_BLUE_40.value,
          a11y: 'AA',
        },
        {
          text: 'Yellow 35',
          code: COLORS.YELLOW_CENTURYLINK_35.value,
          a11y: 'AAA',
        },
        {
          text: 'Green 35',
          code: COLORS.GREEN_CENTURYLINK_35.value,
          a11y: 'AAA',
        },
      ],
    },
    neutral: neutralColors,
    semantic: [
      [
        {
          code: COLORS.GREEN_CENTURYLINK_60.value,
          text: 'Green 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_CENTURYLINK_50.value,
          text: 'Green 50',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_CENTURYLINK_30.value,
          text: 'Green 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.GREEN_CENTURYLINK_20.value,
          text: 'Green 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.BLUE_CENTURYLINK_60.value,
          text: 'Blue 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_CENTURYLINK_50.value,
          text: 'Blue 50',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_CENTURYLINK_30.value,
          text: 'Blue 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.BLUE_CENTURYLINK_20.value,
          text: 'Blue 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.RED_CENTURYLINK_60.value,
          text: 'Red 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_CENTURYLINK_50.value,
          text: 'Red 50',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_CENTURYLINK_30.value,
          text: 'Red 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.RED_CENTURYLINK_20.value,
          text: 'Red 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.YELLOW_CENTURYLINK_60.value,
          text: 'Yellow 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_CENTURYLINK_50.value,
          text: 'Yellow 50',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_CENTURYLINK_30.value,
          text: 'Yellow 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.YELLOW_CENTURYLINK_20.value,
          text: 'Yellow 20',
          a11y: 'AAA',
        },
      ],
    ],
  },
  brightspeed: {
    brand: {
      main: [
        {
          title: 'Primary Accent',
          id: 'primary-accent',
          code: COLORS.YELLOW_BRIGHTSPEED_40.value,
          text: 'Yellow 40',
          a11y: 'AAA',
        },
        {
          title: 'Secondary Accent',
          id: 'secondary-accent',
          code: COLORS.ORANGE_40.value,
          text: 'Orange 40',
          class: '-text--black',
          a11y: 'AAA',
        },
      ],
      supporting: [
        {
          text: 'Red 50',
          code: COLORS.RED_BRIGHTSPEED_50.value,
          wrapperClass: '-w-lg--4',
          a11y: 'AA',
        },
        {
          text: 'White',
          code: COLORS.WHITE.value,
          class: '-b--1',
          wrapperClass: '-w-lg--4',
          a11y: 'AAA',
        },
        {
          text: 'Black',
          code: COLORS.BLACK.value,
          class: '-text--white -bg--black',
          wrapperClass: '-w-lg--4',
          a11y: 'AAA',
        },
      ],
    },
    neutral: [
      [
        {
          code: COLORS.BLACK.value,
          text: 'Grey 100',
          description: 'Used for primary text color on white and low-contrast backgrounds on black.',
          a11y: 'AAA',
          class: '-text--white',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_90.value,
          text: 'Grey 90',
          description: 'Used for low-contrast borders on black and medium-contrast backgrounds on black.',
          a11y: 'AAA',
          class: '-text--white',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_80.value,
          text: 'Grey 80',
          description: 'Used for medium-contrast borders on black and high-contrast backgrounds on black.',
          a11y: 'AAA',
          class: '-text--white',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_70.value,
          text: 'Grey 70',
          description: 'Used for secondary text on white and high-contrast borders on black.',
          a11y: 'AA',
          class: '-text--white',
        },
      ],
      [
        {
          code: COLORS.GREY_BRIGHTSPEED_60.value,
          text: 'Grey 60',
          description: 'Used for muted or disabled text and icons on white.',
          a11y: 'AAA',
          class: '-text--white',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_50.value,
          text: 'Grey 50',
          description: 'Used for muted or disabled text and icons on black.',
          a11y: 'AA',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_40.value,
          text: 'Grey 40',
          description: 'Used for high-contrast borders on white.',
          a11y: 'AAA',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_30.value,
          text: 'Grey 30',
          description: 'Used for medium-contrast borders on white.',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.GREY_BRIGHTSPEED_25.value,
          text: 'Grey 25',
          description: 'Used for medium-contrast borders and high-contrast backgrounds on white.',
          a11y: 'AAA',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_20.value,
          text: 'Grey 20',
          description: 'Used for low-contrast borders and medium-contrast backgrounds on white.',
          a11y: 'AAA',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_15.value,
          text: 'Grey 15',
          description: 'Used for low-contrast backgrounds on white.',
          a11y: 'AAA',
        },
        {
          code: COLORS.GREY_BRIGHTSPEED_10.value,
          text: 'Grey 10',
          description: 'Used for low-contrast backgrounds on white.',
          a11y: 'AAA',
        },
      ],
    ],
    semantic: [
      [
        {
          code: COLORS.SUCCESS.value,
          text: 'Green 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_60.value,
          text: 'Green 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_30.value,
          text: 'Green 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.SUCCESS_LIGHT.value,
          text: 'Green 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.BLUE_75.value,
          text: 'Blue 75',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_60.value,
          text: 'Blue 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_30.value,
          text: 'Blue 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.INFO_LIGHTER.value,
          text: 'Blue 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.RED_BRIGHTSPEED_70.value,
          text: 'Red 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_BRIGHTSPEED_60.value,
          text: 'Red 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_BRIGHTSPEED_30.value,
          text: 'Red 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.RED_BRIGHTSPEED_20.value,
          text: 'Red 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.WARNING.value,
          text: 'Yellow 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_60_BRIGHTSPEED.value,
          text: 'Yellow 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_BRIGHTSPEED_30.value,
          text: 'Yellow 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.YELLOW_BRIGHTSPEED_20.value,
          text: 'Yellow 20',
          a11y: 'AAA',
        },
      ],
    ],
  },
  portal: {
    brand: {
      main: [
        {
          title: 'Primary Accent',
          id: 'primary-accent',
          code: COLORS.INFO.value,
          a11y: 'AA',
          text: 'Blue 70',
          class: '-text--white',
        },
        {
          title: 'Secondary Accent',
          id: 'secondary-accent',
          code: COLORS.SECONDARY.value,
          text: 'Cyan 40',
          a11y: 'AAA',
        },
      ],
      supporting: [
        {
          text: 'White',
          code: COLORS.WHITE.value,
          a11y: 'AAA',
          class: '-b--1',
        },
        {
          text: 'Cyan 50',
          code: COLORS.CYAN_50.value,
          a11y: 'AA',
        },
        {
          text: 'Navy 100',
          code: COLORS.NAVY.value,
          class: '-text--white',
          a11y: 'AAA',
        },
        {
          text: 'Black',
          code: COLORS.BLACK.value,
          class: '-text--white -bg--black',
          a11y: 'AAA',
        },
      ],
    },
    neutral: neutralColors,
    semantic: [
      [
        {
          code: COLORS.SUCCESS.value,
          text: 'Green 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_60.value,
          text: 'Green 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.GREEN_30.value,
          text: 'Green 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.SUCCESS_LIGHT.value,
          text: 'Green 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.BLUE_75.value,
          text: 'Blue 75',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_60.value,
          text: 'Blue 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.BLUE_30.value,
          text: 'Blue 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.INFO_LIGHTER.value,
          text: 'Blue 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.DANGER.value,
          text: 'Red 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_60.value,
          text: 'Red 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.RED_30.value,
          text: 'Red 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.DANGER_LIGHT.value,
          text: 'Red 20',
          a11y: 'AAA',
        },
      ],
      [
        {
          code: COLORS.WARNING.value,
          text: 'Yellow 70',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_BRIGHTSPEED_60.value,
          text: 'Yellow 60',
          class: '-text--white',
          a11y: 'AA',
        },
        {
          code: COLORS.YELLOW_30.value,
          text: 'Yellow 30',
          a11y: 'AAA',
        },
        {
          code: COLORS.WARNING_LIGHT.value,
          text: 'Yellow 20',
          a11y: 'AAA',
        },
      ],
    ],
  },
  colt: null,
};

export const breakpoints: IBreakpoints[] = [
  { name: 'sm', value: 'sm and larger' },
  { name: 'md', value: 'md and larger' },
  { name: 'lg', value: 'lg and larger' },
  { name: 'xl', value: 'xl' },
];

export const displayDefaultColumns = [
  {
    title: 'Display Class',
    key: 'class',
    width: '40%',
  },
  {
    title: 'Value',
    key: 'value',
    width: '',
  },
];

export const utilitiesTextColumns = [
  {
    title: 'Size',
    key: 'class',
    width: '20%',
  },
  {
    title: 'Example',
    key: 'value',
    width: '',
  },
];

export const designTokensColumns = [
  {
    title: 'Token',
    key: 'token',
    width: '35%',
  },
  {
    title: 'Value',
    key: 'value',
    width: '25%',
  },
  {
    title: 'Example',
    key: 'example',
    width: '20%',
  },
  {
    title: 'Contrast',
    key: 'contrast',
    width: '20%',
  },
];

export const designTokens3Columns = [
  {
    title: 'Token',
    key: 'token',
    width: '35%',
  },
  {
    title: 'Value',
    key: 'value',
    width: '25%',
  },
  {
    title: 'Example',
    key: 'example',
    width: '40%',
  },
];

export const defaultColumns = [
  {
    title: 'Class',
    key: 'class',
    width: '40%',
  },
  {
    title: 'Value',
    key: 'value',
    width: '',
  },
];

export const getTableHead = (data: Partial<ITableHead> = {}) => [
  {
    title: data.col1?.title || 'Name',
    key: 'cell1',
    width: '',
    className: data.col1?.className || '',
  },
  {
    title: 'ID',
    key: 'cell2',
    width: '',
    className: data.col2?.className || '',
  },
  {
    title: 'Last Login',
    key: 'cell3',
    width: '',
    className: data.col3?.className || '',
  },
];

export const colorKits = {
  gray: [
    { name: COLORS.GRAY_100.name, value: COLORS.GRAY_100.value },
    { name: COLORS.GRAY_90.name, value: COLORS.GRAY_90.value },
    { name: 'grey-80', value: COLORS.GREY.value },
    { name: 'grey-70', value: COLORS.MUTED.value },
    { name: COLORS.GRAY_60.name, value: COLORS.GRAY_60.value },
    { name: COLORS.GRAY_50.name, value: COLORS.GRAY_50.value },
    { name: COLORS.GRAY_40.name, value: COLORS.GRAY_40.value },
    { name: COLORS.GREY_30.name, value: COLORS.GREY_30.value },
    { name: COLORS.GREY_25.name, value: COLORS.GREY_25.value },
    { name: COLORS.GREY_20.name, value: COLORS.GREY_20.value },
    { name: COLORS.GREY_15.name, value: COLORS.GREY_15.value },
    { name: 'grey-10', value: COLORS.MUTED_LIGHTER.value },
  ],
  red: [
    { name: COLORS.RED_100.name, value: COLORS.RED_100.value },
    { name: COLORS.RED_BRIGHTSPEED_90.name, value: COLORS.RED_BRIGHTSPEED_90.value },
    { name: COLORS.RED_80.name, value: COLORS.RED_80.value },
    { name: 'red-70', value: COLORS.DANGER.value },
    { name: COLORS.RED_60.name, value: COLORS.RED_60.value },
    { name: COLORS.RED_50_LUMEN.name, value: COLORS.RED_50_LUMEN.value },
    { name: COLORS.RED_40.name, value: COLORS.RED_40.value },
    { name: COLORS.RED_30.name, value: COLORS.RED_30.value },
    { name: 'red-20', value: COLORS.DANGER_LIGHT.value },
    { name: 'red-10', value: COLORS.DANGER_LIGHTER.value },
  ],
  pink: [
    { name: COLORS.PINK_100.name, value: COLORS.PINK_100.value },
    { name: COLORS.PINK_90.name, value: COLORS.PINK_90.value },
    { name: COLORS.PINK_80.name, value: COLORS.PINK_80.value },
    { name: COLORS.PINK_70.name, value: COLORS.PINK_70.value },
    { name: COLORS.PINK_60.name, value: COLORS.PINK_60.value },
    { name: COLORS.PINK_50.name, value: COLORS.PINK_50.value },
    { name: COLORS.PINK_40.name, value: COLORS.PINK_40.value },
    { name: COLORS.PINK_30.name, value: COLORS.PINK_30.value },
    { name: COLORS.PINK_20.name, value: COLORS.PINK_20.value },
    { name: COLORS.PINK_10.name, value: COLORS.PINK_10.value },
  ],
  purple: [
    { name: COLORS.PURPLE_100.name, value: COLORS.PURPLE_100.value },
    { name: COLORS.PURPLE_90.name, value: COLORS.PURPLE_90.value },
    { name: COLORS.PURPLE_80.name, value: COLORS.PURPLE_80.value },
    { name: COLORS.PURPLE_70.name, value: COLORS.PURPLE_70.value },
    { name: COLORS.PURPLE_60.name, value: COLORS.PURPLE_60.value },
    { name: COLORS.PURPLE_50.name, value: COLORS.PURPLE_50.value },
    { name: COLORS.PURPLE_40.name, value: COLORS.PURPLE_40.value },
    { name: COLORS.PURPLE_30.name, value: COLORS.PURPLE_30.value },
    { name: COLORS.PURPLE_20.name, value: COLORS.PURPLE_20.value },
    { name: COLORS.PURPLE_10.name, value: COLORS.PURPLE_10.value },
  ],
  indigo: [
    { name: COLORS.INDIGO_100.name, value: COLORS.INDIGO_100.value },
    { name: COLORS.INDIGO_90.name, value: COLORS.INDIGO_90.value },
    { name: COLORS.INDIGO_80.name, value: COLORS.INDIGO_80.value },
    { name: COLORS.INDIGO_70.name, value: COLORS.INDIGO_70.value },
    { name: COLORS.INDIGO_60.name, value: COLORS.INDIGO_60.value },
    { name: COLORS.INDIGO_50.name, value: COLORS.INDIGO_50.value },
    { name: COLORS.INDIGO_40.name, value: COLORS.INDIGO_40.value },
    { name: COLORS.INDIGO_30.name, value: COLORS.INDIGO_30.value },
    { name: COLORS.INDIGO_20.name, value: COLORS.INDIGO_20.value },
    { name: COLORS.INDIGO_10.name, value: COLORS.INDIGO_10.value },
  ],
  navy: [
    { name: 'navy-100', value: COLORS.NAVY.value },
    { name: COLORS.NAVY_90.name, value: COLORS.NAVY_90.value },
    { name: 'navy-80', value: COLORS.PRIMARY_CENTURYLINK.value },
    { name: COLORS.NAVY_70.name, value: COLORS.NAVY_90.value },
    { name: COLORS.NAVY_60.name, value: COLORS.NAVY_90.value },
    { name: COLORS.NAVY_50.name, value: COLORS.NAVY_90.value },
    { name: COLORS.NAVY_40.name, value: COLORS.NAVY_40.value },
    { name: 'navy-30', value: COLORS.BLUE_CENTURYLINK_30.value },
    { name: COLORS.NAVY_20.name, value: COLORS.NAVY_20.value },
    { name: 'navy-10', value: COLORS.PRIMARY_LIGHTER.value },
  ],
  blue: [
    { name: COLORS.BLUE_100.name, value: COLORS.BLUE_100.value },
    { name: COLORS.BLUE_90.name, value: COLORS.BLUE_90.value },
    { name: COLORS.BLUE_80.name, value: COLORS.BLUE_80.value },
    { name: COLORS.BLUE_75.name, value: COLORS.BLUE_75.value },
    { name: 'blue-70', value: COLORS.INFO.value },
    { name: COLORS.BLUE_60.name, value: COLORS.BLUE_60.value },
    { name: COLORS.BLUE_50.name, value: COLORS.BLUE_50.value },
    { name: COLORS.BLUE_40.name, value: COLORS.BLUE_40.value },
    { name: COLORS.BLUE_30.name, value: COLORS.BLUE_30.value },
    { name: 'blue-20', value: COLORS.INFO_LIGHTER.value },
    { name: 'blue-10', value: COLORS.INFO_LIGHT.value },
  ],
  cyan: [
    { name: COLORS.CYAN_100.name, value: COLORS.CYAN_100.value },
    { name: COLORS.CYAN_90.name, value: COLORS.CYAN_90.value },
    { name: COLORS.CYAN_80.name, value: COLORS.CYAN_80.value },
    { name: COLORS.CYAN_70.name, value: COLORS.CYAN_70.value },
    { name: COLORS.CYAN_60.name, value: COLORS.CYAN_60.value },
    { name: COLORS.CYAN_50.name, value: COLORS.CYAN_50.value },
    { name: COLORS.CYAN_40.name, value: COLORS.CYAN_40.value },
    { name: COLORS.CYAN_30.name, value: COLORS.CYAN_30.value },
    { name: COLORS.CYAN_20.name, value: COLORS.CYAN_20.value },
    { name: COLORS.CYAN_15.name, value: COLORS.CYAN_15.value },
    { name: COLORS.CYAN_10.name, value: COLORS.CYAN_10.value },
  ],
  teal: [
    { name: COLORS.TEAL_100.name, value: COLORS.TEAL_100.value },
    { name: COLORS.TEAL_90.name, value: COLORS.TEAL_90.value },
    { name: COLORS.TEAL_80.name, value: COLORS.TEAL_80.value },
    { name: COLORS.TEAL_70.name, value: COLORS.TEAL_70.value },
    { name: COLORS.TEAL_60.name, value: COLORS.TEAL_60.value },
    { name: COLORS.TEAL_50.name, value: COLORS.TEAL_50.value },
    { name: COLORS.TEAL_40.name, value: COLORS.TEAL_40.value },
    { name: COLORS.TEAL_30.name, value: COLORS.TEAL_30.value },
    { name: COLORS.TEAL_20.name, value: COLORS.TEAL_20.value },
    { name: COLORS.TEAL_10.name, value: COLORS.TEAL_10.value },
  ],
  green: [
    { name: COLORS.GREEN_100.name, value: COLORS.GREEN_100.value },
    { name: COLORS.GREEN_90.name, value: COLORS.GREEN_90.value },
    { name: COLORS.GREEN_80.name, value: COLORS.GREEN_80.value },
    { name: COLORS.GREEN_70.name, value: COLORS.GREEN_70.value },
    { name: COLORS.GREEN_60.name, value: COLORS.GREEN_60.value },
    { name: COLORS.GREEN_50_LUMEN.name, value: COLORS.GREEN_50_LUMEN.value },
    { name: COLORS.GREEN_40.name, value: COLORS.GREEN_40.value },
    { name: COLORS.GREEN_30.name, value: COLORS.GREEN_30.value },
    { name: COLORS.GREEN_20_LUMEN.name, value: COLORS.GREEN_20_LUMEN.value },
    { name: COLORS.GREEN_10.name, value: COLORS.GREEN_10.value },
  ],
  yellow: [
    { name: COLORS.YELLOW_100.name, value: COLORS.YELLOW_100.value },
    { name: COLORS.YELLOW_90.name, value: COLORS.YELLOW_90.value },
    { name: COLORS.YELLOW_80.name, value: COLORS.YELLOW_80.value },
    { name: COLORS.YELLOW_70.name, value: COLORS.YELLOW_70.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_60.name, value: COLORS.YELLOW_BRIGHTSPEED_60.value },
    { name: COLORS.YELLOW_50_LUMEN.name, value: COLORS.YELLOW_50_LUMEN.value },
    { name: COLORS.YELLOW_40_LUMEN.name, value: COLORS.YELLOW_40_LUMEN.value },
    { name: COLORS.YELLOW_30.name, value: COLORS.YELLOW_30.value },
    { name: COLORS.YELLOW_20_LUMEN.name, value: COLORS.YELLOW_20_LUMEN.value },
    { name: COLORS.YELLOW_10.name, value: COLORS.YELLOW_10.value },
  ],
  orange: [
    { name: COLORS.ORANGE_100.name, value: COLORS.ORANGE_100.value },
    { name: COLORS.ORANGE_90.name, value: COLORS.ORANGE_90.value },
    { name: COLORS.ORANGE_80.name, value: COLORS.ORANGE_80.value },
    { name: COLORS.ORANGE_70.name, value: COLORS.ORANGE_70.value },
    { name: COLORS.ORANGE_60.name, value: COLORS.ORANGE_60.value },
    { name: COLORS.ORANGE_50.name, value: COLORS.ORANGE_50.value },
    { name: COLORS.ORANGE_40_LUMEN.name, value: COLORS.ORANGE_40_LUMEN.value },
    { name: COLORS.ORANGE_30.name, value: COLORS.ORANGE_30.value },
    { name: COLORS.ORANGE_20.name, value: COLORS.ORANGE_20.value },
    { name: COLORS.ORANGE_10.name, value: COLORS.ORANGE_10.value },
  ],
  black: [{ name: COLORS.BLACK.name, value: COLORS.BLACK.value }],
  white: [{ name: COLORS.WHITE.name, value: COLORS.WHITE.value }],
  redCenturylink: [
    { name: COLORS.RED_CENTURYLINK_100.name, value: COLORS.RED_CENTURYLINK_100.value },
    { name: COLORS.RED_CENTURYLINK_90.name, value: COLORS.RED_CENTURYLINK_90.value },
    { name: COLORS.RED_CENTURYLINK_80.name, value: COLORS.RED_CENTURYLINK_80.value },
    { name: COLORS.RED_CENTURYLINK_70.name, value: COLORS.RED_CENTURYLINK_70.value },
    { name: COLORS.RED_CENTURYLINK_60.name, value: COLORS.RED_CENTURYLINK_60.value },
    { name: COLORS.RED_CENTURYLINK_50.name, value: COLORS.RED_CENTURYLINK_50.value },
    { name: COLORS.RED_CENTURYLINK_40.name, value: COLORS.RED_CENTURYLINK_40.value },
    { name: COLORS.RED_CENTURYLINK_30.name, value: COLORS.RED_CENTURYLINK_30.value },
    { name: COLORS.RED_CENTURYLINK_20.name, value: COLORS.RED_CENTURYLINK_20.value },
    { name: COLORS.RED_CENTURYLINK_10.name, value: COLORS.RED_CENTURYLINK_10.value },
  ],
  indigoCenturylink: [
    { name: COLORS.INDIGO_CENTURYLINK_100.name, value: COLORS.INDIGO_CENTURYLINK_100.value },
    { name: COLORS.INDIGO_CENTURYLINK_90.name, value: COLORS.INDIGO_CENTURYLINK_90.value },
    { name: COLORS.INDIGO_CENTURYLINK_80.name, value: COLORS.INDIGO_CENTURYLINK_80.value },
    { name: COLORS.INDIGO_CENTURYLINK_70.name, value: COLORS.INDIGO_CENTURYLINK_70.value },
    { name: COLORS.INDIGO_CENTURYLINK_60.name, value: COLORS.INDIGO_CENTURYLINK_60.value },
    { name: COLORS.INDIGO_CENTURYLINK_50.name, value: COLORS.INDIGO_CENTURYLINK_50.value },
    { name: COLORS.INDIGO_CENTURYLINK_40.name, value: COLORS.INDIGO_CENTURYLINK_40.value },
    { name: COLORS.INDIGO_CENTURYLINK_30.name, value: COLORS.INDIGO_CENTURYLINK_30.value },
    { name: COLORS.INDIGO_CENTURYLINK_20.name, value: COLORS.INDIGO_CENTURYLINK_20.value },
    { name: COLORS.INDIGO_CENTURYLINK_10.name, value: COLORS.INDIGO_CENTURYLINK_10.value },
  ],
  blueCenturylink: [
    { name: COLORS.BLUE_CENTURYLINK_100.name, value: COLORS.BLUE_CENTURYLINK_100.value },
    { name: COLORS.BLUE_CENTURYLINK_90.name, value: COLORS.BLUE_CENTURYLINK_90.value },
    { name: COLORS.BLUE_CENTURYLINK_80.name, value: COLORS.BLUE_CENTURYLINK_80.value },
    { name: COLORS.BLUE_CENTURYLINK_70.name, value: COLORS.BLUE_CENTURYLINK_70.value },
    { name: COLORS.BLUE_CENTURYLINK_60.name, value: COLORS.BLUE_CENTURYLINK_60.value },
    { name: COLORS.BLUE_CENTURYLINK_50.name, value: COLORS.BLUE_CENTURYLINK_50.value },
    { name: COLORS.BLUE_CENTURYLINK_40.name, value: COLORS.BLUE_CENTURYLINK_40.value },
    { name: COLORS.BLUE_CENTURYLINK_30.name, value: COLORS.BLUE_CENTURYLINK_30.value },
    { name: COLORS.BLUE_CENTURYLINK_20.name, value: COLORS.BLUE_CENTURYLINK_20.value },
    { name: COLORS.BLUE_CENTURYLINK_10.name, value: COLORS.BLUE_CENTURYLINK_10.value },
  ],
  cyanCenturylink: [
    { name: COLORS.CYAN_CENTURYLINK_100.name, value: COLORS.CYAN_CENTURYLINK_100.value },
    { name: COLORS.CYAN_CENTURYLINK_90.name, value: COLORS.CYAN_CENTURYLINK_90.value },
    { name: COLORS.CYAN_CENTURYLINK_80.name, value: COLORS.CYAN_CENTURYLINK_80.value },
    { name: COLORS.CYAN_CENTURYLINK_70.name, value: COLORS.CYAN_CENTURYLINK_70.value },
    { name: COLORS.CYAN_CENTURYLINK_60.name, value: COLORS.CYAN_CENTURYLINK_60.value },
    { name: COLORS.CYAN_CENTURYLINK_50.name, value: COLORS.CYAN_CENTURYLINK_50.value },
    { name: COLORS.CYAN_CENTURYLINK_40.name, value: COLORS.CYAN_CENTURYLINK_40.value },
    { name: COLORS.CYAN_CENTURYLINK_30.name, value: COLORS.CYAN_CENTURYLINK_30.value },
    { name: COLORS.CYAN_CENTURYLINK_20.name, value: COLORS.CYAN_CENTURYLINK_20.value },
    { name: COLORS.CYAN_CENTURYLINK_10.name, value: COLORS.CYAN_CENTURYLINK_10.value },
  ],
  tealCenturylink: [
    { name: COLORS.TEAL_CENTURYLINK_100.name, value: COLORS.TEAL_CENTURYLINK_100.value },
    { name: COLORS.TEAL_CENTURYLINK_90.name, value: COLORS.TEAL_CENTURYLINK_90.value },
    { name: COLORS.TEAL_CENTURYLINK_80.name, value: COLORS.TEAL_CENTURYLINK_80.value },
    { name: COLORS.TEAL_CENTURYLINK_70.name, value: COLORS.TEAL_CENTURYLINK_70.value },
    { name: COLORS.TEAL_CENTURYLINK_60.name, value: COLORS.TEAL_CENTURYLINK_60.value },
    { name: COLORS.TEAL_CENTURYLINK_55.name, value: COLORS.TEAL_CENTURYLINK_55.value },
    { name: COLORS.TEAL_CENTURYLINK_50.name, value: COLORS.TEAL_CENTURYLINK_50.value },
    { name: COLORS.TEAL_CENTURYLINK_40.name, value: COLORS.TEAL_CENTURYLINK_40.value },
    { name: COLORS.TEAL_CENTURYLINK_30.name, value: COLORS.TEAL_CENTURYLINK_30.value },
    { name: COLORS.TEAL_CENTURYLINK_20.name, value: COLORS.TEAL_CENTURYLINK_20.value },
    { name: COLORS.TEAL_CENTURYLINK_10.name, value: COLORS.TEAL_CENTURYLINK_10.value },
  ],
  mint: [
    { name: COLORS.MINT_100.name, value: COLORS.MINT_100.value },
    { name: COLORS.MINT_90.name, value: COLORS.MINT_90.value },
    { name: COLORS.MINT_80.name, value: COLORS.MINT_80.value },
    { name: COLORS.MINT_70.name, value: COLORS.MINT_70.value },
    { name: COLORS.MINT_60.name, value: COLORS.MINT_60.value },
    { name: COLORS.MINT_55.name, value: COLORS.MINT_55.value },
    { name: COLORS.MINT_50.name, value: COLORS.MINT_50.value },
    { name: COLORS.MINT_40.name, value: COLORS.MINT_40.value },
    { name: COLORS.MINT_30.name, value: COLORS.MINT_30.value },
    { name: COLORS.MINT_20.name, value: COLORS.MINT_20.value },
    { name: COLORS.MINT_10.name, value: COLORS.MINT_10.value },
  ],
  greenCenturylink: [
    { name: COLORS.GREEN_CENTURYLINK_100.name, value: COLORS.GREEN_CENTURYLINK_100.value },
    { name: COLORS.GREEN_CENTURYLINK_90.name, value: COLORS.GREEN_CENTURYLINK_90.value },
    { name: COLORS.GREEN_CENTURYLINK_80.name, value: COLORS.GREEN_CENTURYLINK_80.value },
    { name: COLORS.GREEN_CENTURYLINK_70.name, value: COLORS.GREEN_CENTURYLINK_70.value },
    { name: COLORS.GREEN_CENTURYLINK_60.name, value: COLORS.GREEN_CENTURYLINK_60.value },
    { name: COLORS.GREEN_CENTURYLINK_50.name, value: COLORS.GREEN_CENTURYLINK_50.value },
    { name: COLORS.GREEN_CENTURYLINK_40.name, value: COLORS.GREEN_CENTURYLINK_40.value },
    { name: COLORS.GREEN_CENTURYLINK_35.name, value: COLORS.GREEN_CENTURYLINK_35.value },
    { name: COLORS.GREEN_CENTURYLINK_30.name, value: COLORS.GREEN_CENTURYLINK_30.value },
    { name: COLORS.GREEN_CENTURYLINK_20.name, value: COLORS.GREEN_CENTURYLINK_20.value },
    { name: COLORS.GREEN_CENTURYLINK_10.name, value: COLORS.GREEN_CENTURYLINK_10.value },
  ],
  yellowCenturylink: [
    { name: COLORS.YELLOW_CENTURYLINK_100.name, value: COLORS.YELLOW_CENTURYLINK_100.value },
    { name: COLORS.YELLOW_CENTURYLINK_90.name, value: COLORS.YELLOW_CENTURYLINK_90.value },
    { name: COLORS.YELLOW_CENTURYLINK_80.name, value: COLORS.YELLOW_CENTURYLINK_80.value },
    { name: COLORS.YELLOW_CENTURYLINK_70.name, value: COLORS.YELLOW_CENTURYLINK_70.value },
    { name: COLORS.YELLOW_CENTURYLINK_60.name, value: COLORS.YELLOW_CENTURYLINK_60.value },
    { name: COLORS.YELLOW_CENTURYLINK_55.name, value: COLORS.YELLOW_CENTURYLINK_55.value },
    { name: COLORS.YELLOW_CENTURYLINK_50.name, value: COLORS.YELLOW_CENTURYLINK_50.value },
    { name: COLORS.YELLOW_CENTURYLINK_40.name, value: COLORS.YELLOW_CENTURYLINK_40.value },
    { name: COLORS.YELLOW_CENTURYLINK_35.name, value: COLORS.YELLOW_CENTURYLINK_35.value },
    { name: COLORS.YELLOW_CENTURYLINK_30.name, value: COLORS.YELLOW_CENTURYLINK_30.value },
    { name: COLORS.YELLOW_CENTURYLINK_20.name, value: COLORS.YELLOW_CENTURYLINK_20.value },
    { name: COLORS.YELLOW_CENTURYLINK_10.name, value: COLORS.YELLOW_CENTURYLINK_10.value },
  ],
  orangeCenturylink: [
    { name: COLORS.ORANGE_CENTURYLINK_100.name, value: COLORS.ORANGE_CENTURYLINK_100.value },
    { name: COLORS.ORANGE_CENTURYLINK_90.name, value: COLORS.ORANGE_CENTURYLINK_90.value },
    { name: COLORS.ORANGE_CENTURYLINK_80.name, value: COLORS.ORANGE_CENTURYLINK_80.value },
    { name: COLORS.ORANGE_CENTURYLINK_70.name, value: COLORS.ORANGE_CENTURYLINK_70.value },
    { name: COLORS.ORANGE_CENTURYLINK_60.name, value: COLORS.ORANGE_CENTURYLINK_60.value },
    { name: COLORS.ORANGE_CENTURYLINK_50.name, value: COLORS.ORANGE_CENTURYLINK_50.value },
    { name: COLORS.ORANGE_CENTURYLINK_40.name, value: COLORS.ORANGE_CENTURYLINK_40.value },
    { name: COLORS.ORANGE_CENTURYLINK_30.name, value: COLORS.ORANGE_CENTURYLINK_30.value },
    { name: COLORS.ORANGE_CENTURYLINK_20.name, value: COLORS.ORANGE_CENTURYLINK_20.value },
    { name: COLORS.ORANGE_CENTURYLINK_10.name, value: COLORS.ORANGE_CENTURYLINK_10.value },
  ],
  greyBrightspeed: [
    { name: COLORS.GREY_BRIGHTSPEED_100.name, value: COLORS.GREY_BRIGHTSPEED_100.value },
    { name: COLORS.GREY_BRIGHTSPEED_90.name, value: COLORS.GREY_BRIGHTSPEED_90.value },
    { name: COLORS.GREY_BRIGHTSPEED_80.name, value: COLORS.GREY_BRIGHTSPEED_80.value },
    { name: COLORS.GREY_BRIGHTSPEED_70.name, value: COLORS.GREY_BRIGHTSPEED_70.value },
    { name: COLORS.GREY_BRIGHTSPEED_60.name, value: COLORS.GREY_BRIGHTSPEED_60.value },
    { name: COLORS.GREY_BRIGHTSPEED_50.name, value: COLORS.GREY_BRIGHTSPEED_50.value },
    { name: COLORS.GREY_BRIGHTSPEED_40.name, value: COLORS.GREY_BRIGHTSPEED_40.value },
    { name: COLORS.GREY_BRIGHTSPEED_30.name, value: COLORS.GREY_BRIGHTSPEED_30.value },
    { name: COLORS.GREY_BRIGHTSPEED_25.name, value: COLORS.GREY_BRIGHTSPEED_25.value },
    { name: COLORS.GREY_BRIGHTSPEED_20.name, value: COLORS.GREY_BRIGHTSPEED_20.value },
    { name: COLORS.GREY_BRIGHTSPEED_15.name, value: COLORS.GREY_BRIGHTSPEED_15.value },
    { name: COLORS.GREY_BRIGHTSPEED_10.name, value: COLORS.GREY_BRIGHTSPEED_10.value },
  ],
  redBrightspeed: [
    { name: COLORS.RED_BRIGHTSPEED_100.name, value: COLORS.RED_BRIGHTSPEED_100.value },
    { name: COLORS.RED_BRIGHTSPEED_90.name, value: COLORS.RED_BRIGHTSPEED_90.value },
    { name: COLORS.RED_BRIGHTSPEED_80.name, value: COLORS.RED_BRIGHTSPEED_80.value },
    { name: COLORS.RED_BRIGHTSPEED_70.name, value: COLORS.RED_BRIGHTSPEED_70.value },
    { name: COLORS.RED_BRIGHTSPEED_60.name, value: COLORS.RED_BRIGHTSPEED_60.value },
    { name: COLORS.RED_BRIGHTSPEED_50.name, value: COLORS.RED_BRIGHTSPEED_50.value },
    { name: COLORS.RED_BRIGHTSPEED_40.name, value: COLORS.RED_BRIGHTSPEED_40.value },
    { name: COLORS.RED_BRIGHTSPEED_30.name, value: COLORS.RED_BRIGHTSPEED_30.value },
    { name: COLORS.RED_BRIGHTSPEED_20.name, value: COLORS.RED_BRIGHTSPEED_20.value },
    { name: COLORS.RED_BRIGHTSPEED_10.name, value: COLORS.RED_BRIGHTSPEED_10.value },
  ],
  yellowBrightspeed: [
    { name: COLORS.YELLOW_BRIGHTSPEED_100.name, value: COLORS.YELLOW_BRIGHTSPEED_100.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_90.name, value: COLORS.YELLOW_BRIGHTSPEED_90.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_80.name, value: COLORS.YELLOW_BRIGHTSPEED_80.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_70.name, value: COLORS.YELLOW_BRIGHTSPEED_70.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_60.name, value: COLORS.YELLOW_BRIGHTSPEED_60.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_50.name, value: COLORS.YELLOW_BRIGHTSPEED_50.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_40.name, value: COLORS.YELLOW_BRIGHTSPEED_40.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_30.name, value: COLORS.YELLOW_BRIGHTSPEED_30.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_20.name, value: COLORS.YELLOW_BRIGHTSPEED_20.value },
    { name: COLORS.YELLOW_BRIGHTSPEED_10.name, value: COLORS.YELLOW_BRIGHTSPEED_10.value },
  ],
  orangeBrightspeed: [
    { name: COLORS.ORANGE_BRIGHTSPEED_100.name, value: COLORS.ORANGE_BRIGHTSPEED_100.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_90.name, value: COLORS.ORANGE_BRIGHTSPEED_90.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_80.name, value: COLORS.ORANGE_BRIGHTSPEED_80.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_70.name, value: COLORS.ORANGE_BRIGHTSPEED_70.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_60.name, value: COLORS.ORANGE_BRIGHTSPEED_60.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_50.name, value: COLORS.ORANGE_BRIGHTSPEED_50.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_40.name, value: COLORS.ORANGE_BRIGHTSPEED_40.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_30.name, value: COLORS.ORANGE_BRIGHTSPEED_30.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_20.name, value: COLORS.ORANGE_BRIGHTSPEED_20.value },
    { name: COLORS.ORANGE_BRIGHTSPEED_10.name, value: COLORS.ORANGE_BRIGHTSPEED_10.value },
  ],
};

export const sizingColumns = [
  {
    title: 'Sizing Class',
    key: 'class',
    width: '40%',
  },
  {
    title: 'Value',
    key: 'value',
    width: '',
  },
];
