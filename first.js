//basic code in JavaScript
console.log("Hello World!");

//variable declaration in JavaScript
Name = "Avika Mane"
console.log(Name);

age = 18;
console.log(age);

a = 10;
b = 20;
c = null;
d = undefined;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//let and const in JavaScript
let city = "Pune";
console.log(city);
let name = "Avika";
console.log(name);

const country = "India";
console.log(country);
const pi = 3.14;
console.log(pi);

//data types in JavaScript

let num = 42; //number
let str = "Hello"; //string
let bool = true; //boolean
let und; //undefined
let nul = null; //null
let bigInt = 9007199254740991n; //bigint
let sym = Symbol("sym"); //symbol

console.log(num);
console.log(str);
console.log(bool);
console.log(und);
console.log(nul);
console.log(bigInt);
console.log(sym);
// above data types are primitive data types in JavaScript

// non-primitive data types in JavaScript(objects, arrays, functions)
const student = {
    name: "Avika",
    age: 18,
    city: "Pune"
};
console.log(student);

//accessing object properties
console.log(student["name"])
console.log(student.age);
// above both the syntax are correct to access the properties of an object in JavaScript

//comments in JavaScript
// comments are that part of code which are not executed by the JavaScript engine
// there are two types of comments in JavaScript
// single line comment
/* this is a 
multi line comment in JavaScript */