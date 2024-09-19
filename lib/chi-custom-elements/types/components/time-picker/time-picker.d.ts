import { TimePickerFormats, TimePickerTimeSteps } from '../../constants/constants';
export declare class TimePicker {
    /**
     * Selected time of Time Picker
     */
    value: string;
    /**
     *  To disable chi-time-picker.
     */
    disabled: boolean;
    /**
     * Displaying seconds column
     */
    displaySeconds: boolean;
    /**
     *  To specify excluded hours.
     */
    _excludedHours: string;
    /**
     *  To specify excluded minutes.
     */
    _excludedMinutes: string;
    /**
     *  To specify excluded seconds.
     */
    _excludedSeconds: string;
    /**
     *  To define format of Time Picker.
     */
    format: TimePickerFormats;
    /**
     * Indicates whether the time picker popover is open or closed
     */
    active: boolean;
    /**
     * Renders minutes in stepped format. Defaults to 15 min steps if no value
     * is provided (see examples in docs).
     */
    minutesStep?: TimePickerTimeSteps;
    /**
     * Renders seconds in stepped format. Defaults to 10 seconds if
     * no value is provided (see examples in docs).
     */
    secondsStep?: TimePickerTimeSteps;
    el: HTMLElement;
    private _input;
    private _uuid;
    _onFocusIn(e: any): void;
    _onClick(e: any): void;
    _isEscapeKey(e: KeyboardEvent): boolean;
    _onKeyUp(e: any): void;
    timeChanged(newValue: string, oldValue: string): void;
    /**
     * Sets time
     */
    setTime(time: string): Promise<void>;
    /**
     * Gets time
     */
    getTime(): Promise<string>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handlePopoverOpen(ev: any): void;
    handleTimeChange(ev: any): void;
    render(): any;
}
