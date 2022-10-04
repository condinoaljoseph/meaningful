## Structure

| Codebase         |   Description    |
| :--------------- | :--------------: |
| [dern](dern)     |  Apollo Server   |
| [vermar](vermar) | Next.js frontend |

## How to run locally

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
