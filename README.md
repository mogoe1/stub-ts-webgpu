# stub-ts-webgpu

A template repository for local development of [TypeScript](https://www.typescriptlang.org/) / [WebGpu](https://www.w3.org/TR/webgpu/) projects.

## Prerequisites
Installed NodeJS and NPM preferably via [nvm](https://github.com/nvm-sh/nvm).
To install further dependencies (TypeScript ...) run `npm install` in the root directory of this repository.

## Overview
### Compiling TypeScript
* This repository uses TypeScript to compile TypeScript files to JavaScript. The emitted JavaScript should be compliant to ES2021.
* To enable the usage of installed NPM modules, TypeScript is instructed to use the "Node" module resolution strategy (which should be the default anyways).
* There is no bundling of files. Instead JavaScript modules are emitted.
* Once a chance to a `*.ts` files inside the `src` folder is detected it gets recompiled automatically.  The compiled module is stored at `dist\...`. 

### Copying assets
* All static assets should be stored at `src\asset`
* Changes are automatically copied into `dist` folder using using [cpx](https://www.npmjs.com/package/cpx)

### Serving 
* As local development web server [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) is used. It reloads the page automatically if it detects changes. 
* To enable the use of SharedArrayBuffers, CrossOriginIsolation is enabled by a middleware defined in `web-dev-server.config.mjs`

### Recommended Editor
* Visual Studio Code is the recommended Editor by the author of this repository.
* Recommended extensions for VSCode are stored at `.vscode\extenstions.json` 