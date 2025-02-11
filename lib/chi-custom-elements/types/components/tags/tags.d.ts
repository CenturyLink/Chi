import { EventEmitter } from '../../stencil-public-runtime';
import { Tag } from '../../constants/types';
export declare class Tags {
    el: HTMLElement;
    /**
     * To define placeholder of Text input
     */
    placeholder: string;
    /**
     * To add tags
     */
    tags: Tag[];
    /**
     * To define -hover, -focus statuses
     */
    _status: string;
    /**
     * Triggered when the user selects or deselects an option
     */
    chiChange: EventEmitter<Tag[]>;
    _tags: Tag[];
    componentWillLoad(): void;
    updateTags(newValue: Tag[]): void;
    _focusInput(): void;
    _onKeyDown(ev: KeyboardEvent): void;
    _onDeleteTag(deleteTag: Tag): void;
    _getTagElement(tag: Tag): any;
    _getInput(): any;
    render(): any;
}
