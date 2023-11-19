import { Avatar } from "./Avatar";
import { CompanyDetails } from "./CompanyDetails";

/**
 * Represents a contact in the Freshdesk system.
 */
export interface Contact {
    /**
     * Identifier of the contact object, auto-generated when a contact record is created in the Freshdesk system.
     */
    id: number;

    /**
     * Timestamp of when the contact was created in the Freshdesk system, specified in the UTC format.
     */
    created_at: string;

    /**
     * Timestamp of when the contact details were last updated in the Freshdesk system, specified in the UTC format.
     */
    updated_at: string;

    /**
     * Full name of the contact.
     */
    name: string;

    /**
     * Email address of the contact specified when the contact information is created in the Freshdesk system.
     */
    email: string;

    /**
     * Additional email addresses of the contact.
     */
    other_emails: ReadonlyArray<string>;

    /**
     * Mobile phone number of the contact.
     */
    mobile: string;

    /**
     * Official phone number of the contact.
     */
    phone: string;

    /**
     * Specifies whether the contact is active in the Freshdesk system.
     */
    active: boolean;

    /**
     * Residential address of the contact, as specified in the Freshdesk system.
     */
    address: string;

    /**
     * Details of the image used as the avatar in the company profile.
     */
    avatar: Avatar;

    /**
     * Details about the contact, specified when the contact information is created in the Freshdesk system.
     */
    description: string;

    /**
     * Specifies whwther the contact is configured as an agent in the Freshdesk system.
     */
    is_agent: boolean;

    /**
     * Designation of the contact in the company to which the contact belongs.
     */
    job_title: string;

    /**
     * Primary language of the contact, in the ISO-639 code.
     */
    language: string;

    /**
     * Additional companies associated with the contact.
     */
    other_companies: ReadonlyArray<CompanyDetails>;

    /**
     * Keywords associated with a contact. The keywords help to filter a subset of contacts from all contacts in the system.
     */
    tags: ReadonlyArray<string>;

    /**
     * Time zone to which the contact belongs, in an easily consumable (RAILS timezone.name) format.
     */
    time_zone: string;

    /**
     * Identifier of the contact’s twitter account.
     */
    twitter_id: string;

    /**
     * Specifies whether the contact can view all the tickets associated with the company.
     */
    view_all_tickets: boolean;
}