// To avoid module caching
// export class, not instance

// 2. import class - then creating instance of it
const superHero = require("./superHero");
const batman = new superHero("batman");
console.log(batman.getName());
batman.setName("Linus");
console.log(batman.getName());

const superman = new superHero("Superman");
console.log(superman.getName());
superman.setName("Brendan Eich");
console.log(superman.getName());
