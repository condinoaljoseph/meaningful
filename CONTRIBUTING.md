# Contributing

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Our Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/condinoaljoseph/meaningful/pulls), and after review, these can be merged into the project.

## Pull Requests

1. Fork the repo and create your branch (usually named `[github-username]-[issue#]`).
2. Ensure to describe your pull request.

## Manual Full Local Development

How to run locally:

### Backend

#### PostgreSQL

Install PostgreSQL:

- **macOS**: Run `brew install postgresql`.
- **Windows**: Follow [this](https://www.postgresqltutorial.com/install-postgresql/) guide.
- **Linux**: Follow [this](https://www.postgresqltutorial.com/install-postgresql-linux/) guide.

Start PostgreSQL:

- **macOS**: Run `brew services start postgresql`.
- **Windows**: Start PostgreSQL through the control panel or run `net start postgresql-{version}`.
- **Linux**: Run `/etc/rc.d/init.d/postgresql start`.

Create a DB named `meaningful`:

```shell
$ psql postgres

$ CREATE DATABASE meaningful;
```

### Apollo Server

Navigate to `/dern`

- run `yarn watch`
- run `yarn dev`

or

- by using `ts-node` by just running `yarn dev2`

### Next.js Frontend

Navigate to `/vermar`

- run `yarn dev`

## Feature Request

Great Feature Requests tend to have:

- A quick idea summary.
- What & why you wanted to add the specific feature.
- Additional context like images, links to resources to implement the feature etc, etc.
