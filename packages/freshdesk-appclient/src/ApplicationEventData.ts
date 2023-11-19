import { EmptyObject } from "./utils/EmptyObject";

/**
 * Represents the data of an application event.
 */
export interface ApplicationEventData<T extends any = EmptyObject> {
    /**
     * Gets the previous value of the data.
     */
    old: T;
    /**
     * Gets the current value of the data.
     */
    new: T;
}
