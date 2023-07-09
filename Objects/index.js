// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Object Assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log("\n---------------------------------------------------\n");

console.log("Object.assign({}, target, source)\n");
console.log(`this will create new object and then copy\n`);
let obj1 = Object.assign({}, target, source);

console.log(target);
console.log(source);
console.log(obj1);
console.log("\n---------------------------------------------------\n");

console.log("\nObject.assign(target, source)\n");
console.log(
  "will copy the value into first object and its treated as target\n"
);

Object.assign(target, source);

console.log(target);
console.log(source);

console.log("\n---------------------------------------------------\n");

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
console.log("Object.create(obj)\n");

let obj = {
  name: "Anjani",
  getname: function () {
    console.log(this.name);
  },
};

let temp = Object.create(obj);

temp.getname();

/* Object.freeze() static method freezes an object.
 Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, 
their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
 freeze() returns the same object that was passed in. */
const obj2 = {
  prop: 42,
};

Object.freeze(obj2);
obj2.prop = 33;
// Throws an error in strict mode

console.log(obj2.prop);
// Expected output: 42
