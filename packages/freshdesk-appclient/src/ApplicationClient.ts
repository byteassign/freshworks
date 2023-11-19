import { ApplicationDataApi } from './ApplicationDataApi';
import { ApplicationDataStoreApi } from './ApplicationDataStoreApi';
import { ApplicationEventApi } from './ApplicationEventApi';

/**
 * Provides functionality to interact with a Freshdesk application.
 *
 * [Click here to view documentation.](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/app-lifecycle-methods/)
 */
export interface ApplicationClient {

    /**
     * A data provider object that enables an application to retrieve product data.
     */
    readonly data: ApplicationDataApi;

    readonly db: ApplicationDataStoreApi;

    /**
     * An event provider object that enables an application to listen to the events of the parent Freshdesk application.
     */
    readonly events: ApplicationEventApi;
}