"use strict"; // treat all js code in new version 

// alert (3+3) // we are using nodejs not browser this totally work on browser as it is document 
 
// scalablity and readablity  are very important and mainly try to avoid ';'


let  name ="hitesh" // string datatype
let age =12 // number datatype
let isloogedin =false //boolean datatype

console.log(typeof name ) // type of shows the type of that value 
console.log(typeof null); // *! type of it will be object    ******** imp **********
console.log(typeof undefined); //* type of it will be undifined only 


//! 📚 Summary / Notes

/*
👉 Datatypes in JavaScript are divided based on how they access and store in memory:

[A] Primitive Datatypes  (call by value)
1. Number   = up to 2^53 (normal numbers)
2. String   = " " (text inside quotes)
3. Boolean  = true / false
4. BigInt   = for big numbers
5. Null     = standalone value, represents empty (nothing)
6. Undefined= means value is not defined yet
7. Symbol   = used to find uniqueness (unique identifiers)

[B] Non-Primitive Datatypes  (call by reference)
1. Object
2. Array
3. Functions
*/

//! 🔥 JavaScript is a dynamic type language
// (You don't need to declare type, it assigns at runtime)

//! 📚 Memory in JavaScript

// *! Stack Memory  => used by Primitive Datatypes (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
// *! Heap Memory   => used by Non-Primitive Datatypes (Object, Array, Function)
