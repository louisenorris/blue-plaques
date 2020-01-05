# Blue Plaques App

Playing around with blue plaques (data from public domain licenced [Open Plaques](https://openplaques.org/data)) and React. A project in process...

The app is being built using:

* React Frontend.
* Open Plaques API (no API key required).

## User stories: 

A user can:

* Browse all blue plaquesd optained from the API.
* View their further details by clicking on a plue plaque.
* Search for a blue plaque.

## Getting started

Fork and clone this repository.

## Installation

On a new terminal tab, navigate to the directory inside the root directory of the project. Use the package manager [npm](https://www.npmjs.com/ "npm") to install all dependencies.

`npm install`

Start the server on port 3001.

`npm start`

Visit localhost:3001.

In a separate terminal, still inside this directory run the JSON server:

`json-server --watch src/data/db.json`

This runs the json server in development mode.

**Now you're all set!**


<!-- ### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

