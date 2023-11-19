import { DataTypesMap } from "./ApplicationDataMap";

/**
 * Represents all the available data types within the Freshdesk application.
 */
export type ApplicationDataTypes = {
        [K in keyof DataTypesMap]: keyof DataTypesMap[K];
    }[keyof DataTypesMap];


