<!-- markdownlint-disable-next-line -->
<p align="center">
  <a href="https://mui.com/material-ui/" rel="noopener" target="_blank"><img width="150" height="133" src="https://avatars.githubusercontent.com/u/149618618?s=400&u=d9dd6fbbcbedc26f6dbd92d1488b8fdbf1cc79ba&v=4" alt="Material UI logo"></a>
</p>

<h1 align="center">Byteassign
<div style="font-size:60%">freshdesk appclient</div></h1>

Byteassign's Freshdesk appclient is a library designed to assist in the development of front-end Freshdesk applications. It primary provides types for the various components found within the Freshdesk eco-system.

> **Important**  
> @byteassign and its packages are not affiliated with Freshworks in any way.

## Installation

Install the package in your project directory as a development dependency with:

```bash
npm install @byteassign/freshdesk-appclient --save-dev
```

## Documentation

Visit Freshdesk's [app-sdk page](https://developers.freshworks.com/docs/app-sdk/v2.3) to view the full documentation.

## Examples

**Subscribing to app.initialized**    
App initialization occurs when the page that contains your app is loaded for the first time.
```typescript
import {ApplicationClient} from '@byteassign/Freshdesk';

let client: ApplicationClient;
init();

async function init() {
    client = await app.initialized();
    client.events.on("app.activated", onAppActiveHandler);
    client.events.on("app.deactivated", onAppDeactiveHandler);
}
```
Unless you are building an app that is completely isolated (independent of the data on the page), ensure that the core logic of the app is not placed within the `app.initialized()` method. Place the logic within the `app.activated()` method.

[Click here  to see more.](https://developers.freshworks.com/docs/app-sdk/v2.3/freshdesk/front-end-apps/app-lifecycle-methods/)

## Contributing

We welcome contributions to improve and expand this package. Please ensure that contributions align with the latest Freshdesk appclient specifications and best practices in TypeScript.

## Related Packages

- [@byteassign/Freshdesk-appclient-react](https://www.npmjs.com/package/@byteassign/freshdesk-appclient-react)