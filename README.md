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

To access the data stored in `src/data/db.json` run the following two commands:

`npm install -g json-server`

`json-server --watch src/data/db.json`

This runs the json server in development mode and creates a server storing all of the plaque data with restful routes at http://localhost:3000/plaques. Once this is running, in a separate terminal still inside this directory, start the server on port 3001 by running:

`npm start`

Visit localhost:3001.


**Now you're all set!**


<!-- ### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

