import { ApplicationEventMap } from ".";
import { ApplicationEventHelper } from "./ApplicationEventHelper";
import { ApplicationEventPage } from "./ApplicationEventPages";
import { ApplicationEventTypes } from "./ApplicationEventTypes";
import { EmptyObject } from "../utils/EmptyObject";
import { ApplicationLifecycleEventTypes } from "./ApplicationLifecycleEventTypes";

type CreatePayload<T, K extends keyof T> = T extends void ? {} : T[K] extends void ? EmptyObject : T[K] extends object ? T[K] : never;
type CreateCallback<T, K extends keyof T = keyof T> = (payload: ApplicationEventHelper<CreatePayload<T, K>>) => void;

/**
 * Provides a event type for the specified key.
 */
export type ApplicationEventType<Event extends ApplicationEventTypes | string, Page extends ApplicationEventPage<Event> | undefined = undefined> =
    Event extends ApplicationEventTypes
    ? (Page extends ApplicationEventPage<Event>
        ? (Event extends keyof ApplicationEventMap[Page]
            ? CreateCallback<ApplicationEventMap[Page], Event>
            : Event extends keyof ApplicationEventMap["Global"] ? CreateCallback<ApplicationEventMap["Global"], Event> : never)
        : (Page extends undefined
            ? { [P in keyof ApplicationEventMap]: Event extends keyof ApplicationEventMap[P] ? CreateCallback<ApplicationEventMap[P], Event> : never }[keyof ApplicationEventMap]
            : never
        ))
    : (Event extends ApplicationLifecycleEventTypes
        ? never
        : CreateCallback<EmptyObject, any>)