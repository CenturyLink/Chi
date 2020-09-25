import { Component, Prop, Vue } from 'vue-property-decorator';
import { uuid4 } from '../../utils/utils';
import {
  activeClass,
  inverseClass,
  buttonClass,
  buttonContentClass,
  buttonGroupClass,
  iconButtonClass,
  lightClass,
  buttonFlatClass,
  disabledClass,
  iconClass,
  paginationClass,
  paginationResultsClass,
  paginationCompactClass,
  paginationContentClass,
  paginationLabelClass,
  paginationPageSizeCLass,
  paginationStartClass,
  paginationCenterClass,
  inputClass,
  paginationJumperClass,
  paginationEndClass
} from '../../constants/classes';
import { pageChangeEvent, pageSizeChangeEvent } from '../../constants/events';

@Component
export default class Pagination extends Vue {
  @Prop() pages!: number;
  @Prop() firstLast!: boolean;
  @Prop() inverse!: boolean;
  @Prop() currentPage!: number;
  @Prop() results!: number;
  @Prop() pageSize!: number;
  @Prop() pageJumper!: number;
  @Prop() compact!: boolean;
  @Prop() ariaLabel!: boolean;
  @Prop() size!: string;

  _pageJumperUuid!: string;
  _distanceFromCurrent!: number;
  _lastRenderedPage!: number;
  _pagesToRender: any = [];
  _startPage!: JSX.Element | null;
  _lastPage!: JSX.Element | null;
  _results: any;
  _pageSize: any;
  goToPage: any;

  constructor() {
    super();
  }

  calculateDistanceFromCurrent() {
    switch (this.currentPage) {
      case 1:
        this._distanceFromCurrent = 4;
        break;
      case 2:
        this._distanceFromCurrent = 3;
        break;
      default:
        this._distanceFromCurrent = 2;
    }
  }

  _goToPage(pageChange: HTMLElement) {
    let pageToGo;
    for (
      let cur = pageChange;
      cur && !cur.classList.contains(buttonGroupClass);
      cur = cur.parentNode as HTMLElement
    ) {
      if (cur.nodeName === 'BUTTON') {
        pageToGo = cur.getAttribute('data-page');
      }
    }
    this.$emit(pageChangeEvent, pageToGo);
  }

  _jumpToPage(jumpTo: string) {
    this.$emit(pageChangeEvent, jumpTo);
  }

  _pageSizeChange(size: string) {
    this.$emit(pageSizeChangeEvent, size);
  }

  addPage(page: string, icon = '', state = '') {
    let pageToGo;
    let ariaLabel;

    if (page) {
      pageToGo = page;
      ariaLabel = `Page ${page}`;
    } else if (icon) {
      switch (icon) {
        case 'page-first':
          pageToGo = 1;
          ariaLabel = 'First page';
          break;
        case 'page-last':
          pageToGo = this.pages;
          ariaLabel = 'Last page';
          break;
        case 'chevron-left':
          pageToGo = this.currentPage - 1;
          ariaLabel = 'Previous page';
          break;
        case 'chevron-right':
          pageToGo = this.currentPage + 1;
          ariaLabel = 'Next page';
          break;
      }
    }

    return (
      <button
        data-page={pageToGo}
        class={`
        ${buttonClass}
        ${buttonFlatClass}
        ${this.inverse ? lightClass : ''}
        ${icon ? iconButtonClass : ''}
        ${page === this.currentPage.toString() ? activeClass : ''}
        ${this.size ? `-${this.size}` : ''}
        `}
        onClick={(ev: Event) => {
          ev.stopPropagation();
          this._goToPage(ev.target as HTMLElement);
        }}
        aria-label={ariaLabel}
        aria-disabled={state === 'disabled'}
        disabled={state === 'disabled'}
      >
        <div class={buttonContentClass}>
          {icon ? (
            <i
              class={`
              ${iconClass}
              icon-${icon}`}
              aria-hidden="true"
            ></i>
          ) : (
            page
          )}
        </div>
      </button>
    );
  }

