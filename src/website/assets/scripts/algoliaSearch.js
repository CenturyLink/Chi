const searchClient = algoliasearch('DI4R9YBA6J', '81112f1dd8329496fd36490bdc8a9aee');
const componentsResultTitle = document.getElementById('components_title');
const utilitiesResultTitle = document.getElementById('utilities_title');
const foundationsResultTitle = document.getElementById('foundations_title');
const templatesResultTitle = document.getElementById('templates_title');
const gettingStartedResultTitle = document.getElementById('getting_started_title');
const noResultsMessageContainer = document.getElementById('no_results_found');
let searchResultCounts = {};

const printSearchResultItem = (item) => {
  return `
    <a class="search_result_a" href="${item.url}">
      <div class="title">${item.name}</div>
      <div class="description">${item.description}</div>
    </a>
  `;
}

const hideNoResults = () => {
  document.getElementById('no_results_found').style.display = 'none';
}

const checkNoResults = () => {
  if (
    searchResultCounts['components'] === 0 &&
    searchResultCounts['utilities'] === 0 &&
    searchResultCounts['foundations'] === 0 &&
    searchResultCounts['templates'] === 0 &&
    searchResultCounts['getting_started'] === 0
    ) {
      noResultsMessageContainer.style.display = 'block';
  }
}

const searchTemplates = instantsearch({
    indexName: 'templates',
    searchClient,
    searchFunction(helper) {
      if (helper.state.query) {
        helper.search();
      }
    }
});

const searchUtilities = instantsearch({
    indexName: 'utilities',
    searchClient,
    searchFunction(helper) {
      if (helper.state.query) {
        helper.search();
      }
    }
});

const searchFoundations = instantsearch({
    indexName: 'foundations',
    searchClient,
    searchFunction(helper) {
      if (helper.state.query) {
        helper.search();
      }
    }
});

const searchGettingStarted = instantsearch({
    indexName: 'getting_started',
    searchClient,
    searchFunction(helper) {
      if (helper.state.query) {
        helper.search();
      }
    }
});

const search = instantsearch({
    indexName: 'components',
    searchClient,
    searchFunction(helper) {
      const aisSearchBoxForm = document.querySelector('.ais-SearchBox-form');
      const container = document.querySelector('#search_results');
      const icon = document.createElement('i');
      const searchInput = document.querySelector('.ais-SearchBox-input');
      const searchResults = document.querySelector('#search_results');

      icon.classList = 'a-icon icon-search -text--muted';
      searchInput.type = 'text';
      
      searchInput.addEventListener('focus', function() {
        searchInput.style.width = '370px';
        searchResults.style.width = '370px';
      });
      searchInput.addEventListener('blur', function() {
        searchInput.style.width = '300px';
        searchResults.style.width = '300px';
      });

      if(!aisSearchBoxForm.classList.contains("a-inputWrapper")) {
        aisSearchBoxForm.classList.add("a-inputWrapper");
        aisSearchBoxForm.classList.add("-icon--left");
        aisSearchBoxForm.appendChild(icon);
      }
  
      noResultsMessageContainer.style.display = 'none';

      if (helper.state.query.length < 3) {
        container.style.display = 'none';
      } else {  
        container.style.display = 'block';     
        searchUtilities.helper.setQuery(helper.state.query).search();
        searchFoundations.helper.setQuery(helper.state.query).search();
        searchTemplates.helper.setQuery(helper.state.query).search();
        searchGettingStarted.helper.setQuery(helper.state.query).search();
        helper.search();
      }
    }
});

searchTemplates.addWidgets([
    instantsearch.widgets.hits({
        container: '#hits_templates',
        templates: {
          empty: function() {
            searchResultCounts['templates'] = 0;
            templatesResultTitle.style.display = 'none';
            checkNoResults();
          },
        item: function(item) {
          if(templatesResultTitle.style.display !== 'block') {
            templatesResultTitle.style.display = 'block';
          }
          return printSearchResultItem(item);
        }
        },
    }),

    instantsearch.widgets.stats({
      container: "#templates_count",
      templates: {
        text: function(text) {
          searchResultCounts["templates"] = text.nbHits;
          if (text.nbHits > 0) {
            hideNoResults();
          }
          return ` (${text.nbHits})`;
        }
      }
    })
  ]);

searchUtilities.addWidgets([
    instantsearch.widgets.hits({
        container: '#hits_utilities',
        templates: {
          empty: function() {
            searchResultCounts['utilities'] = 0;
            utilitiesResultTitle.style.display = 'none';
            checkNoResults();
          },
        item: function(item) {
          if(utilitiesResultTitle.style.display !== 'block') {
            utilitiesResultTitle.style.display = 'block';
          }
          return printSearchResultItem(item);
        }
        },
    }),

    instantsearch.widgets.stats({
      container: "#utilities_count",
      templates: {
        text: function(text) {
          searchResultCounts["utilities"] = text.nbHits;
          if (text.nbHits > 0) {
            hideNoResults();
          }
          return ` (${text.nbHits})`;
        }
      }
    })
  ]);

searchFoundations.addWidgets([
    instantsearch.widgets.hits({
        container: '#hits_foundations',
        templates: {
        empty: function() {
          searchResultCounts['foundations'] = 0;
          foundationsResultTitle.style.display = 'none';
          checkNoResults();
        },
        item: function(item) {
          if(foundationsResultTitle.style.display !== 'block') {
            foundationsResultTitle.style.display = 'block';
          }
          return printSearchResultItem(item);
        }
        },
    }),

    instantsearch.widgets.stats({
      container: "#foundations_count",
      templates: {
        text: function(text) {
          searchResultCounts["foundations"] = text.nbHits;
          if (text.nbHits > 0) {
            hideNoResults();
          }
          return ` (${text.nbHits})`;
        }
      }
    })
  ]);

  searchGettingStarted.addWidgets([
      instantsearch.widgets.hits({
          container: '#hits_getting_started',
          templates: {
          empty: function() {
            searchResultCounts['getting_started'] = 0;
            gettingStartedResultTitle.style.display = 'none';
            checkNoResults();
          },
          item: function(item) {
            if(gettingStartedResultTitle.style.display !== 'block') {
              gettingStartedResultTitle.style.display = 'block';
            }
            return printSearchResultItem(item);
          }
          },
      }),
  
      instantsearch.widgets.stats({
        container: "#getting_started_count",
        templates: {
          text: function(text) {
            searchResultCounts["getting_started"] = text.nbHits;
            if (text.nbHits > 0) {
              hideNoResults();
            }
            return ` (${text.nbHits})`;
          }
        }
      })
    ]);

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search...",
    autofocus: false,
    searchAsYouType: true,
    showReset: false,
    showSubmit: false,
    showLoadingIndicator: true,
    cssClasses: {
        root: '',
        form: [],
        input: [
            'a-input',
            '-lg'
        ]
      },
  }),

  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: function() {
        searchResultCounts['components'] = 0;
        componentsResultTitle.style.display = 'none';
        checkNoResults();
      },
      item: function(item) {
        if (componentsResultTitle.style.display !== 'block') {
          componentsResultTitle.style.display = 'block';
        }
        return printSearchResultItem(item);
        }
    },
    autoHideContainer: true
  }),

  instantsearch.widgets.stats({
    container: "#components_count",
    templates: {
      text: function(text) {
        searchResultCounts['components'] = text.nbHits;
        if (text.nbHits > 0) {
          hideNoResults();
        }
        return ` (${text.nbHits})`;
      }
    }
  })

]);

search.start();
searchUtilities.start();
searchFoundations.start();
searchTemplates.start();
searchGettingStarted.start();