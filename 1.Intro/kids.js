//super class
// get and set in classes
// The get syntax binds an object property to a function that will be called when that property is looked up.
//The set syntax binds an object property to a function to be called when there is an attempt to set that property.
class Parent {
  constructor(parentsName) {
    this.name = parentsName;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

// sub class
class Child extends Parent {
  constructor(name) {
    super(name);
    //super.setName(name); --> almost same as the next line
    //this.name = name; --> anothe way
  }
}

const parent = new Parent("John");
parent.setName("Carl");

const child = new Child("Kate");

//console.log(child.getName());

module.export = Child;
