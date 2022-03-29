# Tyne Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.

# Clone the repo

```shell
git clone https://gitlab.com/tyne1/frontend.git
cd frontend
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```

## How to run locally the app:

- Run `ng serve` for a Local dev server. If you need to develop, use this option.
- Run `ng serve --configuration=dev` for a DEV server. Use this option if you need to run the app like a development/staging environment.
- Run `ng serve --configuration=production` for a local `production` server. Use this option if you need to run the app like `production environment` `¡Precaution with this option!`.
- Finally, navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

- Run `ng build --configuration=dev` to build a `development` app. The build artifacts will be stored in the `dist/` directory.
- Run `ng build --configuration=production` to build a `production` app. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CompoDoc Commands

- To generate documentation `npm run compodoc-generate`
- To launch up `npm run compodoc-server`

## Webpack Analyzer Commands

- To generate json `npm run build:stats`
- To launch up `npm run analyze`
