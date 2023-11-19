import { Avatar } from "./Avatar";

/**
* Represents a company in the Freshdesk system.
*/

export interface CompanyDetails {
    /**
     * Identifier of the company object, auto-generated when a company record is created in the Freshdesk system.
     */
    id: number;

    /**
     * Registered name of the company that is specified when creating a company or contact in Freshdesk system.
     */
    name: string;

    /**
     * Details of the image used as the avatar in the company profile.
     */
    avatar: Avatar;

    /**
     * Specifies whether the contact can view all the tickets associated with the company.
     */
    view_all_tickets: boolean;
}
