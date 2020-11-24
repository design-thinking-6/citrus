# Citrus
A simple restful api server for MphaGo <br>
[![CodeFactor](https://www.codefactor.io/repository/github/design-thinking-6/citrus/badge)](https://www.codefactor.io/repository/github/design-thinking-6/citrus)

# Index
* [Getting Started](#getting-started)
  * [Install with npm](#install-with-npm)
  * [Install with yarn](#install-with-yarn)
* [Configuration](#configuration)
  * [logger](#logger)
    * [transports](#transports)
  * [server](#server)
  * [database](#database)
    * [postgres](#postgres)
* [Todo](#todo)
* [Contributor](#contributor)
* [License](#license)

# Getting Started
Citrus also require Node.js. we recommend Node.js Latest

## Install with npm
```shell script
$ npm install
$ npm run stg
```

# Install with yarn
```shell script
$ yarn install
$ yarn stg
```

# Configuration
If you need to configure Citrus's settings, create `citrus.json` in project root directory.

default config file
```json
{
  "logger": {
    "transports": [
      {
        "type": "console",
        "level": "debug"
      },
      {
        "type": "file",
        "filename": "logs/api",
        "level": "debug"
      },
      {
        "type": "file",
        "filename": "logs/error",
        "level": "error"
      },
      {
        "type": "file",
        "filename": "logs/warn",
        "level": "warn"
      }
    ]
  }
}
```
## logger
default value of logger field
```json
{
  "transports": [
    {
      "type": "console",
      "level": "debug"
    },
    {
      "type": "file",
      "filename": "logs/api",
      "level": "debug"
    },
    {
      "type": "file",
      "filename": "logs/error",
      "level": "error"
    },
    {
      "type": "file",
      "filename": "logs/warn",
      "level": "warn"
    }
  ]
}
```
### transports
`transports` is winston logger based `Transport` array. `transports`'s element look like
```typescript
interface Transport {
  type: 'console' | 'file';
  filename?: string;
  level: 'error' | 'warn' | 'info' | 'http' | 'verbose' | 'debug' | 'silly'
}
```

## server
`server` field is one 

## database
default value of database field
```json
"database": {
  "postgres": {
    "host": null,
    "port": 5432,
    "username": null,
    "password": null,
    "database": null
  }
}
```
### postgres
`postgres` is a configuration of PostgreSQL DB, which is supported by citrus.

all type of database is same type
```typescript
interface DatabaseConfigure {
  host: string;
  port: number;
  username?: string;
  password?: string;
  database?: string;
}
```

# Todo
* features
 - [X] Using koa
 - [X] Using typeorm
 - [ ] OAuth 2.0 (2021)

* misc.
 - [X] decide which db used - PostgreSQL
 - [ ] decide question entity format

# Contributor
|심수용|
|---|
|2020105627|
|컴퓨터공학과|
|<img width="100px" height="100px" src="https://github.com/Su-Yong.png"/>|

# License
Citrus is [MIT License](https://github.com/design-thinking-6/citrus/blob/main/LICENSE)
