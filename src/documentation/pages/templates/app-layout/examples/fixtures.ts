export const BASE_HELP_LANGUAGES: string[] = [
    'English',
    'Español',
    'Português',
    'Français',
    'Deutsch',
    '简体中文',
    '日本語',
];

interface FooterLink {
    link: string,
    label: string,
    target?: string,
    class?: string
}

export const FOOTER_LINKS: FooterLink[] = [
    { link: 'https://www.lumen.com/en-us/about.html', label: 'About Us' },
    { link: 'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html', label: 'Accessibility' },
    { link: 'https://jobs.lumen.com', target: '_blank', label: 'Careers' },
    { link: 'https://www.lumen.com/en-us/contact-us.html', label: 'Contact Us' },
    { link: '#', label: 'Cookie Settings', class: 'optanon-toggle-display' },
    { link: 'https://www.centurylink.com/aboutus/legal.html', target: '_blank', label: 'Legal' },
    { link: 'https://www.lumen.com/en-us/about/legal/acceptable-use-policy.html', target: '_blank', label: 'Legal Notices' },
    { link: 'https://www.lumen.com/en-us/about/legal/privacy-notice.html', label: 'Privacy' },
    { link: 'https://www.centurylink.com/aboutus/company-information/public-policy.html', target: '_blank', label: 'Public Policy' },
    { link: 'https://www.lumen.com/en-us/about/legal/commission-for-complaints-for-telecom-television-services-ccts', target: '_blank', label: 'Support' },
    { link: 'https://www.lumen.com/help/en-us/home.html', label: 'Canadian Ombudsman' },
    { link: 'https://assets.lumen.com/is/content/Lumen/gender-pay-gap-report?Creativeid=b565bf28-6d55-4f86-a245-2f0eb40b91a3', target: '_blank', label: 'Gender Pay Gap 2020 (UK)' },
    { link: 'https://www.centurylink.com/aboutus/legal/latam/tariffs-and-regulatory-information.html', label: 'Legal (Latin America)' },
    { link: 'https://www.lumen.com/en-us/about/legal/de-legal-notices.html', label: 'Legal Notices (Germany)' },
    { link: 'https://assets.lumen.com/is/content/Lumen/modern-slavery-statement-1?Creativeid=5dbb9687-e4a8-4a40-ae00-673ce51d6a80', target: '_blank', label: 'Modern Slavery Statement 2020 (UK)' },
    { link: 'https://www.lumen.com/en-us/about/legal/uk-tax-strategy.html', label: 'UK Tax Strategy' },
];