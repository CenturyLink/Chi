import { h } from "@stencil/core";
import { v4 as uuid4 } from "uuid";
export class Pagination {
    constructor() {
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
            return (h("button", { "data-page": pageToGo, class: `chi-button -flat
        ${this.inverse ? '-light' : ''}
        ${icon ? '-icon' : ''}
        ${parseInt(page) === this.currentPage ? '-active' : ''}
        ${this.size ? `-${this.size}` : ''}
        `, onClick: (ev) => {
                    ev.stopPropagation();
                    this._goToPage(ev.target);
                }, "aria-label": ariaLabel, "aria-disabled": state === 'disabled', disabled: state === 'disabled', type: "button" }, h("div", { class: "chi-button__content" }, icon ? h("i", { class: `chi-icon icon-${icon}`, "aria-hidden": "true" }) : page)));
        };
        const results = this.results > 0 ? (h("div", { class: `chi-pagination__results
        ${this.size ? `-text--${this.size}` : ''}
      ` }, h("span", { class: "chi-pagination__label" }, this.results, " results"))) : null;
        const pageSize = this.pageSize ? (h("div", { class: `chi-pagination__page-size
      ${this.size ? `-text--${this.size}` : ''}
    ` }, h("select", { class: "chi-input", onChange: (ev) => this._pageSizeChange(ev.target.value), "aria-label": "Number of result items per page" }, h("option", { value: "20" }, "20"), h("option", { value: "40" }, "40"), h("option", { value: "60" }, "60"), h("option", { value: "80" }, "80"), h("option", { value: "all" }, "All")), h("span", { class: "chi-pagination__label" }, "per page"))) : null;
        const goToPage = this.pageJumper && !this.compact ? (h("div", { class: `chi-pagination__jumper
        ${this.size ? `-text--${this.size}` : ''}
    ` }, h("label", { class: "chi-pagination__label", htmlFor: this._pageJumperUuid }, "Go to page:"), h("input", { class: `chi-input
        ${this.size ? `-${this.size}` : ''}
        `, id: this._pageJumperUuid, type: "text", value: "", onChange: (ev) => this._jumpToPage(ev.target.value) }))) : null;
        const startPage = this.firstLast ? addPage('', 'page-first', this.currentPage === 1 ? 'disabled' : '') : null;
        const lastPage = this.firstLast
            ? addPage('', 'page-last', this.currentPage === this.pages ? 'disabled' : '')
            : null;
        if (this.compact) {
            const paginationLabel = (h("div", { class: "chi-pagination__label" }, !this.pageJumper ? h("strong", null, this.currentPage) : null, h("span", null, "of"), h("strong", null, this.pages)));
            const compactPages = this.pageJumper ? (h("div", { class: "chi-pagination__jumper" }, h("input", { type: "text", class: "chi-input", value: this.currentPage, onChange: (ev) => this._jumpToPage(ev.target.value), "aria-label": `Page ${this.currentPage}` }), paginationLabel)) : (paginationLabel);
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
                        const truncateDots = (h("div", { class: `chi-button -flat -md -disabled ${this.inverse ? '-light' : ''}`, "aria-hidden": "true" }, h("div", { class: "chi-button__content" }, "...")));
                        this._pagesToRender.push(truncateDots);
                    }
                }
                this._pagesToRender.push(addPage(pageIndex));
                this._lastRenderedPage = pageIndex;
            }
        }
        return (h("nav", { class: `
        chi-pagination
        ${this.inverse ? '-inverse' : ''}
        ${this.compact ? '-compact' : ''}
      `, role: "navigation", "aria-label": this.ariaLabel }, h("div", { class: "chi-pagination__content" }, h("div", { class: "chi-pagination__start" }, results, pageSize), h("div", { class: "chi-pagination__center" }, h("div", { class: "chi-button-group" }, startPage, addPage('', 'chevron-left', this.currentPage === 1 ? 'disabled' : ''), this._pagesToRender, addPage('', 'chevron-right', this.currentPage === this.pages ? 'disabled' : ''), lastPage)), h("div", { class: "chi-pagination__end" }, goToPage))));
    }
    static get is() { return "chi-pagination"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pagination.css"]
        };
    }
    static get properties() {
        return {
            "pages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define number of pages to render"
                },
                "attribute": "pages",
                "reflect": false
            },
            "firstLast": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To add First page / Last page icon buttons"
                },
                "attribute": "first-last",
                "reflect": false,
                "defaultValue": "false"
            },
            "inverse": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To render inverse styled pagination"
                },
                "attribute": "inverse",
                "reflect": false,
                "defaultValue": "false"
            },
            "currentPage": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define current page of pagination"
                },
                "attribute": "current-page",
                "reflect": false,
                "defaultValue": "1"
            },
            "results": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To show number of result items"
                },
                "attribute": "results",
                "reflect": false,
                "defaultValue": "0"
            },
            "pageSize": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To allow use select number of items to show per page"
                },
                "attribute": "page-size",
                "reflect": false,
                "defaultValue": "false"
            },
            "pageJumper": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To add jump to page text input"
                },
                "attribute": "page-jumper",
                "reflect": false,
                "defaultValue": "false"
            },
            "compact": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define compact style of pagination"
                },
                "attribute": "compact",
                "reflect": false,
                "defaultValue": "false"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define aria label of pagination"
                },
                "attribute": "aria-label",
                "reflect": false,
                "defaultValue": "'Pagination'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "To define size of pagination elements"
                },
                "attribute": "size",
                "reflect": false,
                "defaultValue": "'md'"
            }
        };
    }
    static get events() {
        return [{
                "method": "chiPageChange",
                "name": "chiPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user navigates to another page by clicking pagination item buttons or changing value of Page Jumper input"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "chiPageSizeChange",
                "name": "chiPageSizeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered when the user changes items per page value"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
