docsearch({
  apiKey: 'eca842579cddf86c49f883528ef56f79',
  indexName: 'centurylink_chi',
  inputSelector: '.searchbox',
  algoliaOptions: { 'facetFilters': [`version:v${chiCurrentVersion}`] },
  debug: false
});