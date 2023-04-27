// 1. creating instance of (superHero)
const superHeroOne = require("./superHero");
console.log(superHeroOne.getName());
superHeroOne.setName("Superman");
console.log(superHeroOne.getName());

const superHeroTwo = require("./superHero");
console.log(superHeroTwo.getName());

// when you require a module, it is loaded and cached
// object is pass by reference - so old updated value is accessed
