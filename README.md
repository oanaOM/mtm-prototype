# Smaply Prototype

A persona profil prototype site built as a single-page app using [VueJs](https://vuejs.org/). 

### Overview

The entry point of the application is in App.vue component.
Once the App.vue component is loaded, a dispath is made using vuex store to fetch the data from the API. Using the stored data Toolbar and Persona components are populated. More details are described in the workflow diagram below:

<img src="./application workflow.png" raw=true alt="workflow"/>

## Technologies

- [VueJs](https://vuejs.org/): Javascript Frontend framework.
- [Axios package](https://github.com/axios/axios#features): a HTTP client library.
- [Vuex](https://vuex.vuejs.org/): a state management pattern and library. Profile module: brings the data profile info from API.
- [Sass-loader package](https://www.npmjs.com/package/sass-loader): used to load Sass and compile in CSS.
- [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API): used to create the drag and drop effect.


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
