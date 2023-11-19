import { ApplicationEventMap } from ".";

/**
 * Represents all the available event types within the Freshdesk application.
 */
export type ApplicationEventTypes = {
    [K in keyof ApplicationEventMap]: keyof ApplicationEventMap[K];
}[keyof ApplicationEventMap]