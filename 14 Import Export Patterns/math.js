// 1. expoting single variable or function
// const math = (a, b) => {
//   return a + b;
// };

// module.exports = math;

// 2. exporting while defining a function
// module.exports = (a, b) => {
//   return a + b;
// };

// 3. exporting multiple variable or function
// const add = (a, b) => {
//   return a + b;
// };
// const sub = (a, b) => {
//   return a - b;
// };
// module.exports = {
//   add, // if key and value are same ES15 syntax
//   sub,
// };

// 4. exporting while defining multiple functions
// module.exports.add = (a, b) => {
//   return a + b;
// };
// module.exports.sub = (a, b) => {
//   return a - b;
// };

// 5. exporting while defining multiple functions
// using first parameter of iife
exports.add = (a, b) => {
  return a + b;
};
exports.sub = (a, b) => {
  return a - b;
};
