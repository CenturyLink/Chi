import { EventEmitter } from '../../stencil-public-runtime';
import { TimePickerFormats, TimePickerTimeSteps } from '../../constants/constants';
export declare class Time {
    /**
     * Selected time in the time picker
     */
    value: string;
    /**
     * Displaying seconds column
     */
    displaySeconds: boolean;
    /**
     * To render Time Picker in 24 hours format
     */
    format: TimePickerFormats;
    /**
     * @deprecated Use minutesStep and secondsStep instead.
     * To render Minutes and Seconds columns in 15 min and 10 second steps.
     */
    stepped?: boolean;
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
    /**
     *  To disable specific hours
     */
    _excludedHours?: string;
    /**
     *  To disable specific minutes
     */
    _excludedMinutes?: string;
    /**
     *  To disable specific seconds
     */
    _excludedSeconds?: string;
    el: HTMLElement;
    _hour: string;
    _minute: string;
    _second: string;
    _period: string;
    excludedHoursArray: any[];
    excludedMinutesArray: any[];
    excludedSecondsArray: any[];
    private minutesToDisplay;
    private secondsToDisplay;
    /**
     * Time change value event
     */
    eventChange: EventEmitter;
    componentWillLoad(): void;
    validateTimeSteps(): void;
    /**
     * @returns array with integers from 0 to 59 in step intervals.
     */
    timeRange(step?: number): number[];
    updateExcluded(): void;
    updateTimeSteps(): void;
    /**
     * Validates property 'value'
     *
     */
    validateTime(time: string): true;
    formatTimePeriod(period: number | string): string;
    updateValue(): void;
    /**
     * Selects hour minute and second properties from
     * this.value or current time.
     */
    selectTimeAndPeriod(): void;
    /**
     * Rounds current time to the defined minutes and second steps.
     */
    getRoundedTime(time: Date): string[];
    hours(): any;
    /**
     * Calculates class to apply, active or disabled
     * @param value value to check what class to apply
     * @param activeValue value to apply active class
     * @param excludedValues array of excluded values
     */
    getStateClass(value: string, activeValue: string, excludedValues: string[]): string;
    /**
     * Generates minute element to show
     * @param minute
     * @returns
     */
    getMinuteElement(minute: string): any;
    minutes(): any;
    getSecondsElement(second: string): any;
    seconds(): any;
    periods(): any;
    emitTimeValueEvent(): void;
    componentDidLoad(): void;
    render(): any;
}
