import { ApplicationEventContainer } from "./ApplicationEventContainer";
import { ApplicationEventOptions } from "./ApplicationEventOptions";
import { ApplicationEventType } from "./events/ApplicationEventType";
import { ApplicationEventTypes } from "./events/ApplicationEventTypes";
import { ApplicationLifecycleEventTypes } from "./events/ApplicationLifecycleEventTypes";

export interface ApplicationEventApi {
    on(event: string, callback: (payload: ApplicationEventContainer) => void, options: ApplicationEventOptions): void;
    on<Event extends string>(event: Event, callback: ApplicationEventType<Event>): void;
    /**
     * Here
     * @param event 
     * @param callback 
     */
    on<Event extends ApplicationEventTypes>(event: Event, callback: ApplicationEventType<Event>): void;
    /**
     * Doing something else
     * @param event 
     * @param callback 
     */
    on<Event extends ApplicationLifecycleEventTypes>(event: Event, callback: () => void): void;
}