# LoggedInUserContact Interface

Represents the contact information of a user currently logged into the system.

```typescript
// @byteassign/freshdesk-appclient-datatypes

interface LoggedInUserContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    mobile: string;
    language: string;
    active: boolean;
    avatar: Avatar;
    job_title: string;
    time_zone: string;
}
```

## Properties

| Name     | Type    | Description                                                                                             |
|----------|---------|---------------------------------------------------------------------------------------------------------|
| id       | string  | Identifier of the contact object, auto-generated when a contact record is created in the system.        |
| name     | string  | Full name of the contact.                                                                               |
| email    | string  | Email address of the contact specified when the contact information is created in the Freshdesk system. |
| phone    | string  | Official phone number of the contact.                                                                   |
| mobile   | string  | Mobile phone number of the contact.                                                                     |
| language | string  | Primary language of the contact, in the ISO-639 code.                                                   |
| active   | boolean | Specifies whether the contact is active in the Freshdesk system.                                        |
| avatar   | Avatar[<sup>*</sup>](Avatar.md) | Details of the image used as the avatar in the company profile.                 |
| job_title| string | Designation of the contact in the company to which the contact belongs.                                  |
| time_zone| string | Time zone to which the contact belongs, in an easily consumable (RAILS timezone.name) format.            |

## See Also

- [LoggedInUser](LoggedInUser.md) 
- [Avatar](Avatar.md)

## References
- [freshworks/data-methods/loggedInUser](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/data-method/#loggedinuser)
