const kids = require("./kids.js");

// initiate kids...and console log
//const newKid = new kids.Child("Ola");

//const AnotherNewKid = kids.Child;
const AnotherNewKid = require("./kids.js").Child;
//console.log(newKid);

console.log(new AnotherNewKid("New Kid"));
