import { FreshdeskApplication } from "@byteassign/freshdesk-appclient";
import React, { PropsWithChildren, useLayoutEffect, useState } from "react";
import { ApplicationClientContext } from "../context";
import { ApplicationClientState } from "../context/types";

// Initial state of the ApplicationClientProvider
const initialState = {
    client: null,
    loading: false
};

/**
 * `ApplicationClientProvider` manages and provides the Freshdesk application client state via React Context.
 * It should be used to wrap the root component or any subtree that requires access to the application state.
 *
 * @component
 * @example
 * ```jsx
 * // In your root component (e.g., App.jsx)
 * const App = () => (
 *   <ApplicationClientProvider>
 *     <MainComponent />
 *   </ApplicationClientProvider>
 * );
 * ```
 */
export function ApplicationClientProvider({ children }: PropsWithChildren): JSX.Element {
    const [state, setState] = useState<ApplicationClientState>(initialState);

    useLayoutEffect(() => {
        let isMounted = true;

        const getClient = async () => {
            setState(() => ({
                ...initialState,
                loading: true
            }));

            try {
                const app = await loadAppclientScript();
                const client = await app.initialized();

                if (isMounted) {
                    setState(() => ({
                        ...initialState,
                        client: client
                    }));
                }
            }
            catch (error: any) {
                if (isMounted) {
                    setState(() => ({
                        ...initialState,
                        error: error
                    }));
                }
            }
        }
        getClient();

        return (() => {
            isMounted = false;
        })
    }, []);

    return (
        <ApplicationClientContext.Provider value={state}>
            {children}
        </ApplicationClientContext.Provider>)
}

/**
 * Initiates the Freshdesk application by acquiring it from the parent application's context. 
 * If the `{{{appclient}}}` script is missing, the function will dynamically insert it 
 * into the DOM.
 *
 * @returns `A promise that resolves to the FreshdeskApplication instance.`
 */
function loadAppclientScript(): Promise<FreshdeskApplication> {
    if ((typeof app !== 'undefined' || app !== 'null')) {
        if (typeof app.initialized === 'function') {
            return new Promise<FreshdeskApplication>((resolve) => resolve(app));
        }
        throw new Error("Invalid platform. Unable to locate `initialized()` function.");
    }

    var script = document.createElement('script') as HTMLScriptElement;
    script.src = '{{{appclient}}}';
    script.async = true;

    document.head.appendChild(script);

    return new Promise<FreshdeskApplication>((resolve, reject) => {
        script.addEventListener('load', () => {
            resolve(app);
        });

        script.addEventListener('error', (error) => {
            reject(error);
        });
    })
}