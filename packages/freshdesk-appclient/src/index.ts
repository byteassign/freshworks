export * from './ApplicationClient';
export * from './ApplicationDataApi';
export * from './ApplicationDataStoreApi';
export * from './ApplicationEventApi';
export * from './ApplicationEventContainer';
export * from './ApplicationEventData';
export * from './ApplicationEventOptions';
export * from './DataStoreSetCondition';
export * from './DataStoreSetOptions';
export * from './FreshdeskApplication';
export * from './data';
export * from './events';
export * from './events/ApplicationEventHelper';
import { FreshdeskApplication } from "./FreshdeskApplication";

declare global {
    /**
      * Represents a global instance of the Freshdesk application object.
      */
    const app: FreshdeskApplication;
}
