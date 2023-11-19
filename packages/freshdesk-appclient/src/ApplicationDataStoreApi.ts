import { DataStoreAction } from "./DataStoreAction";
import { DataStoreSetOptions } from "./DataStoreSetOptions";

/**
 * Provides methods that enables an application to store and retrieve data. 
 * 
 * [Click here to view documentation.](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/data-store/key-value-storage/)
 */
export interface ApplicationDataStoreApi{
    /**
     * Used to retrieve stored data. If the retrieval is successful, the JSON value can be accessed 
     * using the data parameter in the .then function.
     * @param key The name of the entity.
     * 
     * @returns The value of the specified entity.
     */
    get(key: string): Promise<Record<string, any>>;

    /**
     * Stores the key, value pair in the data store. If an entry with the key is already present, 
     * then the value will be updated.
     * 
     * @param key The name of the entity.
     * @param value The value of the entity.
     */
    set(key: string, value: Record<string, any>): Promise<Record<string, any>>

    /**
     * Stores the key, value pair in the data store. If an entry with the key is already present, 
     * then the value will be updated.
     * 
     * @param key The name of the entity.
     * @param value The value of the entity.
     * @param options The options of the set operation.
     */    
    set(key: string, value: Record<string, any>, options: DataStoreSetOptions): Promise<Record<string, any>>

    /**
     * Updates the corresponding key value in the data store. 
     * @param key The name of the entity.
     * @param action The action type.
     * @param attributes The values to update.
     */
    update(key: string, action: DataStoreAction, attributes: Record<string, any>): Promise<Record<string, any>>;
}