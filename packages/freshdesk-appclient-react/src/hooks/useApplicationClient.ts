import { useContext } from "react";
import { ApplicationClientContext } from "../context/ApplicationClientContext";
import { USE_APPLICATIONCLIENT_ERROR } from "./constants";

/**
 * Hook that provides access to the application client of Freshdesk.
 * This client isused for accessing Freshdesk data, listening to events, and performing other API operations
 * It should be used within components that are descendants of the `ApplicationProvider`.
 *
 * @returns An instance of an object containing the client instance, loading state, and any error that occurred during initialization.
 *
 * @example
 * const client = useApplicationClient();
 * client.get('/endpoint').then(data => {
 *   // Handle the data
 * });
 */
export function useApplicationClient() {
  const context = useContext(ApplicationClientContext);
  
  if (!context) {
    throw new Error(USE_APPLICATIONCLIENT_ERROR);
  }

  return useContext(ApplicationClientContext);
}