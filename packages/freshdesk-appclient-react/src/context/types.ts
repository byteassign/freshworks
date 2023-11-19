import { ApplicationClient } from "@byteassign/freshdesk-appclient";

export interface ApplicationClientState {
    client: ApplicationClient | null;
    loading: boolean;
    error?: Error;
}