  beforeMount() {
    this._pagesToRender = [];
    this.calculateDistanceFromCurrent();
    this._results =
      this.results > 0 ? (
        <div
          class={`
          ${paginationResultsClass}
          ${this.size ? `-text--${this.size}` : ''}
      `}
        >
          <span class={paginationLabelClass}>{this.results} results</span>
        </div>
      ) : null;
    this._pageSize = this.pageSize ? (
      <div
        class={`
        ${paginationPageSizeCLass}
      ${this.size ? `-text--${this.size}` : ''}
    `}
      >
        <select
          class={inputClass}
          onChange={(ev: Event) =>
            this._pageSizeChange((ev.target as HTMLSelectElement).value)
          }
          aria-label="Number of result items per page"
        >
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="all">All</option>
        </select>
        <span class={paginationLabelClass}>per page</span>
      </div>
    ) : null;
    this.goToPage =
      this.pageJumper && !this.compact ? (
        <div
          class={`
          ${paginationJumperClass}
        ${this.size ? `-text--${this.size}` : ''}
    `}
        >
          <label class={paginationLabelClass} htmlFor={this._pageJumperUuid}>
            Go to page:
          </label>
          <input
            class={`
            ${inputClass}
            ${this.size ? `-${this.size}` : ''}
            `}
            id={this._pageJumperUuid}
            type="text"
            value=""
            onChange={(ev: Event) =>
              this._jumpToPage((ev.target as HTMLInputElement).value)
            }
          />
        </div>
      ) : null;
    this._startPage = this.firstLast
      ? this.addPage('', 'page-first', this.currentPage === 1 ? 'disabled' : '')
      : null;
    this._lastPage = this.firstLast
      ? this.addPage(
          '',
          'page-last',
          this.currentPage === this.pages ? 'disabled' : ''
        )
      : null;

    if (this.compact) {
      const paginationLabel = (
        <div class={paginationLabelClass}>
          {!this.pageJumper ? <strong>{this.currentPage}</strong> : null}
          <span>of</span>
          <strong>{this.pages}</strong>
        </div>
      );
      const compactPages = this.pageJumper ? (
        <div class={paginationJumperClass}>
          <input
            type="text"
            class={inputClass}
            value={this.currentPage}
            onChange={(ev: Event) =>
              this._jumpToPage((ev.target as HTMLInputElement).value)
            }
            aria-label={`Page ${this.currentPage}`}
          />
          {paginationLabel}
        </div>
      ) : (
        paginationLabel
      );
      this._pagesToRender.push(compactPages);
    } else {
      const _pagesArray: number[] = [];
      _pagesArray.push(1);
      for (
        let pageIndex = this.currentPage - this._distanceFromCurrent;
        pageIndex <= this.currentPage + this._distanceFromCurrent;
        pageIndex++
      ) {
        if (pageIndex < this.pages && pageIndex > 1) {
          _pagesArray.push(pageIndex);
        }
      }
      _pagesArray.push(this.pages);
      for (const pageIndex of _pagesArray) {
        if (this._lastRenderedPage) {
          if (pageIndex - this._lastRenderedPage === 2) {
            this._pagesToRender.push(
              this.addPage((this._lastRenderedPage + 1).toString())
            );
          } else if (pageIndex - this._lastRenderedPage !== 1) {
            const truncateDots = (
              <div
                class={`
                  ${buttonClass}
                  ${buttonFlatClass}
                  -md
                  ${disabledClass}
                  ${this.inverse ? lightClass : ''}`}
                aria-hidden="true"
              >
                <div class={buttonContentClass}>...</div>
              </div>
            );

            this._pagesToRender.push(truncateDots);
          }
        }
        this._pagesToRender.push(this.addPage(pageIndex.toString()));
        this._lastRenderedPage = pageIndex;
      }
    }
  }

  mounted() {
    this._pageJumperUuid = this.$el.id
      ? `${this.$el.id}__page-jumper`
      : `${uuid4()}__page-jumper`;
  }

  render() {
    return (
      <nav
        class={`
      ${paginationClass}
      ${this.inverse ? inverseClass : ''}
      ${this.compact ? paginationCompactClass : ''}
    `}
        role="navigation"
        aria-label={this.ariaLabel}
      >
        <div class={paginationContentClass}>
          <div class={paginationStartClass}>
            {this._results}
            {this._pageSize}
          </div>
          <div class={paginationCenterClass}>
            <div class={buttonGroupClass}>
              {this._startPage}
              {this.addPage(
                '',
                'chevron-left',
                this.currentPage === 1 ? 'disabled' : ''
              )}
              {this._pagesToRender}
              {this.addPage(
                '',
                'chevron-right',
                this.currentPage === this.pages ? 'disabled' : ''
              )}
              {this._lastPage}
            </div>
          </div>
          <div class={paginationEndClass}>{this.goToPage}</div>
        </div>
      </nav>
    );
  }
}
