export interface ILanguage {
    href: string;
    name: string;
}

export interface ILink {
    href: string;
    title?: string;
    target?: string;
    class?: string;
    ariaLabel?: string;
    iconName?: string;
}

export const FOOTER_LINKS: ILink[] = [
    {href: 'https://www.lumen.com/en-us/about.html', title: 'About Us'},
    {href: 'https://www.centurylink.com/aboutus/community/community-development/programs-for-customers-with-disabilities.html', title: 'Accessibility'},
    {href: 'https://jobs.lumen.com', title: 'Careers', target: '_blank'},
    {href: 'https://www.lumen.com/en-us/contact-us.html', title: 'Contact Us'},
    {href: '#', class:"optanon-toggle-display", title: 'Cookie Settings'},
];
export const FOOTER_LANGUAGE_DROPDOWN_ITEMS: ILanguage[] = [
    {href: '#', name: 'English'},
    {href: '#', name: 'Español'},
    {href: '#', name: 'Português'},
    {href: '#', name: 'Français'},
    {href: '#', name: 'Deutsch'},
    {href: '#', name: '简体中文'},
    {href: '#', name: '日本語'},
];

export const EXTERNAL_CONTENTS: {[key: string]: ILink[]} = {
    'firstGridLinks': [
        {href: 'https://www.lumen.com/en-us/contact-us.html', title: 'Contact Us'},
        {href: 'https://www.centurylink.com/business/login/', target: '_blank', title: 'Sign in / Pay bill'},
        {href: 'https://www.lumen.com/help/en-us/home.html', title: 'Support'}
    ],
    'firstGridSocialLinks': [
        {href:"https://www.twitter.com/lumentechco", ariaLabel: 'Lumen on Twitter', iconName: 'twitter'},
        {href:"https://www.linkedin.com/company/lumen-tech", ariaLabel: 'Lumen on LinkedIn', iconName: 'linkedin'},
        {href:"https://www.facebook.com/lumentechnologies", ariaLabel: 'Lumen on Facebook', iconName: 'facebook'},
        {href:"https://www.youtube.com/lumentechnologies", ariaLabel: 'Lumen on YouTube', iconName: 'youtube'}
    ],
    'secondGridLinks': [
        {href: 'https://www.lumen.com/en-us/about.html', title: 'About Us'},
        {href: 'https://ir.lumen.com', target: '_blank', title: 'Investors'},
        {href: 'https://news.lumen.com', target: '_blank', title: 'Newsroom'},
        {href: 'https://www.lumen.com/en-us/about/our-platform.html', title: 'Our Platform'},
        {href: 'https://www.lumen.com/public-sector.html', target: '_blank', title: 'Public Sector'},
        {href: 'https://www.centurylink.com/home/', target: '_blank', title: 'Residential'},
        {href: 'https://www.lumen.com/wholesale.html', target: '_blank', title: 'Wholesale'},
    ],
    'thirdGridLinks': [
        {href: 'https://www.lumen.com/en-us/solutions/adaptive-networking.html', title: 'Adaptive Networking'},
        {href: 'https://www.lumen.com/en-us/solutions/collaboration.html', title: 'Collaboration'},
        {href: 'https://www.lumen.com/en-us/solutions/connected-security.html', title: 'Connected Security'},
        {href: 'https://www.lumen.com/en-us/solutions/edge-computing.html', title: 'Edge Computing'},
        {href: 'https://www.lumen.com/en-us/solutions/hybrid-cloud.html', title: 'Hybrid Cloud'},
    ],
    'fourthGridLinks': [
        {href: 'https://www.lumen.com/en-us/communications/hosted-voip.html', title: 'Lumen Engage'},
    ],
    'fifthGridLinks': [
        {href: 'https://www.lumen.com/en-us/about/4th-industrial-revolution.html', title: '4th Industrial Revolution'},
        {href: 'https://blog.lumen.com', target: '_blank', title: 'Blog'},
        {href: 'https://www.lumen.com/help/en-us/portals.html', target: '_blank', title: 'Customer Portals'},
        {href: 'https://www.lumen.com/en-us/resources/network-maps.html', title: 'Network Maps'},
        {href: 'https://www.lumen.com/en-us/partner.html', title: 'Partners'},
        {href: 'https://www.lumen.com/help/en-us/home.html', target: '_blank', title: 'Support'},
    ],
}