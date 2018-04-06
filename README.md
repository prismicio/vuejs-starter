# prismic-vuejs-starter

> Vue.js starter project for querying content from Prismic

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## How to remove the Tutorial from the project

- Remove Tutorial import and route in src/router/index.js
- Delete Tutorial component file (rm src/components/Tutorial.vue)
- Delete Tutorial assets (rm -r src/assets/css/tutorial/ && rm -r src/assets/img/tutorial/)
- Remove vue-highlightjs dependency (npm uninstall vue-highlightjs)
