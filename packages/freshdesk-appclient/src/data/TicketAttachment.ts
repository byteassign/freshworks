/**
* Represents a document attached to a ticket in the Freshdesk system.
*/
export interface TicketAttachment {
    /**
     * An integer representing a unique identifier for the attachment object,
     * which is auto-generated when a document is attached and stored in the Freshdesk system.
     */
    id: number;

    /**
     * A string representing the UTC timestamp when the attached document was stored in the Freshdesk system.
     */
    created_at: string;

    /**
     * A string representing the UTC timestamp when the attached document was last updated in the Freshdesk system.
     */
    updated_at: string;

    /**
     * A string representing the format of the attached document.
     *
     * Example:
     * - "image/jpeg"
     */
    content_type: string;

    /**
     * An integer representing the size of the attached document.
     */
    file_size: number;

    /**
     * A string representing the name of the attached document, specified in the ".[extension]" format.
     */
    name: string;

    /**
     * A string representing the link to the location from where the attached document can be retrieved.
     */
    attachment_url: string;
}