# Wizard. Input tool for jobs.

This project is a fork of the Yawik jobwizard.


Standalone wizard based on [quasar](https://quasar.dev/). It is a single page application (SPA) running in the  clients browser. The result is a static HTML content.

As an authenticated user it's possible to save, manage and publish jobs. Jobs are [Google Jobs](https://jobs.google.com/about/) ready.

![JobWizard](./docs/jobwizard-animated.gif)


## Status

ready for production

## Requirements

- [nodesjs](https://nodejs.org/)
- [yarn](https://yarnpkg.com/) (recommended)

## Installation

```
git clone https://gitlab.com/yawik/jobwizard.git
cd jobwizard
yarn
yarn dev
```

you should be able to acess http://localhost:8090

## Configuration

The form is .env-aware.

| Name                         | Value                               |
|------------------------------|-------------------------------------|
| YAWIK_URL_PRIVACY            | Link to the Privacy notes           |
| YAWIK_API_URL                | Yawik API                           |
| YAWIK_STRAPI_URL             | Strapi Backend                      |
| YAWIK_AUTH_URL               | Endpoint for authentication         |
| YAWIK_JOB_URL                | URL to job details                  |
| YAWIK_ROUTER_BASE            | Router Base of the web app          |
| YAWIK_GOOGLE_MAPS            | Google Maps Key                     |

It's possible to show a toolbar with the Logo and a navigation drawer by using query parameter with any non-empty value.

| Param        | Description       |
|--------------|-------------------|
| tb=0         | hide toolbar      |
| hf=1         | hide footer       |

## Live

https://jobwizard.yawik.org/

## Demo

you can use the same login in the live and the demo system

https://yawik.gitlab.io/jobwizard/

## Documentation

we use mkdocs dor documentation. Rendered version is located at:

https://jobwizard.yawik.org/docs/

