import { ApplicationDataType, ApplicationDataTypes } from "@byteassign/freshdesk-appclient";
import { ConsumerProps, ReactNode } from 'react';
import { useApplicationData } from "../hooks";

interface ApplicationDataProps<T extends string> {
    data?: ApplicationDataType<T> | null;
    loading: boolean;
    error: Error | null;
}

interface ApplicationDataConsumerProps<T extends ApplicationDataTypes> extends ConsumerProps<ApplicationDataProps<T>> {
    source: T;
}

/**
 * `ApplicationDataConsumer` is a component that consumes the application-level state provided by `ApplicationProvider`.
 * It uses a render prop pattern to pass the application state to the rendering logic of its children.
 * This component must be a descendant of `ApplicationProvider` in the component tree.
 *
 * @component
 * @example
 * ```jsx
 * // Inside a component that is a descendant of ApplicationClientProvider
 * const YourComponent = () => (
 *     <ApplicationDataConsumer source="dataName">
 *         {({ data, loading, error }) => {
 *             if (loading) {
 *                 return <div>Loading...</div>
 *             }
 * 
 *             if (error) {
 *                 return <div>An error occured</div>
 *             }
 * 
 *             return (
 *                 <div>
 *                     {
 *                         // render using the data argument
 *                     }
 *                 </div>)
 * 
 *         }}
 *     </ApplicationDataConsumer>
 * );
 * 
 * // In your root component (e.g., App.jsx)
 * const App = () => {
 *     <ApplicationClientProvider>
 *         <YourComponent/>
 *     </ApplicationClientProvider>
 * }
 * ```
 */
export function ApplicationDataConsumer<T extends ApplicationDataTypes>(props: ApplicationDataConsumerProps<T>): ReactNode {
    const { children, source } = props;
    const appData = useApplicationData(source);
    return children(appData);
}