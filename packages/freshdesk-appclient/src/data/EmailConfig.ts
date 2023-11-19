/**
 * Represents an email configuration in the Freshdesk system.
 */
export interface EmailConfig {
  /**
   * Identifier of the customized email address, which is configured to automatically create a new ticket from the email received to the support email.
   */
  id: number;

  /**
   * Email address used when replying to an email.
   */
  replyEmail: string;

  /**
   * Full name of the contact.
   */
  name: string;

  /**
   * Forwarding email address of the email_config object.
   */
  toEmail: string;

  /**
   * Specifies whether the email in the email_config object is marked as primary in Admin -> Email Settings.
   */
  primaryRole: boolean;

  /**
   * Identifier the group to which the ticket is associated.
   */
  groupId: number;

  /**
   * Identifier of the product to which the ticket is associated, if an organization has configured multiple products.
   */
  productId: number;
}