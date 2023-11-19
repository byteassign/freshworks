
export interface Company {
    /**
    * Identifier of the company object, auto-generated when a company record is created in the Freshdesk system.
    */
    id: number;

    /**
     * Registered name of the company that is specified when creating a company or contact in Freshdesk system.
     */
    name: string;
}