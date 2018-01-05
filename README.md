## React Assignment 

### User Grid Page

#### Build and run   

##### Build:
Prerequisite (webpack) `npm install -g webpack`  
```
> cd ProjectRoot/
> npm install
> npm run build
```

##### Run:
Prerequisite (webpack-dev-server) `npm install -g webpack-dev-server`
```
> npm run run:dev
```
Note: Project can be run with any local dev server

#### Project Setup

This application was created without a scaffold generator like create-react-app or yeoman. The project is bundled using a simple webpack configuration  
`webpack.config.js` contains two loaders
- `babel` with *env* and *react* presets in `.babelrc`
- `css-loader` to implement css modules

