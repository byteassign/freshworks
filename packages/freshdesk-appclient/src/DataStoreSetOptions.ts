import { DataStoreSetCondition } from "./DataStoreSetCondition";

export interface DataStoreSetOptions {
    /**
     * Time to live.
     */
    ttl: number;
    /**
     * Set if
     */
    setIf: DataStoreSetCondition;
}