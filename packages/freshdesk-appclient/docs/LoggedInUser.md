# LoggedInUser Interface

Represents the user currently logged into the system.

```typescript
interface LoggedInUser {
    id: number;
    created_at: string;
    updated_at: string;
    available: boolean;
    available_since: string;
    abilities: Array<string>;
    contact: UserContact;
    group_ids: Array<number>;
    occasional: boolean;
    role_ids: Array<number>;
    signature: string;
    ticket_scope: number;
}
```

## Properties

| Name            | Type                                                      | Description                                                                                                                                |
| --------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| id              | string                                                    | Identifier of the agent, auto-generated when the agent’s information is configured in the system.                                          |
| created_at      | string                                                    | Timestamp of when the agent’s record was created in the Freshdesk system, specified in the UTC format.                                     |
| updated_at      | string                                                    | Timestamp of when the agent’s record is last updated in the Freshdesk system, specified in the UTC format.                                 |
| available       | boolean                                                   | Specifies whether the agent is available for ticket assignment.                                                                            |
| available_since | string                                                    | Timestamp of since when the agent has been available for ticket assignment.                                                                |
| abilities       | Array&lt;string&gt;                                             | List of the access privileges granted to the agent, specified as an array. For example, create and edit topics, export tickets, and so on. |
| contact         | LoggedInUserContact[<sup>*</sup>](LoggedInUserContact.md) | Details of the contact record configured for the agent in the Freshdesk system.                                                            |
| group_ids       | Array&lt;number&gt;                                             | Identifiers of the groups to which the agent is associated, specified as an array.                                                         |
| occasional      | boolean                                                   | Specifies whether the agent is an occasional agent or a full-time agent                                                                    |
| role_ids        | Array&lt;number&gt;                                             | Identifiers of the roles associated with the agent, which determine the access privileges of the agent.                                    |
| signature       | string                                                    | HTML format of the personalized message block appended to the emails/replies that the agent sends.                                         |
| ticket_scope    | number                                                    | Permission granted to the agent to access the tickets in the Freshdesk system.                                                             |

## See Also

- [LoggedInUserContact](LoggedInUserContact.md)

## References
- [freshworks/data-methods/loggedInUser](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/data-method/#loggedinuser)
