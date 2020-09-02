function functionName() {
  console.log("Does it work?");
}

functionName();

// define a funtion in a const called variableFunction

const myFunction = () => {};

const myFunction2 = function () {};

// call back functions - when u add argument in the function

// Console log "hug Ana" ... define a hug method
function hug(name) {
  return "hug" + name;
}

function poke(name) {
  return "poke" + name;
}

// if we want to create a call back on the above functions then:

function interactWithSomeone(interactiveFunction, name) {
  console.log(interactiveFunction(name));
}

interactWithSomeone(poke, "Ana");
interactWithSomeone(hug, "Ana");

// Another way
interactWithSomeone((name) => {
  return "kick" + name;
}, "Ana");
