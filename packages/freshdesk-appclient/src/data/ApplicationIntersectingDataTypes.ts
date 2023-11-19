import { DataTypesMap } from "./ApplicationDataMap";
import { IntersectingKeys } from "../utils";

export type ApplicationIntersectingDataTypes = IntersectingKeys<DataTypesMap>;
