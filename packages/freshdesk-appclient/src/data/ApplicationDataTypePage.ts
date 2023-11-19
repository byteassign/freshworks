import { DataTypesMap } from "./ApplicationDataMap";

/**
 * Returns the page(s) on which a specific record is found.
 */
export type ApplicationDataTypePage<Record extends string> =
    (Record extends keyof DataTypesMap["Global"]
        ? keyof Omit<DataTypesMap, "Global">
        : { [K in keyof DataTypesMap]: Record extends keyof DataTypesMap[K] ? K : never; }[keyof DataTypesMap]);