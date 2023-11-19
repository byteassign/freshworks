export interface TimeEntry {
    /**
     * Identifier of the time entry object, auto-generated when a new time log is 
     * created for a ticket in the Freshdesk system.
     */
    id: number;
    /**
     * Timestamp of when the time entry is created in the Freshdesk system, 
     * specified in the UTC format.
     */
    created_at: string;
    /**
     * Timestamp of when the time entry is last updated, specified in the UTC format.
     */
    updated_at: string;
    /**
     * Specifies whether the time spent by an agent in resolving the ticket is billable, 
     * if the organization that uses Freshdesk charges its customers for ticket resolutions.
     */
    billable: boolean;
    /**
     * Additional information that helps understand the time log.
     */
    note: string;
    /**
     * Specifies whether the agent has started the timer for tracking the time spent on 
     * resolving the ticket.
     */
    timer_running: boolean;
    /**
     * Identifier of the agent who created the time log for the ticket.
     */
    agent_id: number;
    /**
     * Identifier of the ticket for which the time log is created in the Freshdesk system.
     */
    ticket_id: number;
    /**
     * Identifier of the company associated with the ticket.
     */
    company_id: number;
    /**
     * Time spent in resolving the ticket, specified in seconds.
     */
    time_spent: number;
    /**
     * Timestamp of when the avatar was last updated in the Freshdesk system, 
     * specified in the UTC format.
     */
    executed_at: string;
    /**
     * Timestamp of when the timer is started for a time log, specified in the UTC format.
     */
    start_time: string;
}