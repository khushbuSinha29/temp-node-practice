//GLOBALS - NO WINDOWS

// __dirname - path of current directory
// __filename - file name
// require - function to use modules(file)
// module - info about current module (file)
// process - info about env where the program is being executed

// console.log(__dirname);


//Modules - encapsulated code (only share minimum)
// Node uses CommonJs library, every file in node is a module (by default)

const names = require('./4names'); //require takes the name of the module which you want to import 
const sayHello = require('./5-utils'); // We can also change the name 
const data = require('./6-alternative');

require('./7-mind_grenade');

// console.log(data)
// console.log(names);



// sayHello('Khushbu Sinha');
// sayHello('Lovely Sinha ');
// sayHi(names.Khush);
// sayHi(names.Love);

// To conclude - If we waant to export one value we just set module.exports to that value (like in 4names.js and 
// 5utils.js) and then whereever we want to use it we just import it (using require)and set it equal to some kind of variables 
// and once we use that variable we have access to that value.
// When we have multiple values we set modules.export equal to an object ={khush, love} 