
export enum TicketScope {
    /**
     * The agent can access all tickets created in the Freshdesk system.
     */
    Global,
    /**
     * The agent can access tickets assigned to the agent or to the group(s) to which the agent belongs.
     */
    Group,
    /**
     * The agent can only access tickets assigned to the agent.
     */
    Agent
}
