import { createContext } from "react";
import { ApplicationClientState } from "./types";

export const ApplicationClientContext = createContext<ApplicationClientState>({
    client: null,    
    loading: false    
});

ApplicationClientContext.Provider