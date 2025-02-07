'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1c2d46a0.js');
const v4 = require('./v4-daefbed8.js');

const paginationCss = "";
const ChiPaginationStyle0 = paginationCss;

const Pagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chiPageChange = index.createEvent(this, "chiPageChange", 7);
        this.chiPageSizeChange = index.createEvent(this, "chiPageSizeChange", 7);
        this._pagesArray = [];
        this._pagesToRender = [];
        this._lastRenderedPage = null;
        this.pages = undefined;
        this.firstLast = false;
        this.inverse = false;
        this.currentPage = 1;
        this.results = 0;
        this.pageSize = false;
        this.pageJumper = false;
        this.compact = false;
        this.ariaLabel = 'Pagination';
        this.size = 'md';
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
    _goToPage(pageChange) {
        let pageToGo;
        for (let cur = pageChange; cur && !cur.classList.contains('chi-button-group'); cur = cur.parentNode) {
            if (cur.nodeName === 'BUTTON') {
                pageToGo = cur.getAttribute('data-page');
            }
        }
        this.chiPageChange.emit(pageToGo);
    }
    _jumpToPage(jumpTo) {
        this.chiPageChange.emit(jumpTo);
    }
    _pageSizeChange(size) {
        this.chiPageSizeChange.emit(size);
    }
    componentWillLoad() {
        this.calculateDistanceFromCurrent();
        this._pageJumperUuid = this.el.id ? `${this.el.id}__page-jumper` : `${v4.v4()}__page-jumper`;
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
            }
            else if (icon) {
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
            return (index.h("button", { "data-page": pageToGo, class: `chi-button -flat
        ${this.inverse ? '-light' : ''}
        ${icon ? '-icon' : ''}
        ${parseInt(page) === this.currentPage ? '-active' : ''}
        ${this.size ? `-${this.size}` : ''}
        `, onClick: (ev) => {
                    ev.stopPropagation();
                    this._goToPage(ev.target);
                }, "aria-label": ariaLabel, "aria-disabled": state === 'disabled', disabled: state === 'disabled', type: "button" }, index.h("div", { class: "chi-button__content" }, icon ? index.h("i", { class: `chi-icon icon-${icon}`, "aria-hidden": "true" }) : page)));
        };
        const results = this.results > 0 ? (index.h("div", { class: `chi-pagination__results
        ${this.size ? `-text--${this.size}` : ''}
      ` }, index.h("span", { class: "chi-pagination__label" }, this.results, " results"))) : null;
        const pageSize = this.pageSize ? (index.h("div", { class: `chi-pagination__page-size
      ${this.size ? `-text--${this.size}` : ''}
    ` }, index.h("select", { class: "chi-input", onChange: (ev) => this._pageSizeChange(ev.target.value), "aria-label": "Number of result items per page" }, index.h("option", { value: "20" }, "20"), index.h("option", { value: "40" }, "40"), index.h("option", { value: "60" }, "60"), index.h("option", { value: "80" }, "80"), index.h("option", { value: "all" }, "All")), index.h("span", { class: "chi-pagination__label" }, "per page"))) : null;
        const goToPage = this.pageJumper && !this.compact ? (index.h("div", { class: `chi-pagination__jumper
        ${this.size ? `-text--${this.size}` : ''}
    ` }, index.h("label", { class: "chi-pagination__label", htmlFor: this._pageJumperUuid }, "Go to page:"), index.h("input", { class: `chi-input
        ${this.size ? `-${this.size}` : ''}
        `, id: this._pageJumperUuid, type: "text", value: "", onChange: (ev) => this._jumpToPage(ev.target.value) }))) : null;
        const startPage = this.firstLast ? addPage('', 'page-first', this.currentPage === 1 ? 'disabled' : '') : null;
        const lastPage = this.firstLast
            ? addPage('', 'page-last', this.currentPage === this.pages ? 'disabled' : '')
            : null;
        if (this.compact) {
            const paginationLabel = (index.h("div", { class: "chi-pagination__label" }, !this.pageJumper ? index.h("strong", null, this.currentPage) : null, index.h("span", null, "of"), index.h("strong", null, this.pages)));
            const compactPages = this.pageJumper ? (index.h("div", { class: "chi-pagination__jumper" }, index.h("input", { type: "text", class: "chi-input", value: this.currentPage, onChange: (ev) => this._jumpToPage(ev.target.value), "aria-label": `Page ${this.currentPage}` }), paginationLabel)) : (paginationLabel);
            this._pagesToRender.push(compactPages);
        }
        else {
            this._pagesArray.push(1);
            for (let pageIndex = this.currentPage - this._distanceFromCurrent; pageIndex <= this.currentPage + this._distanceFromCurrent; pageIndex++) {
                if (pageIndex < this.pages && pageIndex > 1) {
                    this._pagesArray.push(pageIndex);
                }
            }
            this._pagesArray.push(this.pages);
            for (const pageIndex of this._pagesArray) {
                if (this._lastRenderedPage) {
                    if (pageIndex - this._lastRenderedPage === 2) {
                        this._pagesToRender.push(addPage(this._lastRenderedPage + 1));
                    }
                    else if (pageIndex - this._lastRenderedPage !== 1) {
                        const truncateDots = (index.h("div", { class: `chi-button -flat -md -disabled ${this.inverse ? '-light' : ''}`, "aria-hidden": "true" }, index.h("div", { class: "chi-button__content" }, "...")));
                        this._pagesToRender.push(truncateDots);
                    }
                }
                this._pagesToRender.push(addPage(pageIndex));
                this._lastRenderedPage = pageIndex;
            }
        }
        return (index.h("nav", { class: `
        chi-pagination
        ${this.inverse ? '-inverse' : ''}
        ${this.compact ? '-compact' : ''}
      `, role: "navigation", "aria-label": this.ariaLabel }, index.h("div", { class: "chi-pagination__content" }, index.h("div", { class: "chi-pagination__start" }, results, pageSize), index.h("div", { class: "chi-pagination__center" }, index.h("div", { class: "chi-button-group" }, startPage, addPage('', 'chevron-left', this.currentPage === 1 ? 'disabled' : ''), this._pagesToRender, addPage('', 'chevron-right', this.currentPage === this.pages ? 'disabled' : ''), lastPage)), index.h("div", { class: "chi-pagination__end" }, goToPage))));
    }
    get el() { return index.getElement(this); }
};
Pagination.style = ChiPaginationStyle0;

exports.chi_pagination = Pagination;
