import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';

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
  @Prop() perPage = false;
  /**
   * To add jump to page text input
   */
  @Prop() goTo = false;
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

  distanceFromCurrent;
  pagesArray = [];
  pagesToRender = [];
  l = null;

  calculateDistanceFromCurrent() {
    if (this.currentPage === 1) {
      this.distanceFromCurrent = 4;
    } else if (this.currentPage === 2) {
      this.distanceFromCurrent = 3;
    } else {
      this.distanceFromCurrent = 2;
    }
  }

  _goToPage(pageChange: HTMLElement) {
    let pageToGo;

    for (let cur = pageChange;
         cur && !cur.classList.contains('chi-button-group');
         cur = cur.parentNode as HTMLElement) {
      if (cur.nodeName === 'A') {
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
    this.calculateDistanceFromCurrent()
  }

  componentWillUpdate() {
    this.calculateDistanceFromCurrent();
    this.pagesArray = [];
    this.pagesToRender = [];
    this.l = 0;
  }

  render() {
    const addPage = (page, icon = null, state = '') => {
      let pageToGo;

      if (page) {
        pageToGo = page;
      } else if (!page && icon) {
        if (icon === 'first-page') {
          pageToGo = 1;
        } else if (icon === 'last-page') {
          pageToGo = this.pages;
        } else if (icon === 'chevron-left') {
          pageToGo = this.currentPage - 1;
        } else if (icon === 'chevron-right') {
          pageToGo = this.currentPage + 1;
        }
      }

      return <a
        data-page={pageToGo}
        class={
        `chi-button -flat
        ${this.inverse ? '-light' : ''}
        ${icon ? '-icon' : ''}
        ${parseInt(page) === this.currentPage ? '-active' : ''}
        ${state}
        ${this.size ? `-${this.size}` : ''}
        `}
        onClick={(ev) => {
            ev.stopPropagation();
            this._goToPage(ev.target as HTMLElement);
          }
        }
      >
        <div class="chi-button__content">
          {icon ? <i class={`chi-icon icon-${icon}`} aria-hidden="true"></i> : page}
        </div>
      </a>
    };
    const results = this.results > 0 ?
      <div class={`chi-pagination__results
        ${this.size ? `-text--${this.size}` : ''}
      `}>
        <span class="chi-pagination__label">{this.results} results</span>
      </div>
      : null;
    const perPage = this.perPage ? <div class={`chi-pagination__page-size
      ${this.size ? `-text--${this.size}` : ''}
    `}>
      <select
        class="chi-input"
        onChange={(ev) => this._pageSizeChange((ev.target as HTMLSelectElement).value)}
      >
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
        <option value="all">All</option>
      </select>
      <span class="chi-pagination__label">per page</span>
    </div> : null;
    const goToPage = this.goTo && !this.compact ? <div class={`chi-pagination__jumper
        ${this.size ? `-text--${this.size}` : ''}
    `}>
      <label class="chi-pagination__label">Go to page:</label>
      <input class={`chi-input
        ${this.size ? `-${this.size}` : ''}
      `}
        type="text"
        onChange={(ev) => this._jumpToPage((ev.target as HTMLInputElement).value)}
      />
    </div> : null;
    const startPage = this.firstLast ? addPage('','page-first', this.currentPage === 1 ? '-disabled' : '') : null;
    const lastPage = this.firstLast ? addPage('','page-last', this.currentPage === this.pages ? '-disabled' : '') : null;

    if (this.compact) {
      const paginationLabel = <div class="chi-pagination__label">
        {!this.goTo ? <strong>{this.currentPage}</strong> : null}
        <span>of</span>
        <strong>{this.pages}</strong>
      </div>;
      const compactPages = this.goTo ?
        <div class="chi-pagination__jumper">
          <input
            type="text"
            class="chi-input"
            value={this.currentPage}
            onChange={(ev) => this._jumpToPage((ev.target as HTMLInputElement).value)}
          />
          {paginationLabel}
        </div> :
        paginationLabel;

      this.pagesToRender.push(compactPages);
    } else {
      this.pagesArray.push(1);
      for (let i = this.currentPage - this.distanceFromCurrent; i <= this.currentPage + this.distanceFromCurrent; i++) {
        if (i < this.pages && i > 1) {
          this.pagesArray.push(i);
        }
      }
      this.pagesArray.push(this.pages);

      for (let i of this.pagesArray) {
        if (this.l) {
          if (i - this.l === 2) {
            this.pagesToRender.push(addPage(this.l + 1));
          } else if (i - this.l !== 1) {
            this.pagesToRender.push(addPage('...'));
          }
        }
        this.pagesToRender.push(addPage(i));
        this.l = i;
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
          {perPage}
        </div>
        <div class="chi-pagination__center">
          <div class="chi-button-group">
            {startPage}
            {addPage('', 'chevron-left', this.currentPage === 1 ? '-disabled' : '')}
            {this.pagesToRender}
            {addPage('', 'chevron-right', this.currentPage === this.pages ? '-disabled' : '')}
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
