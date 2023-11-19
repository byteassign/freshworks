import { Avatar } from "./Avatar";

/**
 * Represents a contact in the Freshdesk system.
 */
export interface LoggedInUserContact {
    /**
     * A string representing a unique identifier for the contact object,
     * which is auto-generated when a contact record is created in the Freshdesk system.
     */
    id: string;

    /**
     * A string representing the full name of the contact.
     */
    name: string;

    /**
     * A string representing the email address of the contact,
     * specified when the contact information is created in the Freshdesk system.
     */
    email: string;

    /**
     * A string representing the official phone number of the contact.
     */
    phone: string;

    /**
     * A string representing the mobile phone number of the contact.
     */
    mobile: string;

    /**
     * A string representing the primary language of the contact,
     * provided in the ISO-639 code format.
     */
    language: string;

    /**
     * A boolean indicating whether the contact is active in the Freshdesk system.
     *
     * Possible values:
     * - `true` - The contact is active.
     * - `false` - The contact is inactive.
     */
    active: boolean;

    /**
     * An object containing details of the image used as the avatar in the contact's profile.
     */
    avatar: Avatar;

    /**
     * A string representing the designation of the contact in the company to which the contact belongs.
     */
    job_title: string;

    /**
     * A string representing the time zone to which the contact belongs,
     * provided in an easily consumable (RAILS timezone.name) format.
     */
    time_zone: string;
}