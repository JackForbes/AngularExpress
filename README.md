# Jack Forbes - My personal site
==============

![Webpack Angular ES6](http://geniuscarrier.me/images/webpack-angular-es6.png)
# Webpack Angular ES6

This is an Angular 1.x application using Webpack. Angular 2 upgrade coming soon!

* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just yarn/npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

```bash
# clone the repo
$ git clone https://github.com/JackForbes/JackForbes.net.git

# change directory to your app
$ cd JackForbes.net

# install the dependencies with yarn
$ yarn

# start the server
$ yarn start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Development](#development)
    * [Testing](#testing)
    * [Running the app](#production)
* [License](#license)

# Getting Started

## Dependencies

* `node` (Use [NVM](https://github.com/creationix/nvm) for node version management)
  * Ensure you're running Node (`v6.7.0`)
* `yarn` (https://yarnpkg.com/en/docs/install)

Databases (all can be installed with brew on mac)
* `postgres`
* `redis`
* `elasticsearch`

## Installing

* `fork` this repo
* `clone` your fork
* `yarn` to install all dependencies

## Development

After you have installed all dependencies you can now run the app with:
```bash
yarn start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Testing

#### 1. Unit Tests

The unit tests are located in the module directories, alongside the controller, service, directive, and filter files.

* single run: `yarn test`
* live mode (TDD style): `yarn run test-watch`

## Production

* App is auto deployed to S3 production when pushing to
* the `master` branch.
* Make sure CircleCI tests pass before merging

### Build files

* build dist directory and upload to s3: `yarn run build`
* view built app on [jackforbes.net](https://jackforbes.net)
