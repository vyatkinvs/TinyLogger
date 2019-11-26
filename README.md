
## Description

Tiny logger

## Installation

```bash
$ npm install
```
## Db Connection
```bash
  in  app.module.ts
```
## Running the app

```bash
$ npm run build
$ npm run start:prod
```

## e2e tests
```bash
$ npm run test:e2e
```

## Endpoint Description
```bash
    http://server:port/?name=PluginName(string, length(1, 30))&token=token(string, length(1, 70))
```
## Validation
```
    log.entity.ts by class-validator
```
