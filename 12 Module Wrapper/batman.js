const superHero = "Batman";
console.log(superHero);

// NodeJs coverts above code to below code

(function (exports, require, module, __filename, __dirname) {
  const superHero = "Batman";
  console.log(superHero);
})();

// for variable and function
// so each have their own scope
// if different modules/files have same file name - wont throw error
