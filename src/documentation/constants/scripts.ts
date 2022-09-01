import { CHI_VERSION } from './configs';

export const redirectionScript = `
const pageURL = window.location.href;

if (pageURL.includes('latest')) {
    const redirectionURL = pageURL.split('latest').join('${CHI_VERSION}');

    window.location.href = redirectionURL;
}
`;

export const algoliaScript = `
docsearch({
  apiKey: 'cecdb53a454667c4acaa4c4a3957a5d6',
  indexName: 'centurylink_chi',
  container: '#docsearch',
  appId: 'K3K4BIQ1R4',
  searchParameters: {
    facetFilters: [\`version:v${CHI_VERSION}\`]
  },
  debug: false
});
`;
