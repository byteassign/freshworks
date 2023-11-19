import { Company } from "./Company";
import { CompanyDetails } from "./CompanyDetails";
import { Contact } from "./Contact";
import { EmailConfig } from "./EmailConfig";
import { Group } from "./Group";
import { LoggedInUser } from "./LoggedInUser";
import { Requester } from "./Requester";
import { Ticket } from "./Ticket";
import { TimeEntry } from "./TimeEntry";

/**
 * 
 */
export interface DataTypesMap {
    /**
     * Represents types that are available globally.
     */    
    Global: {
        /**
         * Represents a user who is currently logged in.
         */
        loggedInUser: LoggedInUser;

        /**
        * Represents the domain name.
        */
        domainName: string;
    },

    /**
     * Represents types that are available on the ticket details page.
     */    
    TicketDetails: {
        /**
         * Represents the ticket.
         */
        ticket: Ticket;
    
        /**
         * Represents the contact of the ticket.
         */
        contact: Contact;
    
        /**
         * Represents the email configuration.
         */
        email_config: Array<EmailConfig>;
    
        /**
         * Represents the customer who have created a ticket.
         */
        requester: Requester;
    
        /**
        * Represents the company of the ticket.
        */
        company: CompanyDetails;
    
        /**
         * Represents the group of the ticket.
         */
        group: Group;
    
        /**
         * Represents the status options.
         */
        status_options: Array<string>;
    
        /**
         * Represents the priority options.
         */
        priority_options: Array<string>;
    
        /**
         * Represents the ticket type options.
         */
        ticket_type_options: Array<string>;
    
        /**
         * Represents the custom field options.
         */
        customfield_options: Array<string>;
    
        /**
         * Details of the time logs entered for the ticket in the Freshdesk system.
        */
        time_entry: Array<TimeEntry>;
    },

    /**
     * Represents types that are available on the new ticket page.
     */
    NewTicket: {
        /**
         * Represents the status options.
         */
        status_options: Array<string>;

        /**
         * Represents the priority options.
         */
        priority_options: Array<string>;

        /**
         * Represents the ticket type options.
         */

        ticket_type_options: Array<string>;

        /**
         * Represents the custom field options.
         */
        customfield_options: Array<string>;
    },

    /**
     * Represents types that are available on the new email page.
     */
    NewEmail: {
        /**
         * Represents the new email configuration.
         */
        email_config: Array<EmailConfig>;

        /**
         * Represents the status options.
         */
        status_options: Array<string>;

        /**
         * Represents the priority options.
         */
        priority_options: Array<string>;

        /**
         * Represents the ticket type options.
         */

        ticket_type_options: Array<string>;

        /**
         * Represents the custom field options.
         */
        customfield_options: Array<string>;
    },
    
    /**
     * Represents types that are available on the contact details page.
     */
    ContactDetails: {
        /**
         * Represents a contact.
         */
        contact: Contact;

        /**
        * Represents the company of a contact.
        */
        company: Company;
    }
}