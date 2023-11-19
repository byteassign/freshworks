import { TicketAttachment } from "./TicketAttachment";
import { TicketPriority } from "./TicketPriority";
import { TicketStatistics } from "./TicketStatistics";

/**
 * Represents a ticket created in the Freshdesk system.
 */
export interface Ticket {
    /**
     * A unique identifier for the ticket, generated upon creation in the system.
     */
    id: number;

    /**
     * A string representing the UTC timestamp when the ticket was created in the Freshdesk system.
     */
    created_at: string;

    /**
     * A string representing the UTC timestamp when the ticket was last updated in the Freshdesk system.
     */
    updated_at: string;

    /**
     * A string representing the subject of the ticket created in the Freshdesk system.
     */
    subject: string;

    /**
     * A string representing the summary of the issue raised in the ticket, in HTML format.
     */
    description: string;

    /**
     * A string representing the summary of the issue raised in the ticket, in plain text format.
     */
    description_text: string;

    /**
     * An integer representing the status of the ticket in the Freshdesk system.
     */
    status: number;

    /**
     * A string representing the type of ticket status associated with the ticket.
     */
    status_type: string;

    /**
     * An integer representing the priority assigned to the ticket.
     */
    priority: TicketPriority;

    /**
     * A string representing the type of priority assigned to the ticket.
     */
    priority_label: string;

    /**
     * An array of objects representing details of the documents attached to the ticket.
     */
    attachments: Array<TicketAttachment>;

    /**
     * An array of strings representing additional email addresses that are copied when the ticket is created with email as the source.
     */
    to_emails: Array<string>;

    /**
     * An array of strings representing additional email addresses that are copied when the ticket is created with email as the source.
     */
    cc_emails: Array<string>;

    /**
     * An array of strings representing additional email addresses that an agent adds when replying to a ticket.
     */
    reply_cc_emails: Array<string>;

    /**
     * An array of strings representing additional email addresses that an agent adds when forwarding a ticket.
     */
    fwd_emails: Array<string>;

    /**
     * An integer representing the identifier of the company to which the contact associated with the ticket belongs.
     */
    company_id: number;

    /**
     * An array of objects representing custom field names and corresponding values configured in the Freshdesk system to obtain additional ticket information.
     * Specified as a valid JSON object of key (custom field name)-value (custom field’s value) pairs.
     */
    custom_fields: Array<{[key in string]: any}>;

    /**
     * A string representing the UTC timestamp of when the ticket is to be resolved.
     */
    due_by: string;

    /**
     * A string representing the UTC timestamp of when the first response is due for the ticket.
     */
    fr_due_by: string;

    /**
     * A boolean indicating whether the ticket has been escalated for delay in sending the first response.
     *
     * Possible values:
     * - `true`: The ticket has been escalated.
     * - `false`: The ticket has not been escalated.
     */
    fr_escalated: boolean;

    /**
     * A boolean indicating whether the ticket is escalated for any reason.
     *
     * Possible values:
     * - `true`: The ticket is escalated.
     * - `false`: The ticket is not escalated.
     */
    is_escalated: boolean;

    /**
     * An integer representing the identifier of the customized email address, which is configured to automatically create a new ticket from the email received to the support email.
     */
    email_config_id: number;

    /**
     * An integer representing the identifier of the group to which the ticket is associated.
     */
    group_id: number;

    /**
     * An integer representing the identifier of the product to which the ticket is associated, if an organization has configured multiple products.
     */
    product_id: number;

    /**
     * An integer representing the identifier of the requester who created the ticket.
     */
    requester_id: number;

    /**
     * An integer representing the identifier of the agent to whom the ticket is assigned.
     */
    responder_id: number;

    /**
     * An integer identifying the channel through which the ticket is created.
     * The default channels in Freshdesk and the corresponding values are,
     * 1. Email
     * 1. Portal
     * 1. Phone
     * 1. Forum
     * 1. Twitter
     * 1. Facebook
     * 1. Chat widget in the Freshdesk system
     * 1. Feedback widget in the Freshdesk system
     * 1. Outbound email sent by an agent to the customer
     * 1. E-commerce
     *
     * In addition to the default sources defined in the Freshdesk system, new channels can be added.
     */
    source: number;

    /**
     * A string representing the name of the source that triggered the ticket event.
     */
    source_type: string;

    /**
     * A boolean indicating whether the ticket is spam.
     *
     * Possible values:
     * - `true`: The ticket is marked as spam.
     * - `false`: The ticket is not marked as spam.
     */
    spam: boolean;

    /**
     * An object representing the identifier of the group to which the ticket is associated.
     */
    stats: TicketStatistics;

    /**
     * An array of strings representing keywords associated with the ticket.
     */
    tags: Array<string>;

    /**
     * A string representing the category of issue the ticket is addressing. For example, Feature request, Refund, and so on.
     */
    type: string;
}