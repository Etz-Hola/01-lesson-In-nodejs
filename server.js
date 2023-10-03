console.log("hello word");
console.log(global)


// const { log } = require("console");
// const os = require("os");
// const path = require("path");



// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// module.exports = {add,subtract,multiply,divide}


const { add, subtract, multiply, divide} = require("./math");


console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// module.exports = {add,subtract,multiply,divide}






// const { dirname } = require("path");
//     console.log(os.type())           //Windows_NT
//     console.log(os.version());
//     console.log(os.homedir());

//     console.log(__dirname);
//     console.log(__filename);
//     console.log(path.dirname(__filename));
//     console.log(path.basename(__filename));
//     console.log(path.extname(__filename));
//     console.log(path.extname(__filename));
//     console.log(path.parse(__filename));