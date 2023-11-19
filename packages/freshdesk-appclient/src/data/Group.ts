/**
 * Represents an agent group in the Freshdesk ecosystem.
 */
export interface Group {
    /**
     * Identifier of the group object, auto-generated when a new agent group is configured in the Freshdesk system.
     */
    id: number;

    /**
     * Name of the group.
     */
    name: string;

    /**
     * Identifiers of the agents associated with the group, specified as an array.
     */
    agent_ids: Array<number>;
}