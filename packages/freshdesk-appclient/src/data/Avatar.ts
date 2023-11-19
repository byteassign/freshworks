/**
 * Represents an avatar image in the Freshdesk system.
 */
export interface Avatar {
    
    /**
     * Identifier of the avatar object, auto-generated when an avatar is created in the system.
     */
    id: number;

    /**
     * Timestamp of when the avatar was created in the system, specified in the UTC format.
     */
    created_at: string;

    /**
     * Timestamp of when the avatar was last updated in the Freshdesk system, specified in the UTC format.
     */
    updated_at: string;

    /**
     * Name of the avatar, auto-generated when an avatar is created in the system.
     */
    name: string;

    /**
     * Format of the image uploaded as avatar. For example, image/png.
     */
    content_type: string;

    /**
     * Size of the image uploaded as avatar.
     */
    size: string;

    /**
     * Format of the image uploaded as avatar. For example, image/png.
     */
    attachment_url: string;

    /**
     * Link to the location from where the thumbnail of the avatar can be retrieved.
     */
    thumb_url: string;
}