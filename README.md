# Prismic Vue.js Starter

> [Vue.js](https://vuejs.org) starter project with content managed in [Prismic](https://prismic.io)

## How to launch this project in your local environment

Run the following commands:

``` bash
npm install
npm run serve
```

Then you can access it at [http://localhost:8080](http://localhost:8080).
You'll find a tutorial that explains how to create your first Vue component filled with content retrieved from Prismic.

## How to remove the tutorial from this project

- Remove Tutorial import and route in src/router/index.js
- Delete Tutorial component file `rm src/views/Tutorial.vue`
- Delete Tutorial assets `rm -r src/assets/css/tutorial/ && rm -r src/assets/img/tutorial/`
- Remove vue-highlightjs dependency `npm uninstall vue-highlightjs`

## Project setup
``` bash
npm install
```

### Compiles and hot-reloads for development
``` bash
npm run serve
```

### Compiles and minifies for production
``` bash
npm run build
```

### Lints and fixes files
``` bash
npm run lint
```

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013-2018 Prismic (http://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
