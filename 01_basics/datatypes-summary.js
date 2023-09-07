// Primitive or Non Primitive

// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt.

// JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false


const bigNumber = 34576869737922910193n


// Reference (Non primitive)

// Array, Objects, functions

//Array =>
const heros = ["shaktiman", "naagraj", "doga"];

// Objects =>
let myObj = {
    name : "Abusufyan",
    age : 22,
}

// Functions =>

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);       // bigint
console.log(typeof outsideTemp);    // object
console.log(typeof scoreValue);    // number
console.log(typeof myFunction);        // function
console.log(typeof heros);            // object
console.log(typeof anotherId);       // symbol
console.log(typeof myObj);              // object
console.log(typeof isLoggedIn);        // boolean


// https://262.ecma-international.org/5.1/#sec-11.4.3

// Typeof val	                                          //     Result 

// Undefined	                                                "undefined"
// Null	                                                        "object"
// Boolean	                                                    "boolean"
// Number	                                                    "number"
// String	                                                    "string" 
// Object (native and does not implement [[Call]])	            "object"
// Object (native or host and does implement [[Call]])	        "function"
// Object (host and does not implement [[Call]])	            Implementation-defined except may not be "undefined", "boolean", "number", or "string".