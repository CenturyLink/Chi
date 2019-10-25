const searchClient = algoliasearch('DI4R9YBA6J', '81112f1dd8329496fd36490bdc8a9aee');
let timerId;

const printSearchResultItem = (item) => {
  return `
    <a class="search_result_a" href="${item.url}">
      <div class="title">${item.name} <span class="search_result_category">| ${item.category}</span></div>
      <div class="description">${item.description}</div>
    </a>
  `;
}

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

      if (helper.state.query.length < 3) {
        container.style.display = 'none';
      } else {  
        container.style.display = 'block';
        helper.search();
      }
    }
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search...",
    queryHook(query, refine) {
      clearTimeout(timerId);
      timerId = setTimeout(() => refine(query), 1000);
    },
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
      empty: '<div class="no_results_found">No results found</div>',
      item: function(item) {
        return printSearchResultItem(item);
        }
    },
    autoHideContainer: true
  })
]);

search.start();