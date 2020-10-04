# Smaply Prototype

## Packages and plugins used
- npm install node-sass
- npm install sass-loader
- npm install axios
- vue store (vuex)

# Components hierarchy
App: parent container
    - Toolbar: shows persons's details
    - Persona: displays the profile of the persona
        - Profile: lists all the cards that compose the profile
            - Field: displays a single field on profile
        - Elements: displayes a list of all cards
             - Field: displays a single field that can be dragged on profile

## Vuex modules
- profile module: brings the data profile info from API


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

