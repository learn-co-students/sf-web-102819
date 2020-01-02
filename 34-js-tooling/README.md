# JS Tooling

## Environments
- browser
  - access to browser defined global vars like document or window
  - how do our files talk to each other
- node
  - can run serverside code for fullstack apps
  - frameworks running in node comparable to sinatra and rails
  - node has a module system called CommonJS which allows us to require files
  - browser can't understand these commands
  - tool called webpack allows us to combine files for the browser
  
  
## NPM
- node package manager
- `npm init` creates package.json
- `npm run` scripts
- `npm install --save`


## Webpack
- load order
- fewer requests means better performance
- manage dependencies, no worries about order
- we run webpack which runs in the node environment and combines the files together for us
- webpack.config.js: entry, output, mode


## ES 2015 / Babel
- import syntax
- to work in browser we need to transpile it
  - translating newer js features into something all browsers can understand es5
- modularized library 
  - babel-loader tells webpack to use babel and lets them talk
  - babel-core is the core functionality: take some code, parse it and output it
  - babel-preset-env are the rules of how it is translating
  - update config with module rules
  - use: array of what rules to use
  - test: what files to use on (only js)
  - .babelrc: what rules to use (presets key with an array of rules)
  
    
## Webpack Dev Server
  - not as in a rails server/backend
  - watching for changes to our code and serving our browser with the latest versions
  - publicPath is build/
    - place assets are in memory
  - doing it all in memory, don't need build folder

  https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f
