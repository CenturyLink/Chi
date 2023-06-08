import { Emit, Prop } from 'vue-property-decorator';
import { uuid4 } from '@/utils/utils';
import {
  ACTIVE_CLASS,
  INVERSE_CLASS,
  BUTTON_CLASSES,
  BUTTON_GROUP_CLASSES,
  LIGHT_CLASS,
  DISABLED_CLASS,
  ICON_CLASS,
  PAGINATION_CLASSES,
  INPUT_CLASSES,
} from '@/constants/classes';
import { PaginationSizes } from '@/constants/types';
import { PAGINATION_EVENTS } from '@/constants/events';
import { Component, Vue } from '@/build/vue-wrapper';

@Component({})
export default class Pagination extends Vue {
  @Prop() ariaLabel!: boolean;
  @Prop() currentPage!: number;
  @Prop() compact!: boolean;
  @Prop() firstLast!: boolean;
  @Prop() inverse!: boolean;
  @Prop() pages!: number;
  @Prop() pageSize!: number;
  @Prop() pageJumper!: number;
  @Prop() portal?: boolean;
  @Prop() results!: number;
  @Prop() size!: PaginationSizes;

  _pageJumperUuid!: string;
  _distanceFromCurrent!: number;

  @Emit(PAGINATION_EVENTS.PAGE_CHANGE)
  _emitPageChange(page: number | null) {
    return page;
  }

  @Emit(PAGINATION_EVENTS.PAGE_SIZE)
  _emitPageSize(page: string) {
    return page;
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
      cur && !cur.classList.contains(BUTTON_GROUP_CLASSES);
      cur = cur.parentNode as HTMLElement
    ) {
      if (cur.nodeName === 'BUTTON') {
        pageToGo = cur.dataset.page ? parseInt(cur.dataset.page) : null;
      }
    }

    this._emitPageChange(pageToGo);
  }

  _jumpToPage(jumpTo: number) {
    this._emitPageChange(jumpTo);
  }

  _pageSizeChange(size: string) {
    this._emitPageSize(size);
  }

  addPage(page: number | null, icon = '', state = '') {
    let pageToGo: number | null = null;
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
    const disabledAriaDisabledState = state === 'disabled' ? true : undefined;

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
        aria-disabled={disabledAriaDisabledState}
        disabled={state === 'disabled'}>
        <div class={BUTTON_CLASSES.CONTENT}>
          {icon ? (
            <i
              class={`
              ${ICON_CLASS}
              icon-${icon}`}
              aria-hidden="true"
            />
          ) : (
            page
          )}
        </div>
      </button>
    );
  }

  beforeMount() {
    this._pageJumperUuid = `${uuid4()}__page-jumper`;
  }

  render() {
    const pagesToRender: JSX.Element[] = [];

    this.calculateDistanceFromCurrent();
    const results =
      this.results > 0 ? (
        <div
          class={`
          ${PAGINATION_CLASSES.RESULTS}
          ${this.size ? `-text--${this.size}` : ''}
      `}>
          <span class={PAGINATION_CLASSES.LABEL}>{this.results} results</span>
        </div>
      ) : null;
    const pageSize = this.pageSize ? (
      <div
        class={`
        ${PAGINATION_CLASSES.PAGE_SIZE}
      ${this.size ? `-text--${this.size}` : ''}
    `}>
        <select
          class={INPUT_CLASSES.INPUT}
          onChange={(ev: Event) => {
            this._pageSizeChange((ev.target as HTMLSelectElement).value);
          }}
          aria-label="Number of result items per page">
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="all">All</option>
        </select>
        <span class={PAGINATION_CLASSES.LABEL}>per page</span>
      </div>
    ) : null;
    const goToPage =
      this.pageJumper && !this.compact ? (
        <div
          class={`
          ${PAGINATION_CLASSES.JUMPER}
        ${this.size ? `-text--${this.size}` : ''}
    `}>
          <label class={PAGINATION_CLASSES.LABEL} for={this._pageJumperUuid}>
            Go to page:
          </label>
          <input
            class={`
          ${INPUT_CLASSES.INPUT}
          ${this.size ? `-${this.size}` : ''}
          `}
            id={this._pageJumperUuid}
            type="text"
            value=""
            onChange={(ev: Event) => this._jumpToPage(Number((ev.target as HTMLInputElement).value))}
          />
        </div>
      ) : null;
    const startPage = this.firstLast
      ? this.addPage(null, 'page-first', this.currentPage === 1 ? 'disabled' : '')
      : null;
    const lastPage = this.firstLast
      ? this.addPage(null, 'page-last', this.currentPage === this.pages ? 'disabled' : '')
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
            class={INPUT_CLASSES.INPUT}
            value={this.currentPage}
            onChange={(ev: Event) => {
              if (ev.target) {
                const inputElement = ev.target as HTMLInputElement;
                const jumpToPage = parseInt(inputElement.value);

                if (jumpToPage >= 1 && jumpToPage <= this.pages) {
                  this._jumpToPage(Number(inputElement.value));
                } else {
                  inputElement.value = String(this.currentPage);
                }
              }
            }}
            aria-label={`Page ${this.currentPage}`}
          />
          {paginationLabel}
        </div>
      ) : (
        paginationLabel
      );

      pagesToRender.push(compactPages);
    } else {
      const _pagesArray: number[] = [];

      if (this.pages !== 1) {
        _pagesArray.push(1);
      }

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

      let lastRenderedPage = 0;

      for (const pageIndex of _pagesArray) {
        if (lastRenderedPage) {
          if (pageIndex - lastRenderedPage === 2) {
            pagesToRender.push(this.addPage(lastRenderedPage + 1));
          } else if (pageIndex !== 1 && pageIndex - lastRenderedPage !== 1) {
            const truncateDots = (
              <div
                class={`
                  ${BUTTON_CLASSES.BUTTON}
                  ${BUTTON_CLASSES.FLAT}
                  -md
                  ${DISABLED_CLASS}
                  ${this.inverse ? LIGHT_CLASS : ''}`}
                aria-hidden="true">
                <div class={BUTTON_CLASSES.CONTENT}>...</div>
              </div>
            );

            pagesToRender.push(truncateDots);
          }
        }
        pagesToRender.push(this.addPage(pageIndex));
        lastRenderedPage = pageIndex;
      }
    }

    return (
      <nav
        class={`${PAGINATION_CLASSES.PAGINATION} ${this.inverse ? INVERSE_CLASS : ''} ${
          this.compact ? PAGINATION_CLASSES.COMPACT : ''
        }`}
        role="navigation">
        <div class={PAGINATION_CLASSES.CONTENT}>
          <div class={PAGINATION_CLASSES.START}>
            {results}
            {pageSize}
          </div>
          <div class={PAGINATION_CLASSES.CENTER}>
            <div class={BUTTON_GROUP_CLASSES}>
              {startPage}
              {this.addPage(null, 'chevron-left', this.currentPage === 1 ? 'disabled' : '')}
              {pagesToRender}
              {this.addPage(null, 'chevron-right', this.currentPage === this.pages ? 'disabled' : '')}
              {lastPage}
            </div>
          </div>
          <div class={PAGINATION_CLASSES.END}>{goToPage}</div>
        </div>
      </nav>
    );
  }
}
