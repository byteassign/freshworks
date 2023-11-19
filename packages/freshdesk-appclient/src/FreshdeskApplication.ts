import { ApplicationClient } from "./ApplicationClient";
import { FreshdeskPages } from "./FreshdeskPages";

/**
 * Provides lifecycle methods to interact with a Freshdesk product domain. 
 *
 * @see {@link https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/app-lifecycle-methods/ | App lifecycle methods}
 */
export interface FreshdeskApplication {  
  /**     
    * This method is called by Freshdesk once the application client has been initialized.
    *  
    * @example
    * ```typescript
    * let client;
    * init();
    * async function init() {
    *   client = await app.initialized();
    *   client.events.on("app.activated", onAppActiveHandler);
    *   client.events.on("app.deactivated", onAppDeactiveHandler);
    * }
    * 
    * ```    
    * 
    * @returns A promise that resolves to a reference of the `ApplicationClient` object.
    *
    */
  initialized(): Promise<ApplicationClient>;

  /**
   * Metadata
   */
  __METADATA__: FreshdeskApplicationMetadata
}

interface FreshdeskApplicationMetadata {
  version: number
}