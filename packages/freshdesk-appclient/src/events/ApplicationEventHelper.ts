import { ApplicationEventData } from "../ApplicationEventData";
import { EmptyObject } from "../utils/EmptyObject";

/**
 * Provides functions to interact with an event.
 */
export interface ApplicationEventHelper<T extends any = EmptyObject> {
    /**
     * Gets an object containing the old and new values of the changed field.
     * 
     * @returns An object containing the new and old values of the changed field.
     */
    getData(): ApplicationEventData<T>;
    /**
     * Allows an event to proceed.
     * 
     * @remarks
     * This functions requires the intercept option to be enabled.
     * ```typescript
     * client.events.on("event.name", eventCallback, {intercept: true});     
     * ```
     */
    done(): void;

    /**
     * Prevents an event from completing.
     * @param message - The error message to pass to the listeners.
     * 
     * @remarks
     * This functions requires the intercept option to be enabled.
     * ```typescript
     * client.events.on("event.name", eventCallback, {intercept: true});     
     * ```
     */
    fail(message: string): void;
}