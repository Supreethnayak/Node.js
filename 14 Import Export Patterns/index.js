// 1,2
// const math = require("./math")
// console.log(math(5,6));

// 3,4,5
const math = require("./math");
const { add, sub } = math; // destructure
console.log(add(5, 6));
console.log(sub(5, 6));
