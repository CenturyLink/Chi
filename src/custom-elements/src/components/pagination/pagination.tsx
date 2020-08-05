import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { uuid4 } from '../../utils/utils';

@Component({
  tag: 'chi-pagination',
  styleUrl: 'pagination.scss',
  scoped: true
})

export class Pagination {
  @Element() el: HTMLElement;
  /**
   * To define number of pages to render
   */
  @Prop() pages: number;
  /**
   * To add First page / Last page icon buttons
   */
  @Prop() firstLast = false;
  /**
   * To render inverse styled pagination
   */
  @Prop() inverse = false;
  /**
   * To define current page of pagination
   */
  @Prop() currentPage = 1;
  /**
   * To show number of result items
   */
  @Prop() results = 0;
  /**
   * To allow use select number of items to show per page
   */
  @Prop() pageSize = false;
  /**
   * To add jump to page text input
   */
  @Prop() pageJumper = false;
  /**
   * To define compact style of pagination
   */
  @Prop() compact = false;
  /**
   * To define aria label of pagination
   */
  @Prop() ariaLabel = 'Pagination';
  /**
   * To define size of pagination elements
   */
  @Prop() size = 'md';
  /**
   * Triggered when the user navigates to another page by clicking pagination item buttons or changing value of Page Jumper input
   */
  @Event() chiPageChange: EventEmitter<string>;
  /**
   * Triggered when the user changes items per page value
   */
  @Event() chiPageSizeChange: EventEmitter<string>;

  _distanceFromCurrent: number;
  _pagesArray = [];
  _pagesToRender = [];
  _lastRenderedPage = null;
  _pageJumperUuid: string;

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

    for (let cur = pageChange;
      cur && !cur.classList.contains('chi-button-group');
      cur = cur.parentNode as HTMLElement) {
      if (cur.nodeName === 'BUTTON') {
        pageToGo = cur.getAttribute('data-page');
      }
    }
    this.chiPageChange.emit(pageToGo);
  }

  _jumpToPage(jumpTo: string) {
    this.chiPageChange.emit(jumpTo);
  }

  _pageSizeChange(size: string) {
    this.chiPageSizeChange.emit(size);
  }

  componentWillLoad() {
    this.calculateDistanceFromCurrent();
    this._pageJumperUuid = this.el.id ? `${this.el.id}__page-jumper` : `${uuid4()}__page-jumper`;
  }

  componentWillUpdate() {
    this.calculateDistanceFromCurrent();
    this._pagesArray = [];
    this._pagesToRender = [];
    this._lastRenderedPage = 0;
  }

  render() {
    const addPage = (page, icon = null, state = '') => {
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

      return <button
        data-page={pageToGo}
        class={
          `chi-button -flat
        ${this.inverse ? '-light' : ''}
        ${!!icon ? '-icon' : ''}
        ${parseInt(page) === this.currentPage ? '-active' : ''}
        ${this.size ? `-${this.size}` : ''}
        `}
        onClick={(ev) => {
          ev.stopPropagation();
          this._goToPage(ev.target as HTMLElement);
        }
        }
        aria-label={ariaLabel}
        aria-disabled={state === 'disabled'}
        disabled={state === 'disabled'}
      >
        <div class="chi-button__content">
          {!!icon ? <i class={`chi-icon icon-${icon}`} aria-hidden="true"></i> : page}
        </div>
      </button>
    };
    const results = this.results > 0 ?
      <div class={`chi-pagination__results
        ${this.size ? `-text--${this.size}` : ''}
      `}>
        <span class="chi-pagination__label">{this.results} results</span>
      </div>
      : null;
    const pageSize = this.pageSize ? <div class={`chi-pagination__page-size
      ${this.size ? `-text--${this.size}` : ''}
    `}>
      <select
        class="chi-input"
        onChange={(ev) => this._pageSizeChange((ev.target as HTMLSelectElement).value)}
        aria-label="Number of result items per page"
      >
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="all">All</option>
      </select>
      <span class="chi-pagination__label">per page</span>
    </div> : null;
    const goToPage = this.pageJumper && !this.compact ? <div class={`chi-pagination__jumper
        ${this.size ? `-text--${this.size}` : ''}
    `}>
      <label class="chi-pagination__label" htmlFor={this._pageJumperUuid}>Go to page:</label>
      <input class={`chi-input
        ${this.size ? `-${this.size}` : ''}
        `}
         id={this._pageJumperUuid}
         type="text"
         value=""
         onChange={(ev) => this._jumpToPage((ev.target as HTMLInputElement).value)}
      />
    </div> : null;
    const startPage = this.firstLast ? addPage('', 'page-first', this.currentPage === 1 ? 'disabled' : '') : null;
    const lastPage = this.firstLast ? addPage('', 'page-last', this.currentPage === this.pages ? 'disabled' : '') : null;

    if (this.compact) {
      const paginationLabel = <div class="chi-pagination__label">
        {!this.pageJumper ? <strong>{this.currentPage}</strong> : null}
        <span>of</span>
        <strong>{this.pages}</strong>
      </div>;
      const compactPages = this.pageJumper ?
        <div class="chi-pagination__jumper">
          <input
            type="text"
            class="chi-input"
            value={this.currentPage}
            onChange={(ev) => this._jumpToPage((ev.target as HTMLInputElement).value)}
            aria-label={`Page ${this.currentPage}`}
          />
          {paginationLabel}
        </div> :
        paginationLabel;

      this._pagesToRender.push(compactPages);
    } else {
      this._pagesArray.push(1);
      for (let pageIndex = this.currentPage - this._distanceFromCurrent; pageIndex <= this.currentPage + this._distanceFromCurrent; pageIndex++) {
        if (pageIndex < this.pages && pageIndex > 1) {
          this._pagesArray.push(pageIndex);
        }
      }
      this._pagesArray.push(this.pages);
      for (let pageIndex of this._pagesArray) {
        if (this._lastRenderedPage) {
          if (pageIndex - this._lastRenderedPage === 2) {
            this._pagesToRender.push(addPage(this._lastRenderedPage + 1));
          } else if (pageIndex - this._lastRenderedPage !== 1) {
            const truncateDots = <div class={`chi-button -flat -md -disabled ${this.inverse ? '-light' : ''}`} aria-hidden="true"><div
              class="chi-button__content">...</div></div>;

            this._pagesToRender.push(truncateDots);
          }
        }
        this._pagesToRender.push(addPage(pageIndex));
        this._lastRenderedPage = pageIndex;
      }
    }

    return <nav
      class={`
        chi-pagination
        ${this.inverse ? '-inverse' : ''}
        ${this.compact ? '-compact' : ''}
      `}
      role="navigation"
      aria-label={this.ariaLabel}>
      <div class="chi-pagination__content">
        <div class="chi-pagination__start">
          {results}
          {pageSize}
        </div>
        <div class="chi-pagination__center">
          <div class="chi-button-group">
            {startPage}
            {addPage('', 'chevron-left', this.currentPage === 1 ? 'disabled' : '')}
            {this._pagesToRender}
            {addPage('', 'chevron-right', this.currentPage === this.pages ? 'disabled' : '')}
            {lastPage}
          </div>
        </div>
        <div class="chi-pagination__end">
          {goToPage}
        </div>
      </div>
    </nav>;
  }
}
