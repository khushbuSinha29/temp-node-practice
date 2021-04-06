// npn -global command, comes with node
// npm --version

// local dependency - use it only in this particular project 
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo install -g <packageName> (mac) 

// package.json - menifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y(everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

// .gitignore file contains the file that is to be ignored by the source control