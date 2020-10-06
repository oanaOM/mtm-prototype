# Smaply Prototype

A persona profil prototype site built as a single-page app using [VueJs](https://vuejs.org/). All the data if fed from [Smaply Persona Test API](https://smaplypersonastest.docs.apiary.io).

The user is able to edit his name, initials and build his profile using field elements from the right panel by performing a drag and drop action on his profile board. Within his profile he can also drag and drop fields from left and right or delete them.

## Technologies

- [VueJs](https://vuejs.org/): Javascript Frontend framework.
- [Axios package](https://github.com/axios/axios#features): a HTTP client library.
- [Vuex](https://vuex.vuejs.org/): a state management pattern and library. Profile module: brings the data profile info from API.
- [Sass-loader package](https://www.npmjs.com/package/sass-loader): used to load Sass and compile in CSS.
- [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API): used to create the drag and drop effect.

# Components

- App: parent container 
- Toolbar: shows persons's details 
- Persona: displays the profile of the persona 
- Board: lists all the fields that compose the profile 
- Field: displays a single field on profile 
- Elements: displayes a list of all fields 

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```
