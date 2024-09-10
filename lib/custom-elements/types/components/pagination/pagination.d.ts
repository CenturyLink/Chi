import { EventEmitter } from '../../stencil-public-runtime';
export declare class Pagination {
    el: HTMLElement;
    /**
     * To define number of pages to render
     */
    pages: number;
    /**
     * To add First page / Last page icon buttons
     */
    firstLast: boolean;
    /**
     * To render inverse styled pagination
     */
    inverse: boolean;
    /**
     * To define current page of pagination
     */
    currentPage: number;
    /**
     * To show number of result items
     */
    results: number;
    /**
     * To allow use select number of items to show per page
     */
    pageSize: boolean;
    /**
     * To add jump to page text input
     */
    pageJumper: boolean;
    /**
     * To define compact style of pagination
     */
    compact: boolean;
    /**
     * To define aria label of pagination
     */
    ariaLabel: string;
    /**
     * To define size of pagination elements
     */
    size: string;
    /**
     * Triggered when the user navigates to another page by clicking pagination item buttons or changing value of Page Jumper input
     */
    chiPageChange: EventEmitter<string>;
    /**
     * Triggered when the user changes items per page value
     */
    chiPageSizeChange: EventEmitter<string>;
    _distanceFromCurrent: number;
    _pagesArray: any[];
    _pagesToRender: any[];
    _lastRenderedPage: any;
    _pageJumperUuid: string;
    calculateDistanceFromCurrent(): void;
    _goToPage(pageChange: HTMLElement): void;
    _jumpToPage(jumpTo: string): void;
    _pageSizeChange(size: string): void;
    componentWillLoad(): void;
    componentWillUpdate(): void;
    render(): any;
}
