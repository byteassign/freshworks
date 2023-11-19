import { TicketScope } from "./TicketScope";
import { LoggedInUserContact } from "./LoggedInUserContact";

/**
 * Represents a user who is currently logged into the Freshdesk system.
 */
export interface LoggedInUser {
    /**
     * Identifier of the agent, auto-generated when the agent’s information is configured in the system.
     */
    id: number;

    /**
     * Timestamp of when the agent’s record was created in the Freshdesk system, specified in the UTC format.
     */
    created_at: string;

    /**
     * Timestamp of when the agent’s record is last updated in the Freshdesk system, specified in the UTC format.
     */
    updated_at: string;

    /**
     * Specifies whether the agent is available for ticket assignment.
     */
    available: boolean;

    /**
     * Timestamp of since when the agent has been available for ticket assignment.
     */
    available_since: string;

    /**
     * List of the access privileges granted to the agent, specified as an array. 
     * For example, create and edit topics, export tickets, and so on.
     */
    abilities: Array<string>;

    /**
     * Details of the contact record configured for the agent in the Freshdesk system.
     */
    contact: LoggedInUserContact;

    /**
     * Identifiers of the groups to which the agent is associated, specified as an array.
     */
    group_ids: Array<number>;

    /**
     * Specifies whether the agent is an occasional agent or a full-time agent.
     */
    occasional: boolean;

    /**
     * Identifiers of the roles associated with the agent, which determine the access privileges of the agent.
     */
    role_ids: Array<number>;

    /**
     * HTML format of the personalized message block appended to the emails/replies that the agent sends.
     */
    signature: string;

    /**
     * Permission granted to the agent to access the tickets in the Freshdesk system.
     */
    ticket_scope: TicketScope;
}