import { ApplicationDataTypes } from "./ApplicationDataTypes";
import { ApplicationDataTypePage } from "./ApplicationDataTypePage";
import { DataTypesMap } from "./ApplicationDataMap";

type UnknownRecord<Key extends ApplicationDataTypes | string> = {
    [K in Key]: Record<string, any>;
};

/**
 * Provides a data type for the specified key.
 */
export type ApplicationDataType<Record extends ApplicationDataTypes | string, Page extends ApplicationDataTypePage<Record> | undefined = undefined> =
    Record extends ApplicationDataTypes
    ? (Page extends ApplicationDataTypePage<Record>
        ? (Record extends keyof DataTypesMap[Page]
            ? Pick<DataTypesMap[Page], Record>
            : (Record extends keyof DataTypesMap["Global"] ? Pick<DataTypesMap["Global"], Record> : never))
        : (Page extends undefined
            ? { [P in keyof DataTypesMap]: Record extends keyof DataTypesMap[P] ? Pick<DataTypesMap[P], Record> : never; }[keyof DataTypesMap]
            : never)
    )
    : UnknownRecord<Record>