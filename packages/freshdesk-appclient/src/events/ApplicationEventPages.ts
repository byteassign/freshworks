import { ApplicationEventMap } from "./ApplicationEventMap";

export type ApplicationEventPage<Record extends string> =
    (Record extends keyof ApplicationEventMap["Global"]
        ? keyof Omit<ApplicationEventMap, "Global">
    :   { [K in keyof ApplicationEventMap]: Record extends keyof ApplicationEventMap[K] ? K : never; }[keyof ApplicationEventMap]);