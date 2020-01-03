# JS Tooling (NPM, Webpack and Babel) 🧰

*You don’t need to know all this by heart!*

## Goals 🏗

-[ ] Identify the differences between JS run in browser and Node ⚖️
-[ ] Understand how packages are incorporated into JS projects 📦
-[ ] Know what Webpack does for us 🧳
-[ ] Recognize code that requires transpiling 🗼
-[ ] Be able to serve JS code with hot reloading 🔥

## Outline 🏢

```text
   5m | Browser and Node environments
   5m | What is NPM
  15m | How to install/configure Webpack
   5m | ES 2015 syntax
  20m | Babel (install in project)
  10m | Webpack Dev Server
  ----|----
  60m | TOTAL
```

---

## Environments ⚖️

- Tooling = Not the codebase, but what's used to run it
- Browser
  - Load JS files through script tag (the order matters)
    - `square.js`, `index.js`, `index.html`
  - Access to browser defined global vars like document or window
  - Performance and organizational issue with loading many files (making many requests) - better to have one file (easier for browser to GET)
  - Tool called Webpack will allow us to combine files to serve to the browser
- Node.js
  - Run JS as a server-side language (not in the browser)
  - Can run serverside code for fullstack apps
  - Frameworks running in Node are comparable to Sinatra (Express) and Rails (Sails)
  - Node has a module system called CommonJS which allows us to require files
  - Browser can't understand these commands
  
Node has a module system called Common JS (allows us to require files/export them)

```javascript
// Common JS
var app = require('./app')
module.exports = app
​
// ES2015
import app from './app'
export default app
```

- Add `const square = require(‘./math’)` to index.js and `module.exports = square` to math.js
- The browser environment doesn’t understand these commands but the Node environment does
- A tool called webpack allows us to combine files for the browser
- When we run Webpack, Webpack is running in the Node JS environment

## NPM 📦

- Node package manager
- `$ npm init` creates package.json (really similar to Gemfile!)
- `$ npm run` scripts
- `$ npm install --save`
- Look into scripts in package.json and create `"log": "echo \"Hello\""` and run `npm run log`

## Webpack 🧳

- Runs in Node.js environment
- `npm install --save-dev webpack`
  - `--save-dev` saves webpack to development portion of package.json
  - Look at changes to package.json! And directory! Turtles all the way down...
- No more load order issues
- Fewer requests means better performance
- Manage dependencies, no worries about order
- We run webpack which runs in the node environment and combines the files together for us
- Create build script `"build": "webpack"` (we could just run webpack in our terminal but that would use our global version of it not the specified version in our package.json)
- Running `npm run build` should give us an error cause we don’t have a `webpack.config.js` file
​
- If we don't set defaults, it creates a default entry, output and mode for us
- Demonstrate default behavior, then create a webpack config
- webpack.config.js: entry, output, mode

```js
// webpack.config.js
const path = require('path') // so we can use absolute paths on different computers
​
const config = {
  entry: './index.js', // relative path of the starting point of the application
  output: {
    path: path.resolve(__dirname, 'build'), // name of current directory, make build folder
    filename: 'bundle.js'
  }, // once it builds it, where should it put it
  mode: 'development'
}
​
module.exports = config
```

- Run `npm run build`
- Replace script tags in html with `<script type=“text/javascript” src=‘./build/bundle.js’></script>`

- Repeat for Zookeeper App!
  - Don't forget to require files in `index.js` and export seconday files
  - We get our code to work with a transpiler

## ES 2015 / Babel 🗼

- Show import syntax
- To work in browser we need to transpile it (translate/compile)
  - Translating newer JS features into something all browsers can understand
  - *Demo a class, const, and fancy tic marks in [Babel Repl](https://babeljs.io/repl/)*

```js
const x = 9;

class Dog {
  constructor(data){
    this.name = data.name;
  };
  bark(){
    console.log(`Bow-wow! I'm ${this.name}!`);
  };
};
```

- Modularized library (we need to tell webpack to use babel) (babel is modularized so we have to install different packages)
  - `$ npm install --save-dev babel-core babel-loader babel-preset-env`
  - `babel-loader` tells webpack to use babel and lets them talk
  - `babel-core` is the core functionality: take some code, parse it, and output it
  - `babel-preset-env` are the rules of how it is translating (from es6 to older)
- update `webpack.config.js` with module rules (babel rules)
  - use: array of what rules to use
  - test: what files to use on (regex for js)
  - .babelrc: what rules to use (presets key with an array of rules)

```javascript
// use the babel loader on anything ending in js
// webpack.config.js with babel loader
const path = require('path')
​
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      use: 'babel-loader', // 
      test: /\.js$/ // regex for all .js files
    }]
  }
}
​
module.exports = config
```

- `$ touch .babelrc`: and setwhat rules to use (presets key with an array of rules)

```javascript
// .babelrc
{
  "presets": ["babel-preset-env"] 
}
```

- Now! `import and export`

```js
// index.js
import Animal from './animal';
import Api from './api';
```

```js
// api.js
...
export default Api;
```

or

```js
// animal.js
export default class Animal {
  ...
};
```

- Now, `$ npm run build`
- Look at `bundle.js`
- See site!
- Webpack and Babel work together by...
  - Webpack bundles a bunch of .js files into one,
  - Babel transpiles JavaScript into the most compatible dialect

### Webpack Dev Server 🔥

- Not as in a Rails server/backend
- Only a server in the sense that it watches for changes to our code and serves our browser with latest versions
- Now we don't have to run `$ npm run build` incessantly!
- PublicPath is `build/`
- Place assets are in memory
- Builds it all in memory, don't need build folder until ready for production

```js
// package.json
...
"scripts": {
  "build": "webpack",
  "start": "webpack-dev-server"
},
...
```

```js
// webpack.config.js with babel loader AND dev server
// adds publicPath for build folder
​
const path = require('path')
​
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js',
    publicPath: "build/" // add publicPath
  },
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.js$/
    }]
  }
}
​
module.exports = config
```

- Awesome for development!
  
---

## Takeaways 🛕

-[x] Don't remember exact `webpack.config.js` or `.babelrc` contents
-[x] Webpack's job is to take a bunch of files and bundle them into one
-[x] Babel is a transpiler, translating JavaScript into it's most compatible form
-[x] We are using tools that do a lot for us!

## Resources 🚛

- [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
