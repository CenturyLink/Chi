import { Component, Prop, Vue } from 'vue-property-decorator';
import { uuid4 } from '../../utils/utils';
import {
  ACTIVE_CLASS,
  INVERSE_CLASS,
  BUTTON_CLASSES,
  buttonGroupClass,
  LIGHT_CLASS,
  DISABLED_CLASS,
  iconClass,
  PAGINATION_CLASSES,
  inputClass
} from '../../constants/classes';
import { PaginationSizes } from '../../constants/types';
import { PAGINATION_EVENTS } from '../../constants/events';

@Component
export default class Pagination extends Vue {
  @Prop() ariaLabel!: boolean;
  @Prop() currentPage!: number;
  @Prop() compact!: boolean;
  @Prop() firstLast!: boolean;
  @Prop() inverse!: boolean;
  @Prop() pages!: number;
  @Prop() pageSize!: number;
  @Prop() pageJumper!: number;
  @Prop() results!: number;
  @Prop() size!: PaginationSizes;

  _pageJumperUuid!: string;
  _distanceFromCurrent!: number;
  _lastRenderedPage!: number;
  _pagesToRender: JSX.Element[] = [];
  _startPage!: JSX.Element | null;
  _lastPage!: JSX.Element | null;
  _results!: JSX.Element | null;
  _pageSize!: JSX.Element | null;
  goToPage!: JSX.Element | null;

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
    let pageToGo: number | null = null;

    for (
      let cur = pageChange;
      cur && !cur.classList.contains(buttonGroupClass);
      cur = cur.parentNode as HTMLElement
    ) {
      if (cur.nodeName === 'BUTTON') {
        pageToGo = cur.dataset.page ? parseInt(cur.dataset.page) : null;
      }
    }
    this.$emit(PAGINATION_EVENTS.PAGE_CHANGE, pageToGo);
  }

  _jumpToPage(jumpTo: string) {
    this.$emit(PAGINATION_EVENTS.PAGE_CHANGE, jumpTo);
  }

  _pageSizeChange(size: string) {
    this.$emit(PAGINATION_EVENTS.PAGE_SIZE, size);
  }

  addPage(page: number | null, icon = '', state = '') {
    let pageToGo : number | null = null;
    let ariaLabel = '';

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
        ${BUTTON_CLASSES.BUTTON}
        ${BUTTON_CLASSES.FLAT}
        ${this.inverse ? LIGHT_CLASS : ''}
        ${icon ? BUTTON_CLASSES.ICON_BUTTON : ''}
        ${page === this.currentPage ? ACTIVE_CLASS : ''}
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
        <div class={BUTTON_CLASSES.CONTENT}>
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
          ${PAGINATION_CLASSES.RESULTS}
          ${this.size ? `-text--${this.size}` : ''}
      `}
        >
          <span class={PAGINATION_CLASSES.LABEL}>{this.results} results</span>
        </div>
      ) : null;
    this._pageSize = this.pageSize ? (
      <div
        class={`
        ${PAGINATION_CLASSES.PAGE_SIZE}
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
        <span class={PAGINATION_CLASSES.LABEL}>per page</span>
      </div>
    ) : null;
    this.goToPage =
      this.pageJumper && !this.compact ? (
        <div
          class={`
          ${PAGINATION_CLASSES.JUMPER}
        ${this.size ? `-text--${this.size}` : ''}
    `}
        >
          <label class={PAGINATION_CLASSES.LABEL}
            htmlFor={this._pageJumperUuid}>
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
      ? this.addPage(null, 'page-first', this.currentPage === 1 ? 'disabled' : '')
      : null;
    this._lastPage = this.firstLast
      ? this.addPage(
        null,
          'page-last',
          this.currentPage === this.pages ? 'disabled' : ''
        )
      : null;

    if (this.compact) {
      const paginationLabel = (
        <div class={PAGINATION_CLASSES.LABEL}>
          {!this.pageJumper ? <strong>{this.currentPage}</strong> : null}
          <span>of</span>
          <strong>{this.pages}</strong>
        </div>
      );
      const compactPages = this.pageJumper ? (
        <div class={PAGINATION_CLASSES.JUMPER}>
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
              this.addPage(this._lastRenderedPage + 1)
            );
          } else if (pageIndex - this._lastRenderedPage !== 1) {
            const truncateDots = (
              <div
                class={`
                  ${BUTTON_CLASSES.BUTTON}
                  ${BUTTON_CLASSES.FLAT}
                  -md
                  ${DISABLED_CLASS}
                  ${this.inverse ? LIGHT_CLASS : ''}`}
                aria-hidden="true"
              >
                <div class={BUTTON_CLASSES.CONTENT}>...</div>
              </div>
            );

            this._pagesToRender.push(truncateDots);
          }
        }
        this._pagesToRender.push(this.addPage(pageIndex));
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
      ${PAGINATION_CLASSES.PAGINATION}
      ${this.inverse ? INVERSE_CLASS : ''}
      ${this.compact ? PAGINATION_CLASSES.COMPACT : ''}
    `}
        role="navigation"
        aria-label={this.ariaLabel}
      >
        <div class={PAGINATION_CLASSES.CONTENT}>
          <div class={PAGINATION_CLASSES.START}>
            {this._results}
            {this._pageSize}
          </div>
          <div class={PAGINATION_CLASSES.CENTER}>
            <div class={buttonGroupClass}>
              {this._startPage}
              {this.addPage(
                null,
                'chevron-left',
                this.currentPage === 1 ? 'disabled' : ''
              )}
              {this._pagesToRender}
              {this.addPage(
                null,
                'chevron-right',
                this.currentPage === this.pages ? 'disabled' : ''
              )}
              {this._lastPage}
            </div>
          </div>
          <div class={PAGINATION_CLASSES.END}>{this.goToPage}</div>
        </div>
      </nav>
    );
  }
}
