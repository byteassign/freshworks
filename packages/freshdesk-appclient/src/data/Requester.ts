import { Avatar } from "./Avatar";
import { CompanyDetails } from "./CompanyDetails";

/**
 * Represents a requester.
 */
export interface Requester {
  /**
   * Identifier of the requester object, auto-generated when a new requester is added to the Freshdesk system.
   */
  id: number;

  /**
   * Timestamp of when the requester object was created in the Freshdesk system, specified in the UTC format.
   */
  created_at: string;

  /**
   * Timestamp of when the requester object was last updated in the Freshdesk system, specified in the UTC format.
   */
  updated_at: string;

  /**
   * Full name of the requester.
   */
  name: string;

  /**
   * Email address of the requester specified when the requester information is created in the Freshdesk system.
   */
  email: string;

  /**
    * Additional email addresses of the requester.
    */
  other_emails: ReadonlyArray<string>;

  /**
   * Mobile phone number of the requester.
   */
  mobile: string;

  /**
   * Official phone number of the requester.
   */
  phone: string;

  /**
   * Specifies whether the requester is active in the Freshdesk system.
   */
  active: boolean;

  /**
   * Residential address of the requester, as specified in the Freshdesk system.
   */
  address: string;

  /**
    * Details of the image used as the avatar.
    */
  avatar: Avatar;

  /**
   * etails about the requester, specified when the requester information is created in the Freshdesk system.
   */
  description: string;

  /**
   * Specifies whether the requester is configured as an agent in the Freshdesk system.
   */
  is_agent: boolean;

  /**
   * Designation of the contact in the company to which the contact belongs.
   */
  job_title: string;

  /**
   * Primary language of the requester, in the ISO-639 code.
   */
  language: string;

  /**
   * Additional companies associated with the contact.
   */
  other_companies: ReadonlyArray<CompanyDetails>;

  /**
   * Keywords associated with a requester. The keywords help to filter a subset of contacts from all contacts in the system.
   */
  tags: ReadonlyArray<string>;

  /**
   * Time zone to which the requester belongs, in an easily consumable (RAILS timezone.name) format.
   */
  time_zone: string;

  /**
   * Identifier of the requester’s twitter account.
   */
  twitter_id: string;

  /**
   * Specifies whether the requester can view all the tickets associated with the company.
   */
  view_all_tickets: boolean;
}