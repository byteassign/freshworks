import { ApplicationDataTypePage, ApplicationDataType, ApplicationDataTypes, ApplicationIntersectingDataTypes } from "./data";

type Unknown<T> = T extends ApplicationDataTypes ? never : T;

/**
 * Provides methods that enables an application to retrieve product data. 
 * 
 * [Click here to view documentation.](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/data-method/)
 */
export interface ApplicationDataApi {
  channel: MessagePort;

  /**
   *The identifier of the instance.
   */
  readonly instanceId: string;

  /**
   * Gets a record of the specified name.
   *
   * @param name - The name of the record.
   * 
   * @returns An object containing data of the specified record.
  */
  get<Record extends string>(name: Unknown<Record>): Promise<ApplicationDataType<Record>>;

  /**
   * Gets a record of the specified name.
   *
   * @param name - The name of the record.
   * 
   * @returns An object containing data of the specified record.
  */
  get<Record extends ApplicationDataTypes>(name: Record): Promise<ApplicationDataType<Record>>;

  /**
   * Gets a record of the specified name on a given page.
   * This method is added to allow discrimination between intersecting data types across various pages
   * 
   * @param name - The name of the record.
   * @param page - The page on which the record is found. This parameter is only used for type discrimination.
   * 
   * @returns An object containing data of the specified record on a specific page.
  */
  get<Record extends ApplicationIntersectingDataTypes, Page extends ApplicationDataTypePage<Record>>(name: Record, page: Page): Promise<ApplicationDataType<Record, Page>>;

  /**
   * Gets the name of the service.
   */
  readonly service: string;

  /**
   * Gets the timeout duration for the `get(...)` function.
   */
  readonly timeout: number;
}