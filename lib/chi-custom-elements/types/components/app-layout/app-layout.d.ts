import { EventEmitter } from '../../stencil-public-runtime';
import { AppLayoutFormats } from '../../constants/constants';
export declare class AppLayout {
    el: any;
    /**
     *  to set app layout format { base, no-margin, fixed-width }.
     */
    format: AppLayoutFormats;
    /**
     *  To define app layout back link
     */
    backlink: string;
    /**
     *  to set a links destination url
     */
    backlinkHref: string;
    /**
     *  To define app layout subtitle
     */
    subtitle: string;
    /**
     *  To define app layout header background
     */
    headerBackground: boolean;
    /**
     *  To define app layout title
     */
    appLayoutTitle: string;
    appLayoutHeaderActions: boolean;
    appLayoutHelpIcon: boolean;
    appLayoutPageLevelActions: boolean;
    appLayoutFooter: boolean;
    appLayoutPageLevelAlert: boolean;
    /**
     * The user has clicked the backlink
     */
    eventBacklinkClick: EventEmitter;
    typeValidation(newValue: string): void;
    connectedCallback(): void;
    componentWillLoad(): void;
    _handlerBacklinkClick(): void;
    render(): any;
}
