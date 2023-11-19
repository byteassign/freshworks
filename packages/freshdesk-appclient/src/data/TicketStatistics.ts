/**
 * Represents statistical data associated with a ticket in the Freshdesk system.
 */
export interface TicketStatistics {
    /**
     * A string representing the UTC timestamp of when the agent responded to the ticket.
     */
    agent_responded_at: string;

    /**
     * A string representing the UTC timestamp of when the ticket was closed.
     */
    closed_at: string;

    /**
     * A string representing the UTC timestamp of when the ticket received its first response.
     */
    first_responded_at: string;

    /**
     * A string representing the time from which a response is pending for the ticket.
     */
    pending_since: string;

    /**
     * A string representing the UTC timestamp of when the requester responded to the ticket.
     */
    requester_responded_at: string;

    /**
     * A string representing the UTC timestamp of when the ticket was resolved for the first time.
     */
    resolved_at: string;

    /**
     * A string representing the UTC timestamp of when the ticket status was last updated.
     */
    status_updated_at: string;
}