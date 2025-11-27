<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

Teslo Shop API is a NestJS-based e-commerce platform that provides a robust and scalable solution for building online stores. It is designed to be highly customizable and extensible, allowing developers to easily integrate new features and functionality.

## Stack
* NestJS
* PostgreSQL
* Docker

## Installation

```bash
$ pnpm install
```

## Start DB

```bash
$ docker-compose up -d
```

## Config environment variables

Copy the file __.env.sample__ to __.env__ 
and edit it with your own values.

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
