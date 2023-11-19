import { ApplicationEventHelper } from "./events/ApplicationEventHelper";

/**
 * Represents an application client event.
 */
export interface ApplicationEventContainer {
    /**
     * A helper object to interact with the event.
     */
    readonly helper: ApplicationEventHelper;
}