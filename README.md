# Map Directions App

This is a responsive web app that features dynamic address search. It gives you map directions asynchronously, right after you stop typing. It's built with Angular 8.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## How It Works

There are two search boxes: the left side one is to enter the "from" address, and the right side one is to enter the "to" address.

As you type-in your address, the app waits for you to finish typing, once you stop typing (for 1 second), the app runs a search and pulls directions using MapQuest API and displays them to you in a responsive modern UI.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
